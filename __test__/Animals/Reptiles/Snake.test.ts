const {Penguin} = require( "../../../src/ZooLab/Animals/Birds/Penguin");
const {Snake} = require( "../../../src/ZooLab/Animals/Reptiles/Snake");
const {Lion} = require("../../../src/ZooLab/Animals/Mammal/Lion");
const {Parrot} = require( "../../../src/ZooLab/Animals/Birds/Parrot");
const {Elephant} = require( "../../../src/ZooLab/Animals/Mammal/Elephant");
const {Bison} = require( "../../../src/ZooLab/Animals/Mammal/Bison");
const {ZooKeeper} = require( "../../../src/ZooLab/Employee/ZooKeeper");
const {FeedTime}= require( "../../../src/ZooLab/FeedTime");
const {Turtle} = require("../../../src/ZooLab/Animals/Reptiles/Turtle");

const snake = new Snake(1);

describe('Snake', () => {
    it('Should be able to create Snake', () =>{
        expect(snake.RequiredSpaceSqFt).toBe(2);
        expect(snake.FavouriteFood).toBe('Meet');
        expect(snake.IsSick).toBe(false);
        expect(snake.Id).toBe(1);
    })

    it('Should be able to friend with Snake', () => {
        expect(snake.IsFriendlyWith(snake)).toBe(true);
    })

    // it('Should not be able to create Snake', () =>{
    //     expect(() => new Turtle(2, 'Meet', false, 1)).toThrowError('requiredSpaceSqFt < 5 or/and favouriteFood is not Grass');
    // })

    it('Should not be able to friend with Parrot, Penguin, Bison, Elephant, Lion and Turtle', function () {
        const parrot = new Parrot(1);
        const penguin = new Penguin(1);
        const bison = new Bison(1);
        const elephant = new Elephant(1);
        const lion = new Lion(1);
        const turtle = new Turtle(1);

        expect(parrot.IsFriendlyWith(snake)).toBe(false);
        expect(penguin.IsFriendlyWith(snake)).toBe(false);
        expect(bison.IsFriendlyWith(snake)).toBe(false);
        expect(elephant.IsFriendlyWith(snake)).toBe(false);
        expect(lion.IsFriendlyWith(snake)).toBe(false);
        expect(turtle.IsFriendlyWith(snake)).toBe(false);
    });
})