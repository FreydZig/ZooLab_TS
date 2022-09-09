import {FeedTime} from "./FeedTime"
export abstract class Animal {
    RequiredSpaceSqFt: number;
    FavouriteFood: string;
    FeedTimes: Array<FeedTime>;
    FeedSchedule: Array<number>;
    IsSick: boolean;
    Id: number;

    protected constructor(requiredSpaceSqFt, favouriteFood, feedTimes, feedSchedule, isSick, id) {
        this.RequiredSpaceSqFt = requiredSpaceSqFt;
        this.FavouriteFood  = favouriteFood;
        this.FeedTimes = favouriteFood;
        this.FeedSchedule = feedSchedule;
        this.IsSick = isSick;
        this.Id = id;
    }

    abstract IsFriendlyWith(animal: Animal);

    //TODO: Add class Food
    Feed(/*Food*/){
        //TODO: Add logic Feed logic
    };

    AddFeedSchedule(hours: Array<number>){
        //TODO: Add logic FeedSchedule logic
    };

    //TODO: Add class Medicine
    Heel(/*Medicine*/){
      //TODO: Add logic Heel logic
    };
}
