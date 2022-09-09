import {Bird} from "../AnimalsTypes/Bird"
import {Animal} from "../Animal";

export class Parrot extends Bird{

    constructor(requiredSpaceSqFt, favouriteFood, feedTimes, feedSchedule, isSick, id) {
        super(requiredSpaceSqFt, favouriteFood, feedTimes, feedSchedule, isSick, id);
    }

    IsFriendlyWith(animal: Animal) {
        //TODO: Add logic Is Friendly
    }

}