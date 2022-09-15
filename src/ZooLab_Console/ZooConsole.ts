import {Parrot} from "../ZooLab/Animals/Birds/Parrot";
import {Penguin} from "../ZooLab/Animals/Birds/Penguin";
import {Bison} from "../ZooLab/Animals/Mammal/Bison";
import {Elephant} from "../ZooLab/Animals/Mammal/Elephant";
import {Lion} from "../ZooLab/Animals/Mammal/Lion";
import {Snake} from "../ZooLab/Animals/Reptiles/Snake";
import {Turtle} from "../ZooLab/Animals/Reptiles/Turtle";
import {ZooKeeper} from "../ZooLab/Employee/ZooKeeper";
import {Veterinarian} from "../ZooLab/Employee/Veterinarian";
import {Create} from "./Create";
import {ZooApp} from "../ZooLab/ZooApp";
import {Zoo} from "../ZooLab/Zoo";
import * as readline from 'readline'

export class ZooConsole {
    zooApp: ZooApp = new ZooApp();
    zoo1: Zoo = new Zoo('Brookline');
    zoo2: Zoo = new Zoo('Chicago');

    Create(): void{
        this.zooApp.AddZoo(this.zoo1);
        this.zooApp.AddZoo(this.zoo2);

        this.zooApp._zoos[0].AddEnclosure('For Parrot', 5);
        this.zooApp._zoos[0].AddEnclosure('For Penguin', 10);
        this.zooApp._zoos[0].AddEnclosure('For Bison', 1000);
        this.zooApp._zoos[0].AddEnclosure('For Elephant', 1000);
        this.zooApp._zoos[0].AddEnclosure('For Lion', 1000);
        this.zooApp._zoos[0].AddEnclosure('For Snake', 2);
        this.zooApp._zoos[0].AddEnclosure('For Turtle', 5);

        this.zooApp._zoos[1].AddEnclosure('For Parrot', 5);
        this.zooApp._zoos[1].AddEnclosure('For Penguin', 10);
        this.zooApp._zoos[1].AddEnclosure('For Bison', 1000);
        this.zooApp._zoos[1].AddEnclosure('For Elephant', 1000);
        this.zooApp._zoos[1].AddEnclosure('For Lion', 1000);
        this.zooApp._zoos[1].AddEnclosure('For Snake', 2);
        this.zooApp._zoos[1].AddEnclosure('For Turtle', 5);

        for (let i of [0,1,2,3,4,5,6]){
            this.zooApp._zoos[0].Enclosures[i].Animals.push(Create.CreateAnimals()[i]);

        }

        for (let i of [0,1,2,3,4,5,6,7,8,9,10,11,12,13]){
            this.zooApp._zoos[0].HireEmployee(Create.CreateEmployees()[i]);
        }

        for (let i of [0,1,2,3,4,5,6,7,8,9,10,11,12,13]){
            this.zooApp._zoos[1].HireEmployee(Create.CreateEmployees()[i]);
        }

        for (let i of [0,1,2,3,4,5,6]){
            this.zooApp._zoos[1].Enclosures[i].Animals.push(Create.CreateAnimals()[i]);
        }
    }

    IsSick(){
        this.zooApp._zoos.forEach(z => {
            z.Enclosures.forEach(e => {
                e.Animals.forEach(a =>{
                    if(a.IsSick)
                        console.log(a.Id, ' is sick');
                    else
                        console.log(a.Id);
                })
            })
            console.log();
        })
    }

    Heel(){
        this.zooApp._zoos.forEach(z => {
            z.HeelAnimal()
        })
        this.IsSick();
    }

    Feed(){
        this.zooApp._zoos.forEach(z =>{
            z.FeedAnimals(new Date());
        })
    }

    Employees(){
        this.zooApp._zoos.forEach(z => {
            z.Employees.forEach(e => {
                if(e instanceof Veterinarian)
                    console.log(e.AnimalExperiences);
            })
        })
    }

    Hire(){



        var rl = readline.createInterface({
            input:process.stdin,
            output:process.stdout
        })

        var i = -1;
        this.zooApp._zoos.forEach(z =>{
            console.log(z.Location, ++i);
        })

        var zooLoc: number = 0;
        rl.question('Chose Zoo \n', (answer) =>{

            zooLoc = +answer;
            var emp: string = '';
            rl.question('Chose prof [z/v]: \n', (answer) =>{

                emp = answer;
                var firstName: string = '';
                rl.question('First Name: \n', (answer) =>{

                    firstName = answer;
                    var lastName: string = '';
                    rl.question('last Name: \n', (answer) =>{

                        lastName = answer;
                        var animalExperiences: string = '';
                        rl.question('Animal Experiences: \n', (answer) =>{

                            animalExperiences = answer;
                            var employee;
                            if(emp == 'z')
                                employee = new ZooKeeper(firstName,lastName,animalExperiences);
                            else
                                employee = new Veterinarian(firstName,lastName,animalExperiences)

                            this.zooApp._zoos[zooLoc].HireEmployee(employee);
                            this.Employees();
                            rl.close();
                        })
                        //rl.close();
                    })
                    //rl.close();
                })
                //rl.close();
            })
            //rl.close();
        })

    }
}