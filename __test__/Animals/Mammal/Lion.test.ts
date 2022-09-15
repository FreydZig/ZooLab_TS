const {Penguin} = require( "../../../src/ZooLab/Animals/Birds/Penguin");
const {Snake} = require( "../../../src/ZooLab/Animals/Reptiles/Snake");
const {Lion} = require("../../../src/ZooLab/Animals/Mammal/Lion");
const {Parrot} = require( "../../../src/ZooLab/Animals/Birds/Parrot");
const {Elephant} = require( "../../../src/ZooLab/Animals/Mammal/Elephant");
const {Bison} = require( "../../../src/ZooLab/Animals/Mammal/Bison");
const {ZooKeeper} = require( "../../../src/ZooLab/Employee/ZooKeeper");
const {FeedTime}= require( "../../../src/ZooLab/FeedTime");
const {Turtle} = require("../../../src/ZooLab/Animals/Reptiles/Turtle");

const lion = new Lion(1);

describe('Lion', () => {
    it('Should be able to create Lion', () => {
        expect(lion.RequiredSpaceSqFt).toBe(1000);
        expect(lion.FavouriteFood).toBe('Meet');
        expect(lion.IsSick).toBe(false);
        expect(lion.Id).toBe(1);
    })

    it('Should be able to friend with Lion', () => {
        expect(lion.IsFriendlyWith(lion)).toBe(true);
    })

    // it('Should not be able to create Lion', () => {
    //     expect(() => new Lion(999, 'Vegetable', false, 1)).toThrowError('requiredSpaceSqFt < 1000 or/and favouriteFood is not Meet');
    // })

    it('Should not be able to friend with Parrot, Bison, Elephant, Penguin, Snake and Turtle', () => {
        const snake = new Snake(1);
        const bison = new Bison(1);
        const elephant = new Elephant(1);
        const turtle = new Turtle(1);
        const parrot = new Parrot(1);
        const penguin = new Penguin(1);

        expect(lion.IsFriendlyWith(snake)).toBe(false);
        expect(lion.IsFriendlyWith(bison)).toBe(false);
        expect(lion.IsFriendlyWith(elephant)).toBe(false);
        expect(lion.IsFriendlyWith(turtle)).toBe(false);
        expect(lion.IsFriendlyWith(parrot)).toBe(false);
        expect(lion.IsFriendlyWith(penguin)).toBe(false);
    })
})