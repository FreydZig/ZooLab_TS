const {Penguin} = require( "../../../src/Animals/Birds/Penguin");
const {Snake} = require( "../../../src/Animals/Reptiles/Snake");
const {Lion} = require("../../../src/Animals/Mammal/Lion");
const {Parrot} = require( "../../../src/Animals/Birds/Parrot");
const {Elephant} = require( "../../../src/Animals/Mammal/Elephant");
const {Bison} = require( "../../../src/Animals/Mammal/Bison");
const {ZooKeeper} = require( "../../../src/Employee/ZooKeeper");
const {FeedTime}= require( "../../../src/FeedTime");
const {Turtle} = require("../../../src/Animals/Reptiles/Turtle");

const penguin = new Penguin(10, 'Vegetable', [new FeedTime(new Date(), new ZooKeeper())], [10], false, 1);

describe('Penguin', () => {
    it('Should be able to create Penguin', () => {
        expect(penguin.RequiredSpaceSqFt).toBe(10);
        expect(penguin.FavouriteFood).toBe('Vegetable');
        expect(penguin.FeedSchedule[0]).toBe(10);
        expect(penguin.IsSick).toBe(false);
        expect(penguin.Id).toBe(1);
    })

    it('Should be able t friend with Penguin', () => {
        expect(penguin.IsFriendlyWith(penguin)).toBe(true);
    })

    it('Should not be able to create Penguin', () => {
        expect(() => new Penguin(9, 'Meet', [new FeedTime(new Date(), new ZooKeeper())], [10], false, 1)).toThrowError('requiredSpaceSqFt < 9 or/and favouriteFood is not Vegetable');
    })

    it('Should not be able to friend with Parrot, Bison, Elephant, Lion, Snake and Turtle', () => {
        const lion = new Lion(1000, 'Meet', [new FeedTime(new Date(), new ZooKeeper())], [10], false, 1);
        const snake = new Snake(2, 'Meet', [new FeedTime(new Date(), new ZooKeeper())], [10], false, 1);
        const bison = new Bison(1000, 'Grass', [new FeedTime(new Date(), new ZooKeeper())], [10], false, 1);
        const elephant = new Elephant(1000, 'Vegetable', [new FeedTime(new Date(), new ZooKeeper())], [10], false, 1);
        const turtle = new Turtle(5, 'Grass', [new FeedTime(new Date(), new ZooKeeper())], [10], false, 1);
        const parrot = new Parrot(5, 'Grass', [new FeedTime(new Date(), new ZooKeeper())], [10], false, 1);

        expect(penguin.IsFriendlyWith(lion)).toBe(false);
        expect(penguin.IsFriendlyWith(snake)).toBe(false);
        expect(penguin.IsFriendlyWith(bison)).toBe(false);
        expect(penguin.IsFriendlyWith(elephant)).toBe(false);
        expect(penguin.IsFriendlyWith(turtle)).toBe(false);
        expect(penguin.IsFriendlyWith(parrot)).toBe(false);
    })
})