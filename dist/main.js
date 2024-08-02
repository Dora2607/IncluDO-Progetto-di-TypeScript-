import { Azienda } from "./classes/azienda";
import { Corso } from "./classes/corso";
import { Partecipante } from "./classes/partecipante";
const partecipante1 = new Partecipante("Ahmed", "Ali", "Egitto", "Diploma", ["Arabo", "Inglese"], "Falegnameria");
const partecipante2 = new Partecipante("Olena", "Kovalenko", "Ucraina", "Laurea", ["Ucraino", "Italiano", "Inglese"], "Ceramica");
const partecipante3 = new Partecipante("Arben", "Hoxha", "Albania", "Diploma", ["Albanese", "Italiano"], "Sartoria");
const partecipante4 = new Partecipante("Maria", "Gonzalez", "Spagna", "Laurea", ["Spagnolo", "Italiano", "Inglese"], "Ceramica");
const falegnameria = new Corso("Corso di Falegnameria", "Impara l'arte della falegnameria con i migliori artigiani del Sud Italia.", "Falegnameria", "6 mesi");
const ceramica = new Corso("Corso di Ceramica", "Scopri le tecniche tradizionali della ceramica e crea le tue opere d'arte.", "Ceramica", "4 mesi");
const sartoria = new Corso("Corso di Sartoria", "Diventa un sarto esperto e impara a creare abiti su misura.", "Sartoria", "5 mesi");
partecipante1.signupCourse(falegnameria);
partecipante2.signupCourse(ceramica);
partecipante3.signupCourse(sartoria);
partecipante4.signupCourse(ceramica);
const azienda1 = new Azienda("Artigiani del Legno", "Falegnameria", "Azienda specializzata nella lavorazione del legno, con l'obiettivo di tramandare le tecniche tradizionali ai nuovi artigiani.", [
    "Apprendista Falegname",
    "Assistente alla Produzione",
    "Tecnico del Legno",
    "Restauratore di Mobili",
    "Designer di Mobili"
]);
const azienda2 = new Azienda("Ceramiche d'Arte", "Ceramica", "Azienda leader nella produzione di ceramiche artistiche, impegnata nella formazione di nuovi ceramisti.", [
    "Apprendista Ceramista",
    "Tecnico di Smaltatura",
    "Designer di Ceramiche",
    "Responsabile della Qualità",
    "Addetto alla Vendita"
]);
azienda1.offerPosition(partecipante1, 'Apprendista Falegname');
azienda2.offerPosition(partecipante2, 'Apprendista Ceramista');
azienda2.offerPosition(partecipante3, 'Designer di Ceramiche');
