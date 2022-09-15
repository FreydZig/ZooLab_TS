import {ZooKeeper} from "./Employee/ZooKeeper";

export class FeedTime{
    FeedTime: Date;
    FeedByZooKeeper: ZooKeeper;

    constructor(feedTime: Date, feedByZooKeeper: ZooKeeper) {
        this.FeedTime = feedTime;
        this.FeedByZooKeeper = feedByZooKeeper;
    }
}