import {Bird} from "../AnimalsTypes/Bird";
import {Animal} from "../Animal";

export class Penguin extends Bird{

    constructor(requiredSpaceSqFt, favouriteFood, feedTimes, feedSchedule, isSick, id) {
        super(requiredSpaceSqFt, favouriteFood, feedTimes, feedSchedule, isSick, id);
    }

    IsFriendlyWith(animal: Animal) {
        //TODO: Add logic Penguin Is Friendly With
    }

}