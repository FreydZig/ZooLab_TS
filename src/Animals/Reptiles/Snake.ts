import {Reptile} from "../../AnimalsTypes/Reptile";
import {Animal} from "../../Animal";
import {FeedTime} from "../../FeedTime";

export class Snake extends Reptile{

    constructor(requiredSpaceSqFt : number, favouriteFood : string, feedTimes: Array<FeedTime>, feedSchedule : Array<number>, isSick: boolean, id: number) {
        if((requiredSpaceSqFt >= 2) && (favouriteFood == 'Meet'))
        super(requiredSpaceSqFt, favouriteFood, feedTimes, feedSchedule, isSick, id);
        else
            throw new Error('requiredSpaceSqFt < 2 or/and favouriteFood is not Meet');
    }

    IsFriendlyWith(animal: Animal) {
        return (animal instanceof Snake);
    }

}