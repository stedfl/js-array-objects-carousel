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
    description: "Il Perù è un paese pieno di ricchezze. La natura selvaggia si mischia a una cultura millenaria, fatta di storie affascinanti e di leggende che si perdono indietro nel tempo",
    image: "https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg"
  },
  {
    title: "Cile",
    description: "Tanti paesi in uno: ecco l’essenza del Cile. Tanto lungo geograficamente quanto multiforme per clima, paesaggi ed ecosistemi. Gli altopiani aridi del deserto di Atacama sono diversissimi dalle vigne colorate della Valle di Casablanca.",
    image: "https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c"
  },
  {
    title: "Argentina",
    description: "L'incredibile varietà della sua geografia e la sua vivace cultura, un mix di radici indigene e influenze europee, danno vita a un paese ricchissimo di spunti, contrasti e grandi passioni",
    image: "https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg"
  },
  {
    title: "Colombia",
    description: "Dalle cordigliere al deserto, dal Mar dei Caraibi fino all'Amazzonia, la Colombia è una destinazione eccitante che offre qualcosa per tutti i gusti",
    image: "https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop"
  },
]

/*

Script
1 Aggiungere evento al click bottone:
  
  Rimuove classe active dalla thumbnails corrente, prende stesso argomento delle funzioni remove
  Chiama funzione printImage successiva
  Aggiunge classe active alla thumbnails successiva, prende stesso argomento delle funzioni print

  Funzione PrintImage prende come argomento l'indice dell'oggetto da stampare.
  Su quell'oggetto e prende le informazioni
*/

const wrapImage = document.querySelector(".wrap-slider");
const wrapThumb = document.querySelector(".slider-thumbs");
const btnNext = document.querySelector(".btn-slide.next");
const btnPrev = document.querySelector(".btn-slide.prev");
let countIndex = 0;

printImage(sliderItems[countIndex]);

for (let item of sliderItems) {
  const output = `<img src="${item.image}" alt="${item.title}">
  `;
  wrapThumb.innerHTML += output;
}


btnNext.addEventListener("click", function() {
  slider("next");
});

btnPrev.addEventListener("click", function() {
  slider("prev");
});

function printImage(item) {
  const output = `
  <img src="${item.image}" alt="${item.title}">
  <div class="reference">
    <h2 class="city">${item.title}</h2>
    <p class="description">
      ${item.description}
    </p>
  </div>
  `;
  wrapImage.innerHTML = output;
}

function slider(direction) {
  if (direction === "next") {
    countIndex++;
    if (countIndex >= sliderItems.length) {
      countIndex = 0;
    }
  } else if (direction === "prev") {
    countIndex--;
    if (countIndex < 0) {
      countIndex = (sliderItems.length - 1);
    }
  }
  printImage(sliderItems[countIndex]);
}

