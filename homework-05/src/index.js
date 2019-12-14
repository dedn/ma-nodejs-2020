const path = require('path');
const fsp = require('fs').promises;
const zlib = require('zlib');
const { promisify } = require('util');

const gunzip = promisify(zlib.gunzip);
const gzip = promisify(zlib.gzip);

const inputDirName = 'input';
const outputDirName = 'output';
const outputFileName = 'result.json.gz';
const outputUnCompressedName = 'result.json';

const inputDir = path.join(process.cwd(), inputDirName);
const outputFile = path.join(process.cwd(), outputDirName, outputFileName);
const outputUnCompressedFile = path.join(process.cwd(), outputDirName, outputUnCompressedName);

async function getInputFileList() {
  let fileNames = [];

  try {
    fileNames = await fsp.readdir(inputDir);
  } catch (e) {
    console.log('directory cannot be read', inputDir);
  }

  return fileNames.map(fileName => path.join(inputDir, fileName));
}

async function getObjectFromFile(filePath) {
  let compresedBuffer;
  let unzippedBuffer;
  try {
    compresedBuffer = await fsp.readFile(filePath);
  } catch (e) {
    console.log('error reading files', e);
  }
  try {
    unzippedBuffer = await gunzip(compresedBuffer);
  } catch (e) {
    console.log('Error while unpacking files', e);
  }

  return JSON.parse(unzippedBuffer);
}

function rebuildUrl(originalUrl) {
  const url = new URL(originalUrl);

  url.protocol = 'https';
  url.pathname = 'devices';

  const ext = path.parse(originalUrl);
  const name = path.parse(originalUrl);

  url.searchParams.append('file', name);
  url.searchParams.append('type', ext);

  return url.toString();
}

async function buildOutputObject(files) {
  const result = {};
  // eslint-disable-next-line
  for (const file of files) {
    // eslint-disable-next-line
    const fileObject = await getObjectFromFile(file);
    fileObject.url = rebuildUrl(fileObject.url);
    const name = path.basename(file.toLowerCase(), '.json.gz');

    result[name] = fileObject;
  }

  return result;
}

async function saveOutput(object) {
  const jsonString = JSON.stringify(object);
  const uncompresedBuffer = Buffer.from(jsonString);

  let compresedBuffer;

  try {
    compresedBuffer = await gzip(uncompresedBuffer);
  } catch (e) {
    console.log('data compression error', e);
  }

  try {
    await fsp.writeFile(outputFile, compresedBuffer);
  } catch (e) {
    console.log('error writing files', e);
  }

  try {
    await fsp.writeFile(outputUnCompressedFile, JSON.stringify(object, null, 4));
  } catch (e) {
    console.log('error writing unpacked file', e);
  }
}

async function start() {
  const inputFiles = await getInputFileList();
  const outputObject = await buildOutputObject(inputFiles);
  await saveOutput(outputObject);
}

start().catch(err => console.log('🐞  🤪  🐛\n', err));
