"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Corso = void 0;
class Corso {
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
exports.Corso = Corso;
