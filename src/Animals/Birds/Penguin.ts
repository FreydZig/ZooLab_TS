import {Bird} from "../../AnimalsTypes/Bird";
import {Animal} from "../../Animal";
import {FeedTime} from "../../FeedTime";

export class Penguin extends Bird{

    constructor(requiredSpaceSqFt : number, favouriteFood : string, feedTimes: Array<FeedTime>, feedSchedule : Array<number>, isSick: boolean, id: number) {
        if((requiredSpaceSqFt >= 10) && (favouriteFood == 'Vegetable'))
        super(requiredSpaceSqFt, favouriteFood, feedTimes, feedSchedule, isSick, id);
        else
            throw new Error('requiredSpaceSqFt < 9 or/and favouriteFood is not Vegetable');
    }

    IsFriendlyWith(animal: Animal) {
        return (animal instanceof Penguin);
    }

}