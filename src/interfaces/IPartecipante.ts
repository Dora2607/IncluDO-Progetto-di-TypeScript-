import { ICorso } from "./ICorso";

export interface IPartecipante {
    name: string;
    surname:string;
    countryOfOrigin:string;
    educationLevel:string;
    languageSkills:string[];
    educationField:string;

    signupCourse(course:ICorso):void;
}