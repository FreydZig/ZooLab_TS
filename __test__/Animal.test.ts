const {Bison} = require("../src/ZooLab/Animals/Mammal/Bison");
const {FeedTime} = require("../src/ZooLab/FeedTime");
const {ZooKeeper} = require("../src/ZooLab/Employee/ZooKeeper");

describe('Animal', () => {
    it('Should be able to Add Feed Schedule', () => {
        const bison = new Bison(1000, 'Grass', false, 1);

        bison.AddFeedSchedule([4]);

        expect(bison.FeedSchedule[0]).toBe(4);
    })
})