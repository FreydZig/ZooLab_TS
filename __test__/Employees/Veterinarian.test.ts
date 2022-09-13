const {Snake} = require( "../../src/Animals/Reptiles/Snake");
const {Bison} = require("../../src/Animals/Mammal/Bison");
const {FeedTime} = require("../../src/FeedTime");
const {Veterinarian} = require("../../src/Employee/Veterinarian");

describe('Veterinarian', () => {

    it('Should be able to create Veterinarian', () => {
        const veterinarian = new Veterinarian('Bob', 'Faat', 'Snake');

        expect(veterinarian.FirstName).toBe('Bob');
        expect(veterinarian.LastName).toBe('Faat');
        expect(veterinarian.AnimalExperiences).toBe('Snake');
    })

    it('Should be able to Add Animal Experiences', () => {
        const veterinarian = new Veterinarian('Bob', 'Faat', 'Snake');
        const bison = new Bison(1000, 'Grass', false, 1);

        veterinarian.AddAnimalExperiences(bison);

        expect(veterinarian.AnimalExperiences).toBe('Bison');
    })

    it('Should be able to Has Animal Experiences', () => {
        const veterinarian = new Veterinarian('Bob', 'Faat', 'Snake');
        const snake = new Snake(2, 'Meet', false, 1);

        expect(veterinarian.HasAnimalExperience(snake)).toBe(true);
    })

    it('Should be able to Heel Animal', () => {
        const veterinarian = new Veterinarian('Bob', 'Faat', 'Snake');
        const snake = new Snake(2, 'Meet', true, 1);

        expect(snake.IsSick).toBe(true);
        expect(veterinarian.HeelAnimal(snake)).toBe(true);
        expect(snake.IsSick).toBe(false);
    })

    it('Should not be able to Has Animal Experiences', () => {
        const veterinarian = new Veterinarian('Bob', 'Faat', 'Snake');
        const bison = new Bison(1000, 'Grass', false, 1);

        expect(veterinarian.HasAnimalExperience(bison)).toBe(false);
    })

    it('Should not be able to Heel Animal', () => {
        const veterinarian = new Veterinarian('Bob', 'Faat', 'Snake');
        const bison = new Bison(1000, 'Grass', true, 1);

        expect(bison.IsSick).toBe(true);
        expect(veterinarian.HeelAnimal(bison)).toBe(false);
        expect(bison.IsSick).toBe(true);
    })
})