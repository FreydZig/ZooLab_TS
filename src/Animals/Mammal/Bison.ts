import {Mammal} from "../../AnimalsTypes/Mammal";
import {Animal} from "../../Animal";
import {FeedTime} from "../../FeedTime";
import {Elephant} from "./Elephant";

export class Bison extends Mammal{

    constructor(requiredSpaceSqFt : number, favouriteFood : string, isSick: boolean, id: number) {
        if((requiredSpaceSqFt >= 1000) && (favouriteFood == 'Grass'))
        super(requiredSpaceSqFt, favouriteFood, isSick, id);
        else
            throw new Error('requiredSpaceSqFt < 1000 or/and favouriteFood is not Grass')
    }

    IsFriendlyWith(animal: Animal) {
        return (animal instanceof Elephant);
    }

}