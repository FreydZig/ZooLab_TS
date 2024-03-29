const {Snake} = require( "../../src/ZooLab/Animals/Reptiles/Snake");
const {Bison} = require("../../src/ZooLab/Animals/Mammal/Bison");
const {FeedTime} = require("../../src/ZooLab/FeedTime");
const {Veterinarian} = require("../../src/ZooLab/Employee/Veterinarian");

describe('Veterinarian', () => {

    it('Should be able to create Veterinarian', () => {
        const veterinarian = new Veterinarian('Bob', 'Faat', 'Snake');

        expect(veterinarian.FirstName).toBe('Bob');
        expect(veterinarian.LastName).toBe('Faat');
        expect(veterinarian.AnimalExperiences).toBe('Snake');
    })

    it('Should be able to Add Animal Experiences', () => {
        const veterinarian = new Veterinarian('Bob', 'Faat', 'Snake');
        const bison = new Bison(1);

        veterinarian.AddAnimalExperiences(bison);

        expect(veterinarian.AnimalExperiences).toBe('Bison');
    })

    it('Should be able to Has Animal Experiences', () => {
        const veterinarian = new Veterinarian('Bob', 'Faat', 'Snake');
        const snake = new Snake(1);

        expect(veterinarian.HasAnimalExperience(snake)).toBe(true);
    })

    it('Should be able to Heel Animal', () => {
        const veterinarian = new Veterinarian('Bob', 'Faat', 'Snake');
        const snake = new Snake(1);

        snake.IsSick = true;

        expect(snake.IsSick).toBe(true);
        expect(veterinarian.HeelAnimal(snake)).toBe(true);
        expect(snake.IsSick).toBe(false);
    })

    it('Should not be able to Has Animal Experiences', () => {
        const veterinarian = new Veterinarian('Bob', 'Faat', 'Snake');
        const bison = new Bison(1);

        expect(veterinarian.HasAnimalExperience(bison)).toBe(false);
    })

    it('Should not be able to Heel Animal', () => {
        const veterinarian = new Veterinarian('Bob', 'Faat', 'Snake');
        const bison = new Bison(1);

        bison.IsSick = true;

        expect(bison.IsSick).toBe(true);
        expect(veterinarian.HeelAnimal(bison)).toBe(false);
        expect(bison.IsSick).toBe(true);
    })
})