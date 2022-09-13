import {Animal} from "../Animal";
import {FeedTime} from "../FeedTime";

export abstract class Reptile extends Animal{
    constructor(requiredSpaceSqFt : number, favouriteFood : string, isSick: boolean, id: number) {
        super(requiredSpaceSqFt, favouriteFood, isSick, id);
    }
}