"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const azienda_1 = require("./classes/azienda");
const corso_1 = require("./classes/corso");
const partecipante_1 = require("./classes/partecipante");
const partecipante1 = new partecipante_1.Partecipante("Ahmed", "Ali", "Egitto", "Diploma", ["Arabo", "Inglese"], "Falegnameria");
const partecipante2 = new partecipante_1.Partecipante("Olena", "Kovalenko", "Ucraina", "Laurea", ["Ucraino", "Italiano", "Inglese"], "Ceramica");
const partecipante3 = new partecipante_1.Partecipante("Arben", "Hoxha", "Albania", "Diploma", ["Albanese", "Italiano"], "Sartoria");
const partecipante4 = new partecipante_1.Partecipante("Maria", "Gonzalez", "Spagna", "Laurea", ["Spagnolo", "Italiano", "Inglese"], "Ceramica");
const falegnameria = new corso_1.Corso("Corso di Falegnameria", "Impara l'arte della falegnameria con i migliori artigiani del Sud Italia.", "Falegnameria", "6 mesi");
const ceramica = new corso_1.Corso("Corso di Ceramica", "Scopri le tecniche tradizionali della ceramica e crea le tue opere d'arte.", "Ceramica", "4 mesi");
const sartoria = new corso_1.Corso("Corso di Sartoria", "Diventa un sarto esperto e impara a creare abiti su misura.", "Sartoria", "5 mesi");
partecipante1.signupCourse(falegnameria);
partecipante2.signupCourse(ceramica);
partecipante3.signupCourse(sartoria);
partecipante4.signupCourse(ceramica);
const azienda1 = new azienda_1.Azienda("Artigiani del Legno", "Falegnameria", "Azienda specializzata nella lavorazione del legno, con l'obiettivo di tramandare le tecniche tradizionali ai nuovi artigiani.", [
    "Apprendista Falegname",
    "Assistente alla Produzione",
    "Tecnico del Legno",
    "Restauratore di Mobili",
    "Designer di Mobili"
]);
const azienda2 = new azienda_1.Azienda("Ceramiche d'Arte", "Ceramica", "Azienda leader nella produzione di ceramiche artistiche, impegnata nella formazione di nuovi ceramisti.", [
    "Apprendista Ceramista",
    "Tecnico di Smaltatura",
    "Designer di Ceramiche",
    "Responsabile della Qualità",
    "Addetto alla Vendita"
]);
azienda1.offerPosition(partecipante1, 'Apprendista Falegname');
azienda2.offerPosition(partecipante2, 'Apprendista Ceramista');
azienda2.offerPosition(partecipante3, 'Designer di Ceramiche');
