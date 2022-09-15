import {Bird} from "../../AnimalsTypes/Bird"
import {Animal} from "../../Animal";
import {Bison} from "../Mammal/Bison";
import {Elephant} from "../Mammal/Elephant";
import {Turtle} from "../Reptiles/Turtle";
import {FeedTime} from "../../FeedTime";

export class Parrot extends Bird{

    constructor(id: number) {
        super(5, 'Grass', id);
        this.RequiredSpaceSqFt = 5;
        this.FavouriteFood = 'Grass';
    }

    IsFriendlyWith(animal: Animal) {
        return ((animal instanceof Parrot)||(animal instanceof Bison) || (animal instanceof Elephant) || (animal instanceof Turtle));
    }

}