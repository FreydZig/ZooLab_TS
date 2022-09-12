import {Reptile} from "../../AnimalsTypes/Reptile";
import {Animal} from "../../Animal";
import {FeedTime} from "../../FeedTime";
import {Bison} from "../Mammal/Bison";
import {Parrot} from "../Birds/Parrot";
import {Elephant} from "../Mammal/Elephant";

export class Turtle extends Reptile{

    constructor(requiredSpaceSqFt : number, favouriteFood : string, feedTimes: Array<FeedTime>, feedSchedule : Array<number>, isSick: boolean, id: number) {
        if((requiredSpaceSqFt >= 5) && (favouriteFood == 'Grass'))
        super(requiredSpaceSqFt, favouriteFood, feedTimes, feedSchedule, isSick, id);
        else
            throw new Error('requiredSpaceSqFt < 5 or/and favouriteFood is not Grass');
    }

    IsFriendlyWith(animal: Animal) {
        return ((animal instanceof Bison)||(animal instanceof Parrot)||(animal instanceof Elephant)||(animal instanceof Turtle));
    }

}