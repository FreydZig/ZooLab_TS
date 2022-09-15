import {Parrot} from "../ZooLab/Animals/Birds/Parrot";
import {Penguin} from "../ZooLab/Animals/Birds/Penguin";
import {Bison} from "../ZooLab/Animals/Mammal/Bison";
import {Elephant} from "../ZooLab/Animals/Mammal/Elephant";
import {Lion} from "../ZooLab/Animals/Mammal/Lion";
import {Snake} from "../ZooLab/Animals/Reptiles/Snake";
import {Turtle} from "../ZooLab/Animals/Reptiles/Turtle";
import {ZooKeeper} from "../ZooLab/Employee/ZooKeeper";
import {Veterinarian} from "../ZooLab/Employee/Veterinarian";
import {Animal} from "../ZooLab/Animal";
import {IEmployee} from "../ZooLab/Interfaces/IEmployee";

export class Create{
    static CreateAnimals(): Array<Animal>{
        const parrot = new Parrot(0);
        const penguin = new Penguin(1);
        penguin.IsSick = true;
        const bison = new Bison(2);
        const elephant = new Elephant(3);
        elephant.IsSick = true;
        const lion = new Lion(4);
        const snake = new Snake(5);
        const turtle = new Turtle(6);
        turtle.IsSick= true;
        return [parrot, penguin, bison, elephant, lion, snake, turtle];
    }

    static CreateEmployees(): Array<IEmployee>{
        const zooKeeperParrot = new ZooKeeper('Ben', 'Jee', 'Parrot');
        const zooKeeperPenguin = new ZooKeeper('Ben', 'Jee', 'Penguin');
        const zooKeeperBison = new ZooKeeper('Ben', 'Jee', 'Bison');
        const zooKeeperLion = new ZooKeeper('Ben', 'Jee', 'Lion');
        const zooKeeperElephant = new ZooKeeper('Ben', 'Jee', 'Elephant');

        const veterinarianParrot = new Veterinarian('Ben', 'Jee', 'Parrot');
        const veterinarianPenguin = new Veterinarian('Ben', 'Jee', 'Penguin');
        const veterinarianBison = new Veterinarian('Ben', 'Jee', 'Bison');
        const veterinarianLion = new Veterinarian('Ben', 'Jee', 'Lion');
        const veterinarianElephant = new Veterinarian('Ben', 'Jee', 'Elephant');
        return [zooKeeperParrot,zooKeeperPenguin, zooKeeperBison, zooKeeperLion, zooKeeperElephant,
        veterinarianParrot, veterinarianPenguin, veterinarianBison, veterinarianLion, veterinarianElephant]
    }
}