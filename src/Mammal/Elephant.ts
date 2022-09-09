import {Mammal} from "../AnimalsTypes/Mammal";
import {Animal} from "../Animal";

export class Elephant extends Mammal{

    constructor(requiredSpaceSqFt, favouriteFood, feedTimes, feedSchedule, isSick, id) {
        super(requiredSpaceSqFt, favouriteFood, feedTimes, feedSchedule, isSick, id);
    }

    IsFriendlyWith(animal: Animal) {
        //TODO: Add logic Elephant Is Friendly With
    }

}