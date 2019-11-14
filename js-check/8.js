/**
 * Task 8
 * @constructs Planet
 * @param name
 * @param diameter
 */

class Planet {
    constructor(name, diameter) {
        this.name = name;
        this.diameter = diameter;
        this.volume = this.constructor.getVolume(this.diameter)
    }

    /**
     * get volume
     * @param {number} diameter
     * @returns {number}
     */

    static getVolume(diameter) {
        let radius = diameter / 2;
        let volume = (4 / 3) * Math.PI * Math.pow(radius, 3)
        return volume.toFixed(4)
    }

    /**
     * get name and volume
     */
    getNameAndVolume() {
        console.log('planet name', this.name, 'planet volume', this.volume)
    }
}

let planet = new Planet('Planet', 6);

planet.getNameAndVolume();

let earth = new Planet('Earth', 12742);

earth.getNameAndVolume();
