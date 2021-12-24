// name", "level", and a third parameter "students" which is an array initialized as empty";

class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }
    registerStudent(student) {
        if (this.students.filter(s => s.email === student.email).length) {
            console.log(`${student.email}  : is already registered`)

        }
        else {
            //Before the push
            console.log(this.students);
            this.students.push(student)
            console.log(`Registering  ${student.email} to the ${this.name}`)
            //After the push
            console.log(this.students);
        }
     
        return this.students;

    }

}