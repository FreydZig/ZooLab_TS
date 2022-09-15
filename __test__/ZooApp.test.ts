const {Zoo} = require( "../src/ZooLab/Zoo");

const {ZooApp} = require("../src/ZooLab/ZooApp");

describe('ZooConsole', () => {
    it('Should be able to create ZooConsole', () => {
        const zooApp = new ZooApp();

        expect(zooApp instanceof ZooApp).toBe(true);
    })

    it('Should be able to Add Zoo', () => {
        const zooApp = new ZooApp();
        const zoo = new Zoo('Here');

        zooApp.AddZoo(zoo);

        expect(zooApp._zoos[0].Location).toBe('Here');
    });
})