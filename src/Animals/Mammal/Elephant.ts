import {Mammal} from "../../AnimalsTypes/Mammal";
import {Animal} from "../../Animal";
import {Bison} from "./Bison";
import {Parrot} from "../Birds/Parrot";
import {Turtle} from "../Reptiles/Turtle";
import {FeedTime} from "../../FeedTime";

export class Elephant extends Mammal{

    constructor(id: number) {
        super(1000, 'Vegetable', id);
        this.RequiredSpaceSqFt = 1000;
        this.FavouriteFood = 'Vegetable';
    }

    IsFriendlyWith(animal: Animal) {
        return ((animal instanceof Bison) || (animal instanceof Parrot) || (animal instanceof Turtle));
    }

}