import {Parrot} from "./Birds/Parrot"
import {FeedTime} from "./FeedTime";

const parrot = new Parrot(5, "Grass", new FeedTime(), [1,1], false, 1)

console.log(parrot.FavouriteFood)