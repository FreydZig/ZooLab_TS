import {Bird} from "../../AnimalsTypes/Bird"
import {Animal} from "../../Animal";
import {Bison} from "../Mammal/Bison";
import {Elephant} from "../Mammal/Elephant";
import {Turtle} from "../Reptiles/Turtle";
import {FeedTime} from "../../FeedTime";

export class Parrot extends Bird{

    constructor(requiredSpaceSqFt : number, favouriteFood : string, feedTimes: Array<FeedTime>, feedSchedule : Array<number>, isSick: boolean, id: number) {
        if((requiredSpaceSqFt >= 5) && (favouriteFood == 'Grass'))
        super(requiredSpaceSqFt, favouriteFood, feedTimes, feedSchedule, isSick, id);
        else
            throw new Error('requiredSpaceSqFt < 5 or/and favouriteFood is not Grass');
    }

    IsFriendlyWith(animal: Animal) {
        return ((animal instanceof Parrot)||(animal instanceof Bison) || (animal instanceof Elephant) || (animal instanceof Turtle));
    }

}