import {Bird} from "../AnimalsTypes/Bird";
import {Animal} from "../../Animal";
import {FeedTime} from "../../FeedTime";

export class Penguin extends Bird{

    constructor(id: number) {
        super(10, 'Vegetable', id);
        this.RequiredSpaceSqFt = 10;
        this.FavouriteFood = 'Vegetable';
    }

    IsFriendlyWith(animal: Animal) {
        return (animal instanceof Penguin);
    }

}