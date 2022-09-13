import {Enclosure} from "./Enclosure";
import {IEmployee} from "./Interfaces/IEmployee";
import {Animal} from "./Animal";
import {ZooKeeper} from "./Employee/ZooKeeper";
import {Veterinarian} from "./Employee/Veterinarian";

export class Zoo{
    Enclosures: Array<Enclosure>;
    Employees: Array<IEmployee>;
    Location: string;

    constructor(location: string) {
        this.Location = location;
        this.Employees = new Array<IEmployee>();
        this.Enclosures = new Array<Enclosure>();
    }

    //TODO: Fix with validators
    AddEnclosure(name: string, sqaureFeet: number): void{
        this.Enclosures.push(new Enclosure(name, this, sqaureFeet));
    }

    FindAvailableEnclosure(animal: Animal): Enclosure{
        let enclosure: Enclosure;

        this.Enclosures.forEach(e => {
            if(enclosure == undefined) {
                if (e.Animals.length > 0) {
                    if (e.Animals.every(a => a.IsFriendlyWith(animal))) {
                        if (animal.RequiredSpaceSqFt <= e.SquareFeet) {
                            enclosure = e;
                        }
                    }
                } else {
                    if (animal.RequiredSpaceSqFt <= e.SquareFeet) {
                        enclosure = e;
                    }
                }
            }
        })

        // @ts-ignore
        return enclosure;
    }

    //TODO: Fix with validators and interfaces
    HireEmployee(employee: IEmployee):void{
        this.Employees.push(employee);
    }

    FeedAnimals(time: Date): void{
        this.Enclosures.forEach(e => {
            e.Animals.forEach(a => {
                this.Employees.forEach(em => {
                    if(em instanceof ZooKeeper){
                        em.FeedAnimal(a);
                    }
                })
            })
        })
    }

    HeelAnimal(): void{
        this.Enclosures.forEach(e => {
            e.Animals.forEach(a => {
                this.Employees.forEach(em => {
                    if(em instanceof Veterinarian){
                        em.HeelAnimal(a);
                    }
                })
            })
        })
    }
}