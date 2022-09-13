const {Penguin} = require( "../../../src/Animals/Birds/Penguin");
const {Snake} = require( "../../../src/Animals/Reptiles/Snake");
const {Lion} = require("../../../src/Animals/Mammal/Lion");
const {Parrot} = require( "../../../src/Animals/Birds/Parrot");
const {Elephant} = require( "../../../src/Animals/Mammal/Elephant");
const {Bison} = require( "../../../src/Animals/Mammal/Bison");
const {ZooKeeper} = require( "../../../src/Employee/ZooKeeper");
const {FeedTime}= require( "../../../src/FeedTime");
const {Turtle} = require("../../../src/Animals/Reptiles/Turtle");

const bison = new Bison(1000, 'Grass', false, 1);

describe('Bison', () => {
    it('Should be able to create Bison', () =>{
        expect(bison.RequiredSpaceSqFt).toBe(1000);
        expect(bison.FavouriteFood).toBe('Grass');
        expect(bison.IsSick).toBe(false);
        expect(bison.Id).toBe(1);
    });

    it('Should be able to friend with Elephant', () => {
        const elephant = new Elephant(1000, 'Vegetable', false, 1);
        expect(bison.IsFriendlyWith(elephant)).toBe(true);
    })

    it('Should not be able to create Bison', () => {
        expect(() => new Bison(999, 'Meet', false, 1)).toThrowError('requiredSpaceSqFt < 1000 or/and favouriteFood is not Grass');
    })

    it('Should not be able to friend with Parrot, Penguin, Lion, Snake and Turtle', () => {
        const lion = new Lion(1000, 'Meet', false, 1);
        const snake = new Snake(2, 'Meet', false, 1);
        const turtle = new Turtle(5, 'Grass', false, 1);
        const parrot = new Parrot(5, 'Grass', false, 1);
        const penguin = new Penguin(10, 'Vegetable', false, 1);

        expect(bison.IsFriendlyWith(lion)).toBe(false);
        expect(bison.IsFriendlyWith(snake)).toBe(false);
        expect(bison.IsFriendlyWith(penguin)).toBe(false);
        expect(bison.IsFriendlyWith(turtle)).toBe(false);
        expect(bison.IsFriendlyWith(parrot)).toBe(false);
    })
})