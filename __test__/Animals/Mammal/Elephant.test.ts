const {Penguin} = require( "../../../src/Animals/Birds/Penguin");
const {Snake} = require( "../../../src/Animals/Reptiles/Snake");
const {Lion} = require("../../../src/Animals/Mammal/Lion");
const {Parrot} = require( "../../../src/Animals/Birds/Parrot");
const {Elephant} = require( "../../../src/Animals/Mammal/Elephant");
const {Bison} = require( "../../../src/Animals/Mammal/Bison");
const {ZooKeeper} = require( "../../../src/Employee/ZooKeeper");
const {FeedTime}= require( "../../../src/FeedTime");
const {Turtle} = require("../../../src/Animals/Reptiles/Turtle");

const elephant = new Elephant(1000, 'Vegetable', [new FeedTime(new Date(), new ZooKeeper())], [10], false, 1);

describe('Elephant', () => {
    it('Should be able to create Elephant', () => {
        expect(elephant.RequiredSpaceSqFt).toBe(1000);
        expect(elephant.FavouriteFood).toBe('Vegetable');
        expect(elephant.FeedSchedule[0]).toBe(10);
        expect(elephant.IsSick).toBe(false);
        expect(elephant.Id).toBe(1);
    })

    it('Should be able to friend with Bison, Parrots and Turtle', () => {
        const bison = new Bison(1000, 'Grass', [new FeedTime(new Date(), new ZooKeeper())], [10], false, 1);
        const parrot = new Parrot(5, 'Grass', [new FeedTime(new Date(), new ZooKeeper())], [10], false, 1);
        const turtle = new Turtle(5, 'Grass', [new FeedTime(new Date(), new ZooKeeper())], [10], false, 1);

        expect(elephant.IsFriendlyWith(bison)).toBe(true);
        expect(elephant.IsFriendlyWith(parrot)).toBe(true);
        expect(elephant.IsFriendlyWith(turtle)).toBe(true);
    })

    it('Should not be able to create Elephant', () => {
        expect(() => new Elephant(999, 'Meet', [new FeedTime(new Date(), new ZooKeeper())], [10], false, 1)).toThrowError('requiredSpaceSqFt < 1000 or/and favouriteFood is not Vegetable');
    })

    it('Should not be able to friend with Penguin, Elephant, Lion and Snake', () => {
        const penguin = new Penguin(10, 'Vegetable', [new FeedTime(new Date(), new ZooKeeper())], [10], false, 1);
        const lion = new Lion(1000, 'Meet', [new FeedTime(new Date(), new ZooKeeper())], [10], false, 1);
        const snake = new Snake(2, 'Meet', [new FeedTime(new Date(), new ZooKeeper())], [10], false, 1);

        expect(elephant.IsFriendlyWith(elephant)).toBe(false);
        expect(elephant.IsFriendlyWith(penguin)).toBe(false);
        expect(elephant.IsFriendlyWith(lion)).toBe(false);
        expect(elephant.IsFriendlyWith(snake)).toBe(false);
    })
})