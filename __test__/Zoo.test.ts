const {Elephant} = require( "../src/Animals/Mammal/Elephant");

const {Veterinarian}  = require("../src/Employee/Veterinarian");

const {Turtle} = require( "../src/Animals/Reptiles/Turtle");
const {Snake} = require( "../src/Animals/Reptiles/Snake");
const {Lion} = require( "../src/Animals/Mammal/Lion");
const {Parrot} = require( "../src/Animals/Birds/Parrot");

const {Penguin} = require( "../src/Animals/Birds/Penguin");

const {Bison} = require( "../src/Animals/Mammal/Bison");
const {FeedTime} = require( "../src/FeedTime");
const {ZooKeeper} = require( "../src/Employee/ZooKeeper");

const {Zoo} = require("../src/Zoo");

describe('Zoo', () => {
    it('Should be able to create Zoo', () => {
        const zoo = new Zoo('here');

        expect(zoo.Location).toBe('here');
    })

    it('Should be able to Add Enclosure', () => {
        const zoo = new Zoo('here');

        zoo.AddEnclosure('One', 10);

        expect(zoo.Enclosures[0].Name).toBe('One');
        expect(zoo.Enclosures[0].SquareFeet).toBe(10);
    });

    it('Should be able to Find Available Enclosure', () => {
        const zoo = new Zoo('here');
        const bison = new Bison(1);
        const penguin = new Penguin(1);
        const elephant = new Elephant(2)

        zoo.AddEnclosure('One1', 0);
        zoo.AddEnclosure('One2', 120);
        zoo.AddEnclosure('One3', 1000);
        zoo.AddEnclosure('One4', 1000);
        zoo.AddEnclosure('One5', 50);
        zoo.AddEnclosure('One6', 60);

        zoo.Enclosures[2].AddAnimal(bison);

        expect(zoo.FindAvailableEnclosure(elephant).Name).toBe('One3')
        expect(zoo.FindAvailableEnclosure(bison).Name).toBe('One4');
        expect(zoo.FindAvailableEnclosure(penguin).Name).toBe('One2');
    })

    it('Should be able to Hire New Employee', () => {
        const zoo = new Zoo('here');
        const zooKeeper = new ZooKeeper('Name','Last Name','Snake')

        zoo.HireEmployee(zooKeeper);

        expect(zoo.Employees[0].FirstName).toBe('Name');
        expect(zoo.Employees[0].LastName).toBe('Last Name');
        expect(zoo.Employees[0].AnimalExperiences).toBe('Snake');
    })

    it('Should be able to Feed Animals', () => {
        const zoo = new Zoo('here');

        const zooKeeperSnake = new ZooKeeper('Name','Last Name','Snake')
        const zooKeeperBison = new ZooKeeper('Name','Last Name','Bison')
        const zooKeeperLion = new ZooKeeper('Name','Last Name','Lion')
        const zooKeeperParrot = new ZooKeeper('Name','Last Name','Parrot')

        const bison = new Bison(1);
        const snake = new Snake(1);
        const lion = new Lion(1);
        const parrot = new Parrot(1);
        //const turtle = new Turtle(5, 'Grass', false, 1);

        zoo.AddEnclosure('One1', 1000);
        zoo.AddEnclosure('One2', 2);
        zoo.AddEnclosure('One4', 1000);
        zoo.AddEnclosure('One5', 5);
        zoo.AddEnclosure('One6', 5);

        zoo.Enclosures[0].Animals.push(bison);
        zoo.Enclosures[1].Animals.push(snake);
        zoo.Enclosures[2].Animals.push(lion);
        zoo.Enclosures[3].Animals.push(parrot);

        zoo.HireEmployee(zooKeeperSnake);
        zoo.HireEmployee(zooKeeperBison);
        zoo.HireEmployee(zooKeeperLion);
        zoo.HireEmployee(zooKeeperParrot);

        zoo.FeedAnimals(new Date());

        //expect(zoo.Employees.length).toBe(0);

        expect(zoo.Enclosures[0].Animals[0].FeedTimes[0].FeedTime.getDate()).toBe(new Date().getDate());
        expect(zoo.Enclosures[1].Animals[0].FeedTimes[0].FeedTime.getDate()).toBe(new Date().getDate());
        expect(zoo.Enclosures[2].Animals[0].FeedTimes[0].FeedTime.getDate()).toBe(new Date().getDate());
        expect(zoo.Enclosures[3].Animals[0].FeedTimes[0].FeedTime.getDate()).toBe(new Date().getDate());
        //expect(zoo.Enclosures[4].Animals[0].FeedTimes[0].FeedTime.getDate()).toBe(new Date().getDate());
    })

    it('Should be able to Heel Animals', () => {
        const zoo = new Zoo('here');

        const zooKeeperSnake = new Veterinarian('Name','Last Name','Snake')
        const zooKeeperBison = new Veterinarian('Name','Last Name','Bison')
        const zooKeeperLion = new Veterinarian('Name','Last Name','Lion')
        const zooKeeperParrot = new Veterinarian('Name','Last Name','Parrot')

        const bison = new Bison(1);
        const snake = new Snake(1);
        const lion = new Lion(1);
        const parrot = new Parrot(1);

        bison.IsSick = true;
        snake.IsSick = true;
        lion.IsSick = true;
        parrot.IsSick = true;

        zoo.AddEnclosure('One1', 1000);
        zoo.AddEnclosure('One2', 2);
        zoo.AddEnclosure('One4', 1000);
        zoo.AddEnclosure('One5', 5);
        zoo.AddEnclosure('One6', 5);

        zoo.Enclosures[0].Animals.push(bison);
        zoo.Enclosures[1].Animals.push(snake);
        zoo.Enclosures[2].Animals.push(lion);
        zoo.Enclosures[3].Animals.push(parrot);

        zoo.HireEmployee(zooKeeperSnake);
        zoo.HireEmployee(zooKeeperBison);
        zoo.HireEmployee(zooKeeperLion);
        zoo.HireEmployee(zooKeeperParrot);

        expect(zoo.Enclosures[0].Animals[0].IsSick).toBe(true);
        expect(zoo.Enclosures[1].Animals[0].IsSick).toBe(true);
        expect(zoo.Enclosures[2].Animals[0].IsSick).toBe(true);
        expect(zoo.Enclosures[3].Animals[0].IsSick).toBe(true);

        zoo.HeelAnimal();

        expect(zoo.Enclosures[0].Animals[0].IsSick).toBe(false);
        expect(zoo.Enclosures[1].Animals[0].IsSick).toBe(false);
        expect(zoo.Enclosures[2].Animals[0].IsSick).toBe(false);
        expect(zoo.Enclosures[3].Animals[0].IsSick).toBe(false);
    })
    //TODO: Add "NOT" tests
})