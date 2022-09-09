import {Mammal} from "../AnimalsTypes/Mammal";
import {Animal} from "../Animal";

export class Bison extends Mammal{

    constructor(requiredSpaceSqFt, favouriteFood, feedTimes, feedSchedule, isSick, id) {
        super(requiredSpaceSqFt, favouriteFood, feedTimes, feedSchedule, isSick, id);
    }

    IsFriendlyWith(animal: Animal) {
        //TODO: Add logic Bison Is Friendly With
    }

}