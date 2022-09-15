import {Reptile} from "../../AnimalsTypes/Reptile";
import {Animal} from "../../Animal";
import {FeedTime} from "../../FeedTime";

export class Snake extends Reptile{

    constructor(id: number) {
        super(2, 'Meet', id);
        this.RequiredSpaceSqFt = 2;
        this.FavouriteFood = 'Meet';
    }

    IsFriendlyWith(animal: Animal) {
        return (animal instanceof Snake);
    }

}