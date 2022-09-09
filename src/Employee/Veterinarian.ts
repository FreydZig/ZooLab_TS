import {IEmployee} from "../Interfaces/IEmployee";
import {Animal} from "../Animal";

export class Veterinarian implements IEmployee{
    FirstName: string;
    LastName: string;

    AddAnimalExperiences(animal : Animal): void{
        //TODO: Add logic Animal Experiences
    }

    HasAnimalExperience(animal : Animal): boolean{
        //TODO: Add logic Has An Ex
        return false;
    }

    HeelAnimal(animal: Animal):boolean{
        //TODO: Add logic Heel Animal
        return false;
    }

}