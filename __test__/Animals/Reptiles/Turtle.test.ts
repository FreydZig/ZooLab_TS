//import {Turtle} from "../../../src/Animals/Reptiles/Turtle";
//import {FeedTime} from "../../../src/FeedTime";
const {Penguin} = require( "../../../src/ZooLab/Animals/Birds/Penguin");
const {Snake} = require( "../../../src/ZooLab/Animals/Reptiles/Snake");
const {Lion} = require("../../../src/ZooLab/Animals/Mammal/Lion");
const {Parrot} = require( "../../../src/ZooLab/Animals/Birds/Parrot");
const {Elephant} = require( "../../../src/ZooLab/Animals/Mammal/Elephant");
const {Bison} = require( "../../../src/ZooLab/Animals/Mammal/Bison");
const {ZooKeeper} = require( "../../../src/ZooLab/Employee/ZooKeeper");
const {FeedTime}= require( "../../../src/ZooLab/FeedTime");
const {Turtle} = require("../../../src/ZooLab/Animals/Reptiles/Turtle");

describe('Turtle',() => {
    it('Should be able to create turtle', () => {
        const turtle = new Turtle(0);

        expect(turtle.Id).toBe(0);
        expect(turtle.RequiredSpaceSqFt).toBe(5);
        expect(turtle.IsSick).toBeFalsy();
        expect(turtle.Id).toBe(0);
    })
    it('Should be able to friend with Parrot, Bison, Elephant and Turtle', () =>{
        const turtle = new Turtle(0);
        const bison = new Bison(1);
        const parrot = new Parrot(1);
        const elephant = new Elephant(1);

        expect(turtle.IsFriendlyWith(bison)).toBeTruthy();
        expect(turtle.IsFriendlyWith(parrot)).toBeTruthy();
        expect(turtle.IsFriendlyWith(elephant)).toBeTruthy();
    })

    // it('Should not be able to create turtle', () => {
    //     const RequiredSpaceSqFt = 4;
    //     const FavouriteFood = 'Meet';
    //     const IsSick = false;
    //     const Id = 0;
    //
    //     //const turtle = new Turtle(RequiredSpaceSqFt, FavouriteFood, FeedTimes, FeedSchedule, IsSick, Id);
    //
    //     expect(() => {new Turtle(RequiredSpaceSqFt, FavouriteFood, IsSick, Id)}).toThrowError('requiredSpaceSqFt < 5 or/and favouriteFood is not Grass');
    // })

    it('Should not be able to friend with Penguin, Snake and Lion', () =>{
        const turtle = new Turtle(0);
        const snake = new Snake(0);
        const penguin = new Penguin(1)
        const lion = new Lion(1);

        expect(turtle.IsFriendlyWith(snake)).toBeFalsy();
        expect(turtle.IsFriendlyWith(penguin)).toBeFalsy();
        expect(turtle.IsFriendlyWith(lion)).toBeFalsy();
    })
})