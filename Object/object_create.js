// single Object
var abdullah={
    name:"Abdullah Nazmus-Sakib",
    age:25,
    dept:"CSE",
    lang:["Bangla","English","Hindi"]
}
console.log(abdullah.age);
console.log(abdullah.name);
console.log(abdullah.dept);

//Creating tamplate as constructor
function Student(name,age,cgpa,dept){
    this.name=name;
    this.age=age;
    this.cgpa=cgpa;
    this.dept=dept;
    //function inside the constructor
    this.Display=function(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.cgpa);
        console.log(this.dept);
    }
}

var student1=new Student("Abdullah",25,3.8,"CSE");
var student2=new Student("Nazmus",24,3.7,"IIT");
var student3=new Student("Sakib",23,3.5,"EEE");

student1.Display();
student2.Display();
student3.Display();