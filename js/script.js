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

const sliderItems = [
  {
    title: "Svezia",
    description: "Stoccolma, la capitale, è una città moderna, anche se vi sono zone che conservano un'atmosfera paesana.",
    image: "http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg"
  },
  {
    title: "Perù",
    description: "Stoccolma, la capitale, è una città moderna, anche se vi sono zone che conservano un'atmosfera paesana.",
    image: "https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg"
  },
  {
    title: "Cile",
    description: "Stoccolma, la capitale, è una città moderna, anche se vi sono zone che conservano un'atmosfera paesana.",
    image: "https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c"
  },
  {
    title: "Argentina",
    description: "Stoccolma, la capitale, è una città moderna, anche se vi sono zone che conservano un'atmosfera paesana.",
    image: "https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg"
  },
  {
    title: "Colombia",
    description: "Stoccolma, la capitale, è una città moderna, anche se vi sono zone che conservano un'atmosfera paesana.",
    image: "https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop"
  },
]

/*

Script
1 Creare un array di 5 oggetti, dove ogni oggetto ha un titolo, descrizione ed url immagine
Creare funzione printImage:


