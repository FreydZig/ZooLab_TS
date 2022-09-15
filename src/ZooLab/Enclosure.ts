import {Animal} from "./Animal";
import {Zoo} from "./Zoo";

export class Enclosure{
    Name: string;
    Animals: Array<Animal>;
    ParentZoo: Zoo;
    SquareFeet: number;

    constructor(name: string, parentZoo: Zoo, squareFeet: number) {
        this.Name = name;
        this.Animals = new Array<Animal>;
        this.ParentZoo = parentZoo;
        this.SquareFeet = squareFeet;
    }

    AddAnimal(animal: Animal): void{
        this.Animals.push(animal);
    }
}