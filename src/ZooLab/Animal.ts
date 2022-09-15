import {FeedTime} from "./FeedTime"
import {Food} from "./Food";
import {ZooKeeper} from "./Employee/ZooKeeper";
import {Medicine} from "./Medicine";
export abstract class Animal {
    RequiredSpaceSqFt: number;
    FavouriteFood: string;
    FeedTimes: Array<FeedTime>;
    FeedSchedule: Array<number>;
    IsSick: boolean;
    Id: number;

    protected constructor(requiredSpaceSqFt : number, favouriteFood : string, id: number) {
        this.RequiredSpaceSqFt = requiredSpaceSqFt;
        this.FavouriteFood  = favouriteFood;
        this.FeedTimes = new Array<FeedTime>();
        this.FeedSchedule = new Array<number>();
        this.IsSick = false;
        this.Id = id;
    }

    abstract IsFriendlyWith(animal: Animal) : boolean;

    Feed(zooKeeper: ZooKeeper){
        this.FeedTimes.push(new FeedTime(new Date(), zooKeeper ));
    };

    AddFeedSchedule(hours: Array<number>){
        this.FeedSchedule.push(hours[0]);
    };

    Heel(medicine: Medicine){
      this.IsSick = false;
    };
}
