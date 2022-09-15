import {Animal} from "../Animal";
import {FeedTime} from "../FeedTime";

export abstract class Reptile extends Animal{
    constructor(requiredSpaceSqFt : number, favouriteFood : string, id: number) {
        super(requiredSpaceSqFt, favouriteFood, id);
    }
}