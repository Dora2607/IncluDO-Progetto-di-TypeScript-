export class Partecipante {
    name;
    surname;
    countryOfOrigin;
    educationLevel;
    languageSkills;
    educationField;
    constructor(name, surname, countryOfOrigin, educationLevel, languageSkills, educationField) {
        this.name = name;
        this.surname = surname;
        this.countryOfOrigin = countryOfOrigin;
        this.educationLevel = educationLevel;
        this.languageSkills = languageSkills;
        this.educationField = educationField;
    }
    signupCourse(course) {
        course.addParticipant(this);
        console.log(`${this.name} ${this.surname} is signing up for ${course.courseTitle}`);
        console.log(`The list of participants for ${course.courseTitle} are:`);
        course.participantsList.forEach((p) => {
            console.log(`${p.name} ${p.surname}`);
        });
    }
}
