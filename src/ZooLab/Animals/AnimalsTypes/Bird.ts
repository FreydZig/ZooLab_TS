import {Animal} from "../../Animal"
import {FeedTime} from "../../FeedTime";

export abstract class Bird extends Animal{
    constructor(requiredSpaceSqFt : number, favouriteFood : string, id: number) {
        super(requiredSpaceSqFt, favouriteFood, id);
    }
}