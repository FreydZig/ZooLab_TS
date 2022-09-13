import {FeedTime} from "./FeedTime"
import {Food} from "./Food";
import {ZooKeeper} from "./Employee/ZooKeeper";
export abstract class Animal {
    RequiredSpaceSqFt: number;
    FavouriteFood: string;
    FeedTimes: Array<FeedTime>;
    FeedSchedule: Array<number>;
    IsSick: boolean;
    Id: number;

    protected constructor(requiredSpaceSqFt : number, favouriteFood : string, feedTimes: Array<FeedTime>, feedSchedule : Array<number>, isSick: boolean, id: number) {
        this.RequiredSpaceSqFt = requiredSpaceSqFt;
        this.FavouriteFood  = favouriteFood;
        this.FeedTimes = feedTimes;
        this.FeedSchedule = feedSchedule;
        this.IsSick = isSick;
        this.Id = id;
    }

    abstract IsFriendlyWith(animal: Animal) : boolean;

    Feed(zooKeeper: ZooKeeper){
        this.FeedTimes.push(new FeedTime(new Date(), zooKeeper ));
    };

    AddFeedSchedule(hours: Array<number>){
        //TODO: Add logic FeedSchedule logic
    };

    //TODO: Add class Medicine
    Heel(/*Medicine*/){
      //TODO: Add logic Heel logic
    };
}
