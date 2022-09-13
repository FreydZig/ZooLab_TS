const {Penguin} = require( "../../../src/Animals/Birds/Penguin");
const {Snake} = require( "../../../src/Animals/Reptiles/Snake");
const {Lion} = require("../../../src/Animals/Mammal/Lion");
const {Parrot} = require( "../../../src/Animals/Birds/Parrot");
const {Elephant} = require( "../../../src/Animals/Mammal/Elephant");
const {Bison} = require( "../../../src/Animals/Mammal/Bison");
const {ZooKeeper} = require( "../../../src/Employee/ZooKeeper");
const {FeedTime}= require( "../../../src/FeedTime");
const {Turtle} = require("../../../src/Animals/Reptiles/Turtle");

const parrot = new Parrot(5, 'Grass', false, 1);

describe('Parrot', () => {
    it('Should be able to create Parrot', () => {
        expect(parrot.RequiredSpaceSqFt).toBe(5);
        expect(parrot.FavouriteFood).toBe('Grass');
        expect(parrot.IsSick).toBe(false);
        expect(parrot.Id).toBe(1);
    });

    it('Should be able to friend with Parrots, Bison, Elephant and Turtle', () => {
        const bison = new Bison(1000, 'Grass', false, 1);
        const elephant = new Elephant(1000, 'Vegetable', false, 1);
        const turtle = new Turtle(5, 'Grass', false, 1);

        expect(parrot.IsFriendlyWith(parrot)).toBe(true);
        expect(parrot.IsFriendlyWith(bison)).toBe(true);
        expect(parrot.IsFriendlyWith(elephant)).toBe(true);
        expect(parrot.IsFriendlyWith(turtle)).toBe(true);
    })

    it('Should not be able to create Parrot', () => {
        expect(() => new Parrot(4, 'Meet', false, 1)).toThrowError();
    })

    it('Should not be able to friend with Penguin, Lion and Snake', () =>{
        const penguin = new Penguin(10, 'Vegetable', false, 1);
        const lion = new Lion(1000, 'Meet', false, 1);
        const snake = new Snake(2, 'Meet', false, 1);

        expect(parrot.IsFriendlyWith(penguin)).toBe(false);
        expect(parrot.IsFriendlyWith(lion)).toBe(false);
        expect(parrot.IsFriendlyWith(snake)).toBe(false);
    })
})