import {Reptile} from "../AnimalsTypes/Reptile";
import {Animal} from "../Animal";

export class Turtle extends Reptile{

    constructor(requiredSpaceSqFt, favouriteFood, feedTimes, feedSchedule, isSick, id) {
        super(requiredSpaceSqFt, favouriteFood, feedTimes, feedSchedule, isSick, id);
    }

    IsFriendlyWith(animal: Animal) {
        //TODO: Add Turtle Bison Is Friendly With
    }

}