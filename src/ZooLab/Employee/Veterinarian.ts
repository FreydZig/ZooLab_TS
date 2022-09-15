import {IEmployee} from "../Interfaces/IEmployee";
import {Animal} from "../Animal";
import {Penguin} from "../Animals/Birds/Penguin";
import {Parrot} from "../Animals/Birds/Parrot";
import {Bison} from "../Animals/Mammal/Bison";
import {Elephant} from "../Animals/Mammal/Elephant";
import {Lion} from "../Animals/Mammal/Lion";
import {Snake} from "../Animals/Reptiles/Snake";
import {Turtle} from "../Animals/Reptiles/Turtle";
import {Antibiotics} from "../Medicines/Antibiotics";

export class Veterinarian implements IEmployee{
    FirstName: string;
    LastName: string;
    AnimalExperiences: string;

    constructor(firstName: string, lastName: string, animalExperiences: string) {
        this.FirstName = firstName;
        this.LastName = lastName;
        this.AnimalExperiences = animalExperiences;
    }

    AddAnimalExperiences(animal : Animal): void{
        const animals = [Penguin, Parrot, Bison, Elephant, Lion, Snake, Turtle];

        animals.forEach(a => {
            if(animal instanceof a)
                this.AnimalExperiences = a.name;
        });
    }

    HasAnimalExperience(animal : Animal): boolean{
        const animals = [Penguin, Parrot, Bison, Elephant, Lion, Snake, Turtle];
        let answer: boolean = false;

        animals.forEach(a => {
            if(animal instanceof a)
                if(this.AnimalExperiences == a.name)
                    answer = true;
        });
        return answer;
    }

    HeelAnimal(animal: Animal):boolean{
        let answer: boolean = false;

        if(this.HasAnimalExperience(animal)) {
            animal.Heel(Antibiotics);
            answer = true;
        }

        return answer
    }

}