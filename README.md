# IncluDO - Programma di Formazione per Migranti

## Descrizione del Progetto

IncluDO è un programma di formazione professionale per migranti e persone svantaggiate, con l'obiettivo di includerli nel mondo del lavoro e salvare mestieri centenari. I percorsi di formazione sono sviluppati con artigiani del luogo e sono gratuiti, finanziati da fondi europei e regionali, nonché sponsorizzati da aziende locali.

## Struttura del Progetto

Il progetto è composto da tre principali classi che implementano le rispettive interfacce.

Nel file main.ts, sono state create istanze delle classi per testare il codice. Vengono istanziati i seguenti oggetti: Partecipante per rappresentare i migranti partecipanti ai programmi di formazione, Corso per rappresentare i vari programmi di formazione offerti da IncluDO, e Azienda per rappresentare le aziende partner disposte a collaborare con la scuola di formazione, offrendo opportunità lavorative ai migranti.

## Classi e Interfacce

### Interfacce
Sono state definite tre interfacce principali:

1. **IPartecipante**: Specifica le proprietà e i metodi che un partecipante deve avere: nome, cognome, paese di origine, livello di istruzione, competenze linguistiche, campo di formazione e il metodo per iscriversi a un corso.
2. **ICorso**: Definisce le proprietà e i metodi di un corso, inclusi il titolo del corso, la descrizione, il settore professionale, la durata, l’elenco dei partecipanti e il metodo per aggiungere un partecipante.
3. **IAzienda**: Descrive le proprietà e i metodi di un’azienda, come il nome dell’azienda, il settore di attività, la descrizione, le posizioni aperte e il metodo per offrire una posizione a un partecipante.

### Classi
Sono state implementate tre classi principali che rispettano le interfacce definite:

1. **Partecipante**: Gestisce le informazioni di ciascun partecipante e la loro iscrizione ai corsi di formazione. Utilizza il metodo signupCourse per permettere ai partecipanti di iscriversi ai corsi disponibili.
2. **Corso**: Gestisce le informazioni sui corsi di formazione, inclusi i dettagli e gli iscritti. Utilizza il metodo addParticipant per aggiungere partecipanti all’elenco degli iscritti.
3. **Azienda**: Rappresenta un’azienda partner, gestisce le informazioni sull’azienda e le offerte di lavoro per i migranti. Utilizza il metodo offerPosition per proporre opportunità lavorative direttamente ai migranti formati.

NB: Utilizzando i modificatori di accesso (public), ho scritto i costruttori in maniera sintetica per rendere il codice più leggibile e mantenere l’integrità dei dati.

## Conclusione 

Il progetto è stato deployato su codePen, è possibile prenderne visione al seguente link: [https://codepen.io/Addolorata-Sparagno/pen/QWXvxzg].
