import {Mammal} from "../../AnimalsTypes/Mammal";
import {Animal} from "../../Animal";
import {Bison} from "./Bison";
import {Parrot} from "../Birds/Parrot";
import {Turtle} from "../Reptiles/Turtle";
import {FeedTime} from "../../FeedTime";

export class Elephant extends Mammal{

    constructor(requiredSpaceSqFt : number, favouriteFood : string, isSick: boolean, id: number) {
        if((requiredSpaceSqFt >= 1000) && (favouriteFood == 'Vegetable'))
        super(requiredSpaceSqFt, favouriteFood, isSick, id);
        else
            throw new Error('requiredSpaceSqFt < 1000 or/and favouriteFood is not Vegetable');
    }

    IsFriendlyWith(animal: Animal) {
        return ((animal instanceof Bison) || (animal instanceof Parrot) || (animal instanceof Turtle));
    }

}