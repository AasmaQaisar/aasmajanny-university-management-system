#! /usr/bin/env node

import chalk from "chalk";
import figlet from "figlet";

const welCome = async () => {
    console.log(chalk.yellowBright(figlet.textSync("University Management System \n")));
  };
  await welCome();
//objects and data types for each of these entities
// person class 
class Person {
    name: string;
    age: number;
  
    constructor(name: string, age: number) {
      this.age = age;
      this.name = name;
    }
  };
  
  //student class
  class Student extends Person {
    rollNumber: string;
    courses: Course[] = [];
  
    constructor(rollNumber: string, name:string, age:number) {
      super(name,age)
      this.rollNumber = rollNumber;
    }
    registerforCourses(course: any) {
      this.courses.push(course);
    }
  };
  
  // instructor class
  class Instructor extends Person {
      salary: number;
      courses: any[] = [];
    
      constructor(salary: number, name:string, age:number) {
          super(name,age)
        this.salary = salary;
      }
      assignCourses(course: Course) {
        this.courses.push(course);
      }
    };
   
  // course class
  class Course {
    id:number;
    name:string;
    students:Student[] = []
    instructors:Instructor[]=[]
  
    constructor(id:number,name:string){
      this.id=id;
      this.name=name;
    }
    addStudent (std:Student){
      this.students.push(std)
  
    }
    setInstructor(instructor:Instructor){
        this.instructors.push(instructor)
    }
  };
  
  // Department class
  class Department {
    name:string;
    courses:Course[] = []
  
    constructor(name:string){
      this.name=name;
    }
    addCourse(course:Course){
      this.courses.push(course)
    }
  };
  
  const std1 = new Student ("PIAIC210495", "Aasma Qaisar",25);
  const std2 = new Student ("PIAIC210496", "Saher Naeem",27);
    //console.log(std1);
    
  
  const Instructor1 = new Instructor(50000, "Sir_Jahanzaib_Tayyab", 24)
  const Instructor2 = new Instructor(60000, "Sir_Waqas_Hussain", 27)
  
  const course1 = new Course(101,"Web 3.0 and Metaverse Developer program")
  const course2 = new Course(105,"BlockChain")
  
  course1.addStudent(std1)
  course1.addStudent(std2)
  course2.addStudent(std1)
  course2.addStudent(std2)
  
  course1.setInstructor(Instructor1)
  course1.setInstructor(Instructor2)
  
  const D1 = new Department ("Computer_Science");
  D1.addCourse(course1);
  console.log(D1.courses[0]);
  