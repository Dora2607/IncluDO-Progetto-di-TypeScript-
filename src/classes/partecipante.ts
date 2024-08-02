import { ICorso } from "../interfaces/ICorso";
import { IPartecipante } from "../interfaces/IPartecipante";

export class Partecipante implements IPartecipante {
  constructor(
    public name: string,
    public surname: string,
    public countryOfOrigin: string,
    public educationLevel: string,
    public languageSkills: string[],
    public educationField: string
  ) {}

  signupCourse(course: ICorso): void {
    course.addParticipant(this);
    console.log(`${this.name} ${this.surname} is signing up for ${course.courseTitle}`);
    console.log(`The list of participants for ${course.courseTitle} are:`);
    course.participantsList.forEach((p) => {
      console.log(`${p.name} ${p.surname}`);
    });
  }
}

