export class Azienda {
    companyName;
    businessSector;
    description;
    openPositions;
    constructor(companyName, businessSector, description, openPositions) {
        this.companyName = companyName;
        this.businessSector = businessSector;
        this.description = description;
        this.openPositions = openPositions;
    }
    offerPosition(participant, position) {
        if (this.openPositions.includes(position)) {
            if (participant.educationField === this.businessSector) {
                console.log(`${participant.name} ${participant.surname} has been offered the position of ${position} at ${this.companyName} company`);
            }
            else {
                console.log(`${participant.name} ${participant.surname} does not have the required education field for the position of
                ${position} at ${this.companyName} company`);
            }
        }
        else {
            console.log(`${position} position is not available at ${this.companyName} company`);
        }
    }
}
