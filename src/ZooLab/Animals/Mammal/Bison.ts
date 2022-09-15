import {Mammal} from "../AnimalsTypes/Mammal";
import {Animal} from "../../Animal";
import {FeedTime} from "../../FeedTime";
import {Elephant} from "./Elephant";

export class Bison extends Mammal{

    constructor(id: number) {
        super(1000, 'Grass', id);
        this.RequiredSpaceSqFt = 1000;
        this.FavouriteFood = 'Grass';
    }

    IsFriendlyWith(animal: Animal) {
        return (animal instanceof Elephant);
    }

}