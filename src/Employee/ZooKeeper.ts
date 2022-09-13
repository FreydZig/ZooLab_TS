import {IEmployee} from "../Interfaces/IEmployee";
import {Animal} from "../Animal";
import {Parrot} from "../Animals/Birds/Parrot";
import {Penguin} from "../Animals/Birds/Penguin";
import {Bison} from "../Animals/Mammal/Bison";
import {Elephant} from "../Animals/Mammal/Elephant";
import {Lion} from "../Animals/Mammal/Lion";
import {Snake} from "../Animals/Reptiles/Snake";
import {Turtle} from "../Animals/Reptiles/Turtle";
import {Grass} from "../Food/Grass";
import {Meet} from "../Food/Meet";
import {Vegetable} from "../Food/Vegetable";

export class ZooKeeper implements IEmployee{
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

    FeedAnimal(animal : Animal): boolean{
        const foods = [Grass, Meet, Vegetable];
        let answer: boolean = false;

        if(this.HasAnimalExperience(animal))
            foods.forEach(f => {
                if(animal.FavouriteFood == f.name) {
                    animal.Feed(this);
                    answer = true;
                }
            })
        return answer
    }

}