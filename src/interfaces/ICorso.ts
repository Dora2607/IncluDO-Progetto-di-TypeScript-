import { IPartecipante } from "./IPartecipante";

export interface ICorso {
  courseTitle: string;
  description: string;
  professionalField: string;
  duration: string;
  participantsList: IPartecipante[];
  
  addParticipant(participant:IPartecipante):void;
}
