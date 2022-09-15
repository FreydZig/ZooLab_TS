import {Mammal} from "../AnimalsTypes/Mammal";
import {Animal} from "../../Animal";
import {Bison} from "./Bison";
import {Parrot} from "../Birds/Parrot";
import {Elephant} from "./Elephant";
import {FeedTime} from "../../FeedTime";

export class Lion extends Mammal{

    constructor(id: number) {
        super(1000, 'Meet', id);
        this.RequiredSpaceSqFt = 1000;
        this.FavouriteFood = 'Meet';
    }

    IsFriendlyWith(animal: Animal) {
        return (animal instanceof Lion);
    }

}