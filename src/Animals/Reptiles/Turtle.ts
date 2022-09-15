import {Reptile} from "../../AnimalsTypes/Reptile";
import {Animal} from "../../Animal";
import {FeedTime} from "../../FeedTime";
import {Bison} from "../Mammal/Bison";
import {Parrot} from "../Birds/Parrot";
import {Elephant} from "../Mammal/Elephant";

export class Turtle extends Reptile{

    constructor(id: number) {
        super(5, 'Grass', id);
        this.RequiredSpaceSqFt = 5;
        this.FavouriteFood = 'Grass';
    }

    IsFriendlyWith(animal: Animal) {
        return ((animal instanceof Bison)||(animal instanceof Parrot)||(animal instanceof Elephant)||(animal instanceof Turtle));
    }

}