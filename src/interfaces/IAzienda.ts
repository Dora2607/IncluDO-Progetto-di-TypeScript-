import { IPartecipante } from "./IPartecipante";

export interface IAzienda{
    companyName: string; 
    businessSector: string; 
    description: string; 
    openPositions: string[]; 
  
    offerPosition(participant:IPartecipante,position: string): void; 
}