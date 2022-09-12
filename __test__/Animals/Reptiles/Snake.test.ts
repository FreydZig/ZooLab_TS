const {Penguin} = require( "../../../src/Animals/Birds/Penguin");
const {Snake} = require( "../../../src/Animals/Reptiles/Snake");
const {Lion} = require("../../../src/Animals/Mammal/Lion");
const {Parrot} = require( "../../../src/Animals/Birds/Parrot");
const {Elephant} = require( "../../../src/Animals/Mammal/Elephant");
const {Bison} = require( "../../../src/Animals/Mammal/Bison");
const {ZooKeeper} = require( "../../../src/Employee/ZooKeeper");
const {FeedTime}= require( "../../../src/FeedTime");
const {Turtle} = require("../../../src/Animals/Reptiles/Turtle");

const snake = new Snake(2, 'Meet', [new FeedTime(new Date(), new ZooKeeper())], [10], false, 1);

describe('Snake', () => {
    it('Should be able to create Snake', () =>{
        expect(snake.RequiredSpaceSqFt).toBe(2);
        expect(snake.FavouriteFood).toBe('Meet');
        //expect(snake.FeedTimes).toBe([new FeedTime(new Date(), new ZooKeeper())]);
        expect(snake.FeedSchedule[0]).toBe(10);
        expect(snake.IsSick).toBe(false);
        expect(snake.Id).toBe(1);
    })

    it('Should be able to friend with Snake', () => {
        expect(snake.IsFriendlyWith(snake)).toBe(true);
    })

    it('Should not be able to create Snake', () =>{
        expect(() => new Turtle(2, 'Meet', [new FeedTime(new Date(), new ZooKeeper())], [10], false, 1)).toThrowError('requiredSpaceSqFt < 5 or/and favouriteFood is not Grass');
    })

    it('Should not be able to friend with Parrot, Penguin, Bison, Elephant, Lion and Turtle', function () {
        const parrot = new Parrot(5, 'Grass', [new FeedTime(new Date(), new ZooKeeper())], [10], false, 1);
        const penguin = new Penguin(10, 'Vegetable', [new FeedTime(new Date(), new ZooKeeper())], [10], false, 1);
        const bison = new Bison(1000, 'Grass', [new FeedTime(new Date(), new ZooKeeper())], [10], false, 1);
        const elephant = new Elephant(1000, 'Vegetable', [new FeedTime(new Date(), new ZooKeeper())], [10], false, 1);
        const lion = new Lion(1000, 'Meet', [new FeedTime(new Date(), new ZooKeeper())], [10], false, 1);
        const turtle = new Turtle(5, 'Grass', [new FeedTime(new Date(), new ZooKeeper())], [10], false, 1);

        expect(parrot.IsFriendlyWith(snake)).toBe(false);
        expect(penguin.IsFriendlyWith(snake)).toBe(false);
        expect(bison.IsFriendlyWith(snake)).toBe(false);
        expect(elephant.IsFriendlyWith(snake)).toBe(false);
        expect(lion.IsFriendlyWith(snake)).toBe(false);
        expect(turtle.IsFriendlyWith(snake)).toBe(false);
    });
})