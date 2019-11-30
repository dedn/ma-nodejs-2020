class Planet {
  constructor(name, diameter) {
    this.name = name;
    this.diameter = diameter;
    this.volume = this.constructor.getVolume(this.diameter);
  }

  static getVolume(diameter) {
    const radius = diameter / 2;
    const volume = (4 / 3) * Math.PI * radius ** 3;
    return volume.toFixed(4);
  }

  getNameAndVolume() {
    console.log('planet name', this.name, 'planet volume', this.volume);
  }
}

module.exports = new Planet('Earth', 12742);
