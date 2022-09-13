const {Penguin} = require( "../../../src/Animals/Birds/Penguin");
const {Snake} = require( "../../../src/Animals/Reptiles/Snake");
const {Lion} = require("../../../src/Animals/Mammal/Lion");
const {Parrot} = require( "../../../src/Animals/Birds/Parrot");
const {Elephant} = require( "../../../src/Animals/Mammal/Elephant");
const {Bison} = require( "../../../src/Animals/Mammal/Bison");
const {ZooKeeper} = require( "../../../src/Employee/ZooKeeper");
const {FeedTime}= require( "../../../src/FeedTime");
const {Turtle} = require("../../../src/Animals/Reptiles/Turtle");

const lion = new Lion(1000, 'Meet', false, 1);

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

    it('Should not be able to create Lion', () => {
        expect(() => new Lion(999, 'Vegetable', false, 1)).toThrowError('requiredSpaceSqFt < 1000 or/and favouriteFood is not Meet');
    })

    it('Should not be able to friend with Parrot, Bison, Elephant, Penguin, Snake and Turtle', () => {
        const snake = new Snake(2, 'Meet', false, 1);
        const bison = new Bison(1000, 'Grass', false, 1);
        const elephant = new Elephant(1000, 'Vegetable', false, 1);
        const turtle = new Turtle(5, 'Grass', false, 1);
        const parrot = new Parrot(5, 'Grass', false, 1);
        const penguin = new Penguin(10, 'Vegetable', false, 1);

        expect(lion.IsFriendlyWith(snake)).toBe(false);
        expect(lion.IsFriendlyWith(bison)).toBe(false);
        expect(lion.IsFriendlyWith(elephant)).toBe(false);
        expect(lion.IsFriendlyWith(turtle)).toBe(false);
        expect(lion.IsFriendlyWith(parrot)).toBe(false);
        expect(lion.IsFriendlyWith(penguin)).toBe(false);
    })
})