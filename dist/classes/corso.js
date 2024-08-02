export class Corso {
    courseTitle;
    description;
    professionalField;
    duration;
    participantsList;
    constructor(courseTitle, description, professionalField, duration, participantsList = []) {
        this.courseTitle = courseTitle;
        this.description = description;
        this.professionalField = professionalField;
        this.duration = duration;
        this.participantsList = participantsList;
    }
    addParticipant(participant) {
        this.participantsList.push(participant);
    }
}
