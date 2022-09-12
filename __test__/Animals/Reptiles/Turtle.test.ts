//import {Turtle} from "../../../src/Animals/Reptiles/Turtle";
//import {FeedTime} from "../../../src/FeedTime";
const {Penguin} = require( "../../../src/Animals/Birds/Penguin");
const {Snake} = require( "../../../src/Animals/Reptiles/Snake");
const {Lion} = require("../../../src/Animals/Mammal/Lion");
const {Parrot} = require( "../../../src/Animals/Birds/Parrot");
const {Elephant} = require( "../../../src/Animals/Mammal/Elephant");
const {Bison} = require( "../../../src/Animals/Mammal/Bison");
const {ZooKeeper} = require( "../../../src/Employee/ZooKeeper");
const {FeedTime}= require( "../../../src/FeedTime");
const {Turtle} = require("../../../src/Animals/Reptiles/Turtle");

describe('Turtle',() => {
    it('Should be able to create turtle', () => {
        const RequiredSpaceSqFt = 10;
        const FavouriteFood = 'Grass';
        const FeedTimes =  [new FeedTime(new Date(), new ZooKeeper())];
        const FeedSchedule = [10];
        const IsSick = false;
        const Id = 0;

        const turtle = new Turtle(RequiredSpaceSqFt, FavouriteFood, FeedTimes, FeedSchedule, IsSick, Id);

        expect(turtle.Id).toBe(0);
        expect(turtle.RequiredSpaceSqFt).toBe(10);
        expect(turtle.FeedTimes).toBe(FeedTimes);
        expect(turtle.FeedSchedule[0]).toBe(10);
        expect(turtle.IsSick).toBeFalsy();
        expect(turtle.Id).toBe(0);
    })
    it('Should be able to friend with Parrot, Bison, Elephant and Turtle', () =>{
        const RequiredSpaceSqFt = 10;
        const FavouriteFood = 'Grass';
        const FeedTimes =  [new FeedTime(new Date(), new ZooKeeper())];
        const FeedSchedule = [10];
        const IsSick = false;
        const Id = 0;

        const turtle = new Turtle(RequiredSpaceSqFt, FavouriteFood, FeedTimes, FeedSchedule, IsSick, Id);
        const bison = new Bison(1000, 'Grass', [new FeedTime(new Date(), new ZooKeeper())], [10], false, 1);
        const parrot = new Parrot(5, 'Grass', [new FeedTime(new Date(), new ZooKeeper())], [10], false, 1);
        const elephant = new Elephant(1000, 'Vegetable', [new FeedTime(new Date(), new ZooKeeper())], [10], false, 1);

        expect(turtle.IsFriendlyWith(bison)).toBeTruthy();
        expect(turtle.IsFriendlyWith(parrot)).toBeTruthy();
        expect(turtle.IsFriendlyWith(elephant)).toBeTruthy();
    })

    it('Should not be able to create turtle', () => {
        const RequiredSpaceSqFt = 4;
        const FavouriteFood = 'Meet';
        const FeedTimes =  [new FeedTime(new Date(), new ZooKeeper())];
        const FeedSchedule = [10];
        const IsSick = false;
        const Id = 0;

        //const turtle = new Turtle(RequiredSpaceSqFt, FavouriteFood, FeedTimes, FeedSchedule, IsSick, Id);

        expect(() => {new Turtle(RequiredSpaceSqFt, FavouriteFood, FeedTimes, FeedSchedule, IsSick, Id)}).toThrowError('requiredSpaceSqFt < 5 or/and favouriteFood is not Grass');
    })

    it('Should not be able to friend with Penguin, Snake and Lion', () =>{
        const RequiredSpaceSqFt = 10;
        const FavouriteFood = 'Grass';
        const FeedTimes =  [new FeedTime(new Date(), new ZooKeeper())];
        const FeedSchedule = [10];
        const IsSick = false;
        const Id = 0;

        const turtle = new Turtle(RequiredSpaceSqFt, FavouriteFood, FeedTimes, FeedSchedule, IsSick, Id);
        const snake = new Snake(2, 'Meet', FeedTimes, FeedSchedule, IsSick, Id);
        const penguin = new Penguin(10, 'Vegetable', [new FeedTime(new Date(), new ZooKeeper())], [10], false, 1)
        const lion = new Lion(1000, 'Meet', [new FeedTime(new Date(), new ZooKeeper())], [10], false, 1);

        expect(turtle.IsFriendlyWith(snake)).toBeFalsy();
        expect(turtle.IsFriendlyWith(penguin)).toBeFalsy();
        expect(turtle.IsFriendlyWith(lion)).toBeFalsy();
    })
})