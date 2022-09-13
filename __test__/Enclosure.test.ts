const {FeedTime} = require("../src/FeedTime");
const {ZooKeeper} = require("../src/Employee/ZooKeeper");
const {Enclosure} = require("../src/Enclosure");
const {Bison} = require("../src/Animals/Mammal/Bison");
const {Zoo} = require("../src/Zoo");

describe('Enclosure', () => {
    it('Should be able to create Enclosure', () => {
        const enclosure = new Enclosure('Bison', new Zoo(''), 2000);

        expect(enclosure.Name).toBe('Bison');
        expect(enclosure.ParentZoo.Location).toBe('');
        expect(enclosure.SquareFeet).toBe(2000);
    })

    it('Should be able to Add Animal', () => {
        const enclosure = new Enclosure('Bison', new Zoo(''), 2000);
        const bison = new Bison(1000, 'Grass', false, 1);
        enclosure.AddAnimal(bison);
        expect(enclosure.Animals[0].Id).toBe(1);
    })
})