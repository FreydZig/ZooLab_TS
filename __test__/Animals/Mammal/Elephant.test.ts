const {Penguin} = require( "../../../src/ZooLab/Animals/Birds/Penguin");
const {Snake} = require( "../../../src/ZooLab/Animals/Reptiles/Snake");
const {Lion} = require("../../../src/ZooLab/Animals/Mammal/Lion");
const {Parrot} = require( "../../../src/ZooLab/Animals/Birds/Parrot");
const {Elephant} = require( "../../../src/ZooLab/Animals/Mammal/Elephant");
const {Bison} = require( "../../../src/ZooLab/Animals/Mammal/Bison");
const {ZooKeeper} = require( "../../../src/ZooLab/Employee/ZooKeeper");
const {FeedTime}= require( "../../../src/ZooLab/FeedTime");
const {Turtle} = require("../../../src/ZooLab/Animals/Reptiles/Turtle");

const elephant = new Elephant(1);

describe('Elephant', () => {
    it('Should be able to create Elephant', () => {
        expect(elephant.RequiredSpaceSqFt).toBe(1000);
        expect(elephant.FavouriteFood).toBe('Vegetable');
        expect(elephant.IsSick).toBe(false);
        expect(elephant.Id).toBe(1);
    })

    it('Should be able to friend with Bison, Parrots and Turtle', () => {
        const bison = new Bison(1);
        const parrot = new Parrot(1);
        const turtle = new Turtle(1);

        expect(elephant.IsFriendlyWith(bison)).toBe(true);
        expect(elephant.IsFriendlyWith(parrot)).toBe(true);
        expect(elephant.IsFriendlyWith(turtle)).toBe(true);
    })

    // it('Should not be able to create Elephant', () => {
    //     expect(() => new Elephant(999, 'Meet', false, 1)).toThrowError('requiredSpaceSqFt < 1000 or/and favouriteFood is not Vegetable');
    // })

    it('Should not be able to friend with Penguin, Elephant, Lion and Snake', () => {
        const penguin = new Penguin(1);
        const lion = new Lion(1);
        const snake = new Snake(1);

        expect(elephant.IsFriendlyWith(elephant)).toBe(false);
        expect(elephant.IsFriendlyWith(penguin)).toBe(false);
        expect(elephant.IsFriendlyWith(lion)).toBe(false);
        expect(elephant.IsFriendlyWith(snake)).toBe(false);
    })
})