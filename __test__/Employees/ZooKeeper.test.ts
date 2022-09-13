const {Snake} = require( "../../src/Animals/Reptiles/Snake");

const {Bison} = require("../../src/Animals/Mammal/Bison");
const {FeedTime} = require("../../src/FeedTime");

const {ZooKeeper} = require("../../src/Employee/ZooKeeper");

describe('ZooKeeper', () => {

    it('Should be able to create ZooKeeper', () => {
        const zooKeeper = new ZooKeeper('Bob', 'Faat', 'Snake');

        expect(zooKeeper.FirstName).toBe('Bob');
        expect(zooKeeper.LastName).toBe('Faat');
        expect(zooKeeper.AnimalExperiences).toBe('Snake');
    })

    it('Should be able to Add Animal Experiences', () => {
        const zooKeeper = new ZooKeeper('Bob', 'Faat', 'Snake');
        const bison = new Bison(1000, 'Grass', [new FeedTime(new Date(), new ZooKeeper('Bob', 'Faat', 'Snake'))], [10], false, 1);

        zooKeeper.AddAnimalExperiences(bison);

        expect(zooKeeper.AnimalExperiences).toBe('Bison');
    })

    it('Should be able to Has Animal Experiences', () => {
        const zooKeeper = new ZooKeeper('Bob', 'Faat', 'Snake');
        const snake = new Snake(2, 'Meet', [new FeedTime(new Date(), new ZooKeeper('Bob', 'Faat', 'Snake'))], [10], false, 1);

        expect(zooKeeper.HasAnimalExperience(snake)).toBe(true);
    })

    it('Should be able to Feed Animal', () => {
        const zooKeeper = new ZooKeeper('Bob', 'Faat', 'Snake');
        const snake = new Snake(2, 'Meet', [new FeedTime(new Date(), new ZooKeeper('Bob', 'Faat', 'Snake'))], [10], false, 1);

        expect(zooKeeper.FeedAnimal(snake)).toBe(true);
        expect(snake.FeedTimes[1].FeedTime.getDate()).toBe(new Date().getDate());
    })

    it('Should not be able to Has Animal Experiences', () => {
        const zooKeeper = new ZooKeeper('Bob', 'Faat', 'Snake');
        const bison = new Bison(1000, 'Grass', [new FeedTime(new Date(), new ZooKeeper('Bob', 'Faat', 'Snake'))], [10], false, 1);

        expect(zooKeeper.HasAnimalExperience(bison)).toBe(false);
    })

    it('Should not be able to Feed Animal', () => {
        const zooKeeper = new ZooKeeper('Bob', 'Faat', 'Snake');
        const bison = new Bison(1000, 'Grass', [new FeedTime(new Date(), new ZooKeeper('Bob', 'Faat', 'Snake'))], [10], false, 1);

        expect(zooKeeper.FeedAnimal(bison)).toBe(false);
        expect(bison.FeedTimes[1]).toBe(undefined);
    })
})