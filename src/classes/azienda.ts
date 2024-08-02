import { IAzienda } from "../interfaces/IAzienda";
import { IPartecipante } from "../interfaces/IPartecipante";

export class Azienda implements IAzienda {
  constructor(
    public companyName: string,
    public businessSector: string,
    public description: string,
    public openPositions: string[] 
  ) {}

  offerPosition(participant: IPartecipante, position: string): void {
    if (this.openPositions.includes(position)) {
      if (participant.educationField === this.businessSector) {
        console.log(
          `${participant.name} ${participant.surname} has been offered the position of ${position} at ${this.companyName} company`
        );
      } else {
        console.log(
          `${participant.name} ${participant.surname} does not have the required education field for the position of
                ${position} at ${this.companyName} company`
        );
      }
    } else {
      console.log(
        `${position} position is not available at ${this.companyName} company`
      );
    }
  }
}
