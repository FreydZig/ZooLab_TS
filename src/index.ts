import {FeedTime} from "./FeedTime";
import {Animal} from "./Animal";
import {ZooKeeper} from "./Employee/ZooKeeper";
import {Turtle} from "./Animals/Reptiles/Turtle";
import {Snake} from "./Animals/Reptiles/Snake";
import {Lion} from "./Animals/Mammal/Lion";
import {Penguin} from "./Animals/Birds/Penguin";
import {Parrot} from "./Animals/Birds/Parrot";
import {Bison} from "./Animals/Mammal/Bison";
import {Elephant} from "./Animals/Mammal/Elephant";
import {Veterinarian} from "./Employee/Veterinarian";
import {Enclosure} from "./Enclosure";
import {Zoo} from "./Zoo";
import {ZooApp} from "./ZooApp";
//
// export class Cat {
//     public name: string;
//     public color: string;
//
//     constructor(name: string, color: string) {
//         this.name = name;
//         this.color = color;
//     }
//
//     public move(distanceMeter: number) : string {
//         return `${this.name} moved ${distanceMeter}m.`;
//     }
//
//     public say() : string {
//         return `Cat ${this.name} says meow`;
//     }
// }
//
// const cat = new Cat('Tom', 'Black');
//
// function IsFriendlyWith(animal: Animal) {
//     if((animal instanceof Snake) && (animal instanceof Turtle))
//     console.log((animal instanceof Snake) && (animal instanceof Turtle))
//     //else throw new Error('ff');
// }
//
 const parrot = new Parrot(1);
// const penguin = new Penguin(10, 'Vegetable', [new FeedTime(new Date(), new ZooKeeper())], [10], false, 1);
// const bison = new Bison(1000, 'Grass', [new FeedTime(new Date(), new ZooKeeper())], [10], false, 1);
// const elephant = new Elephant(1000, 'Vegetable', [new FeedTime(new Date(), new ZooKeeper())], [10], false, 1);
// const lion = new Lion(1000, 'Meet', [new FeedTime(new Date(), new ZooKeeper())], [10], false, 1);
// const turtle = new Turtle(5, 'Grass', [new FeedTime(new Date(), new ZooKeeper())], [10], false, 1);
 const snake = new Snake(1);

const animals = [Penguin, Parrot, Bison, Elephant, Lion, Snake, Turtle];

//const animals = [Penguin, Parrot, Bison, Elephant, Lion, Snake, Turtle];

let b = false;

const veterinarian = new Veterinarian('Bob', 'Faat', 'Snake');

const enclosure = new Enclosure('Bisons', new Zoo('ff'), 4);

let ar: Snake;

const zooApp = new ZooApp();

//console.log(ar);

//IsFriendlyWith(turtle);
