const {FeedTime} = require("../src/ZooLab/FeedTime");
const {ZooKeeper} = require("../src/ZooLab/Employee/ZooKeeper");
const {Enclosure} = require("../src/ZooLab/Enclosure");
const {Bison} = require("../src/ZooLab/Animals/Mammal/Bison");
const {Zoo} = require("../src/ZooLab/Zoo");

describe('Enclosure', () => {
    it('Should be able to create Enclosure', () => {
        const enclosure = new Enclosure('Bison', new Zoo(''), 2000);

        expect(enclosure.Name).toBe('Bison');
        expect(enclosure.ParentZoo.Location).toBe('');
        expect(enclosure.SquareFeet).toBe(2000);
    })

    it('Should be able to Add Animal', () => {
        const enclosure = new Enclosure('Bison', new Zoo(''), 2000);
        const bison = new Bison(1);
        enclosure.AddAnimal(bison);
        expect(enclosure.Animals[0].Id).toBe(1);
    })
})