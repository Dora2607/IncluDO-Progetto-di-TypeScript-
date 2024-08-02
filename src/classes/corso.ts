import { ICorso } from "../interfaces/ICorso";
import { IPartecipante } from "../interfaces/IPartecipante";

export class Corso implements ICorso {
  constructor(
    public courseTitle: string,
    public description: string,
    public professionalField: string,
    public duration: string,
    public participantsList: IPartecipante[] = []
  ) {}

  addParticipant(participant: IPartecipante): void {
    this.participantsList.push(participant);
  }
}
