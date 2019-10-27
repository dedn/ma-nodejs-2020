/**
 * Task 10
 */

class Storage {
    constructor() {
        this.storage = new Map();
    }

    list() {
        return new Promise(resolve => resolve(Object.keys(this.storage)));
    }

    fetch(key) {
        return new Promise(resolve => resolve(key));
    }

    store(key, data) {
        return new Promise(resolve => resolve(key, data));
    }

    destroy(key) {
        delete this.storage[key];
        return new Promise.resolve();
    }

    storeList([{key, data}]) {
        return new Promise(resolve => resolve([{key, data}]));
    }

    destroyStartedWith(beginningOfKey) {
        return new Promise((resolve) => {
            for (let [key] of this.storage) {
                if (key === beginningOfKey) delete this.storage[key]
            }
            resolve('resolved')
        });
    }

    fetchInTimeOrFail(key, timeout) {
        return new Promise((resolve, reject) => {
            this.fetch(key).then(resolve);
            setTimeout(() => reject('not found'), timeout)
        })
    }
}

const storage = new Storage();
