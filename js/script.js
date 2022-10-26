// **Consegna:**
// Riprendiamo l’esercizio carosello e rifacciamolo, questa volta usando un array di oggetti.
// Ogni elemento deve avere un titolo, una descrizione e il riferimento ad una immagine.
// Le immagini devono essere 5 e nella grafica devono essere presenti:
// - immagine in evidenza
// - thumbnail di tutte le immagine con in evidenza l’immagine attiva
// - bottone avanti e indietro
// Lo screenshot allegato è solo dimostrativo ma cercate di mettere le thumb in basso e non laterlamente
// **Bonus 1:**
// Sperimentiamo attraverso l’uso delle timing functions anche una funzionalità di scorrimento al nostro carosello:al click di un bottone o già dall’inizio possiamo far partire, ad intervalli di tempo a piacere, lo scorrimento delle immagini disponibili nel carosello stesso.
// ****
// **Bonus 2:**
// E se volessi un bottone per invertire la “direzione” del carosello?
// ****

/*

2 Organizzare html e css:
  1 main-wrap che contenga tutto e sia una percentuale rispetto al totale del body
  2 main wrap contiene un wrap-slider ed un wrap thumbs ed è position relative
  3 wrap slider contiene tag img che occupa 100% e un div description. Il div description è position absolute top 100% right 0
  4 thumbs slider width 100% contiene tutte le immagini generate, è position relative
  5 bottoni sono position relative
3 bottoni scorrimento ed interrompi con specifica classe

Script
1 Creare un array di 5 oggetti, dove ogni oggetto ha un titolo, descrizione ed url immagine
Creare funzione printImage:


