const {Zoo} = require( "../src/Zoo");

const {ZooApp} = require("../src/ZooApp");

describe('ZooApp', () => {
    it('Should be able to create ZooApp', () => {
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