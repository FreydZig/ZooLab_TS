import {IEmployee} from "../Interfaces/IEmployee";
import {Animal} from "../Animal";

export class ZooKeeper implements IEmployee{
    FirstName: string;
    LastName: string;
    AnimalExperiences: string;

    AddAnimalExperiences(animal : Animal): void{
        //TODO: Add logic Animal Experiences
    }

    HasAnimalExperience(animal : Animal): boolean{
        //TODO: Add logic Has An Ex
        return false;
    }

    FeedAnimal(animal : Animal): boolean{
        //TODO: Add logic Feed Animal
        return false
    }

}