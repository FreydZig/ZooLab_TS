import {Mammal} from "../../AnimalsTypes/Mammal";
import {Animal} from "../../Animal";
import {Bison} from "./Bison";
import {Parrot} from "../Birds/Parrot";
import {Elephant} from "./Elephant";
import {FeedTime} from "../../FeedTime";

export class Lion extends Mammal{

    constructor(requiredSpaceSqFt : number, favouriteFood : string, isSick: boolean, id: number) {
        if((requiredSpaceSqFt >= 1000)&&(favouriteFood == 'Meet'))
        super(requiredSpaceSqFt, favouriteFood, isSick, id);
        else
            throw new Error('requiredSpaceSqFt < 1000 or/and favouriteFood is not Meet')
    }

    IsFriendlyWith(animal: Animal) {
        return (animal instanceof Lion);
    }

}