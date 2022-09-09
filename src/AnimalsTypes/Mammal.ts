import {Animal} from "../Animal";

export abstract class Mammal extends Animal{
    protected constructor(requiredSpaceSqFt, favouriteFood, feedTimes, feedSchedule, isSick, id) {
        super(requiredSpaceSqFt, favouriteFood, feedTimes, feedSchedule, isSick, id);
    }
}