// CODE here for your Lambda Classes

// Base-Class of Person

class Person {
    constructor(attrs) {
        this.name = attrs.name;
        this.age = attrs.age;
        this.location = attrs.location;
    }
    speak() {
        return `Hello my name is ${this.name} and I am from ${this.location}`;
    }
}

// Instructor Class 

class Instructor extends Person {
    constructor(attrs) {
        super(attrs);
        this.specialty = attrs.specialty;
        this.favLanguage = attrs.favLanguage;
        this.catchPhrase = attrs.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }

    grade(student, subject) {
        return `${student.name} recieves a perfect score on ${subject}`
    }
}

// Student Class 

class Student extends Person {
    constructor(attrs) {
        super(attrs);
        this.previousBackground = attrs.previousBackground;
        this.className = attrs.className;
        this.favSubjects = attrs.favSubjects;
    }
    listSubjects() {
        return `${this.favSubjects}`;
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

//PM Class

class ProjectManager extends Instructor {
    constructor(attrs) {
        super(attrs);
        this.gradClassName = attrs.gradClassName;
        this.favInstructor = attrs.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel} @channel standy times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

// Objects for Person Class

const austen = new Person({
    name: 'Austen',
    age: 30,
    location: 'San Francisco'
});


// Objects for Instructor Class

const brit = new Instructor({
    name: 'Brit',
    age: 28,
    location: 'Canada',
    specialty: 'HTML/CSS',
    favLanguage: 'JavaScript',
    catchPhrase: `Let's answer some questions, then we can take a break.`
});

const josh = new Instructor({
    name: 'Josh',
    age: 35,
    location: 'Utah',
    specialty: 'Curriculum Development',
    favLanguage: 'JavaScript',
    catchPhrase: 'Lambda School is really hard'
});

// Objects for Student Class

const emily = new Student({
    name: 'Emily',
    age: 27,
    location: 'North Carolina',
    previousBackground: 'Project Manager',
    className: 'Web 25',
    favSubjects: ["JavaScript Fundamentals", "HTML", "CSS"]
});

const kai = new Student({
    name: 'Kai',
    age: 18,
    location: 'South Carolina',
    previousBackground: 'Student',
    className: 'Web 24',
    favSubjects: ['Less', 'Javascript', 'Flexbox']
});

// Objects for PM Class

const tommy = new ProjectManager({
    name: 'Tommy',
    age: 36,
    location: 'Arizona',
    specialty: 'React',
    favLanguage: 'Python',
    catchPhrase: 'Is cereal just breakfast soup?',
    gradClassName: 'Web 21',
    favInstructor: 'Dan'
});

const kevin = new ProjectManager({
    name: 'Kevin',
    age: 29,
    location: 'Washington',
    specialty: 'Applied JavaScript',
    favLanguage: 'Ruby',
    catchPhrase: 'Check your syntax',
    gradClassName: 'Web 20',
    favInstructor: 'Brit'
});

// Testing

console.log(tommy.catchPhrase);
console.log(emily.PRAssignment('JavaScript-IV'));
console.log(kevin.standUp('Web 25 lecture'));
console.log(brit.demo('flexbox'));
console.log(austen.speak());
console.log(kai.listSubjects());
console.log(emily.sprintChallenge('JavaScript'));
console.log(tommy.debugsCode(emily, 'Less'));
console.log(josh.grade(kai, 'JavaScript'));
console.log(kevin.speak());
