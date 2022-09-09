import {Enclosure} from "./Enclosure";
import {IEmployee} from "./Interfaces/IEmployee";
import {Animal} from "./Animal";

export class Zoo{
    Enclosures: Array<Enclosure>;
    Employees: Array<IEmployee>;
    Location: string;

    constructor(location) {
        this.Location = location;
    }

    AddEnclosure(name: string, sqaureFeet: number): Enclosure{
        //TODO: Add logic Add Enclosure
        return new Enclosure();
    }

    FindAvailableEnclosure(animal: Animal): Enclosure{
        //TODO: Add logic Find Available Enclosure
        return new Enclosure()
    }

    HireEmployee(employee: IEmployee):void{
        //TODO: Add logic Hire Employee
    }

    FeedAnimals(time: Date): void{
        //TODO:Add logic Feed Animal
    }

    HeelAnimal(): void{
        //TODO: Add logic Heel Animal
    }
}