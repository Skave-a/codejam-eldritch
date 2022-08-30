import ancientsData from "./data/ancients.js";
import blueCardsData from "./data/mythicCards/blue/index.js";
import greenCardsData from "./data/mythicCards/green/index.js";
import brownCardsData from "./data/mythicCards/brown/index.js";

const cardsOfMonster = document.querySelectorAll('.item__card');
const playLevels = document.querySelector('.play__levels');
const playLevelsAll = document.querySelectorAll('.play__level');

const cardsCount = document.querySelector('.cards__count');
const cardsBack = document.querySelector('.cards__card-backs');

let level = "";
let monster = "";
let arrOfCards = "";
let deck = "";

let firstGreen = document.querySelector('.count__item.first.green');
let secondGreen = document.querySelector('.count__item.second.green');
let thirdGreen = document.querySelector('.count__item.third.green');

let firstBrown = document.querySelector('.count__item.first.yellow');
let secondBrown = document.querySelector('.count__item.second.yellow');
let thirdBrown = document.querySelector('.count__item.third.yellow');

let firstBlue = document.querySelector('.count__item.first.blue');
let secondBlue = document.querySelector('.count__item.second.blue');
let thirdBlue = document.querySelector('.count__item.third.blue');

const cardsUp = document.querySelector('.cards__card-ups');
const cardsBackImg = document.querySelector('.card-backs__img');

const playButton = document.querySelector('.play__button');

cardsOfMonster.forEach((item, i) => {
  item.addEventListener('click', () => {
    cardsOfMonster.forEach((el) => {
      el.style.border = "none";
      el.style.boxShadow = "none";
    })
    playLevels.classList.remove("none");
    item.style.border = "3px solid #122a54";
    item.style.boxShadow = "0 0 15px rgb(123 205 199)";
    monster = ancientsData[i].name;
    console.log(`Выбран - ${monster}`)
  })
})

playLevelsAll.forEach((item, i) => {
  item.addEventListener('click', () => {
    playLevelsAll.forEach((el) => {
      el.style.border = "none";
      el.style.boxShadow = "none";
    })
    cardsCount.classList.remove("none");
    cardsBack.classList.remove("none");
    item.style.border = "3px solid #122a54";
    item.style.boxShadow = "0 0 15px rgb(123 205 199)";

    if (item.textContent == 'Medium') {
      level = 'Medium';
    } else if (item.textContent == 'Easy') {
      level = 'Easy';
    } else if (item.textContent == 'High') {
      level = 'High';
    } else if (item.textContent == 'Very easy') {
      level = 'Very easy';
    } else if (item.textContent == 'Very high') {
      level = 'Very high';
    }
    console.log(`Выбран уровень - ${level}`)
    setColorsArr();
  })
})

function setNumberOfCards() {
  cardsOfMonster.forEach((item, i) => {
    item.addEventListener('click', () => {
      firstGreen.textContent = ancientsData[i].firstStage.greenCards;
      secondGreen.textContent = ancientsData[i].secondStage.greenCards;
      thirdGreen.textContent = ancientsData[i].thirdStage.greenCards;

      firstBrown.textContent = ancientsData[i].firstStage.brownCards;
      secondBrown.textContent = ancientsData[i].secondStage.brownCards;
      thirdBrown.textContent = ancientsData[i].thirdStage.brownCards;

      firstBlue.textContent = ancientsData[i].firstStage.blueCards;
      secondBlue.textContent = ancientsData[i].secondStage.blueCards;
      thirdBlue.textContent = ancientsData[i].thirdStage.blueCards;
    })
  })
}
setNumberOfCards()


function setColorsArr() {
  let countBrownCard = +firstBrown.textContent + +secondBrown.textContent + +thirdBrown.textContent;
  let countGreenCard = +firstGreen.textContent + +secondGreen.textContent + +thirdGreen.textContent;
  let countBlueCard = +firstBlue.textContent + +secondBlue.textContent + +thirdBlue.textContent;

  let arrBlue1 = []; let arrBlue2 = []; let arrBlue3 = [];



  let arrGreen1 = []; let arrGreen2 = []; let arrGreen3 = [];
  let arrBrown1 = []; let arrBrown2 = []; let arrBrown3 = [];

  // Easy settings
  let arrEasyBlue = []; let arrEasyBrown = []; let arrEasyGreen = [];
  for (let i = 0; i < blueCardsData.length; i++) {
    if (blueCardsData[i].difficulty != 'hard') {
      arrEasyBlue.push(blueCardsData[i]);
    }
  }
  for (let i = 0; i < brownCardsData.length; i++) {
    if (brownCardsData[i].difficulty != 'hard') {
      arrEasyBrown.push(brownCardsData[i]);
    }
  }
  for (let i = 0; i < greenCardsData.length; i++) {
    if (greenCardsData[i].difficulty != 'hard') {
      arrEasyGreen.push(greenCardsData[i]);
    }
  }

  // Hard settings
  let arrHardBlue = []; let arrHardBrown = []; let arrHardGreen = [];
  for (let i = 0; i < blueCardsData.length; i++) {
    if (blueCardsData[i].difficulty != 'easy') {
      arrHardBlue.push(blueCardsData[i]);
    }
  }
  for (let i = 0; i < brownCardsData.length; i++) {
    if (brownCardsData[i].difficulty != 'easy') {
      arrHardBrown.push(brownCardsData[i]);
    }
  }
  for (let i = 0; i < greenCardsData.length; i++) {
    if (greenCardsData[i].difficulty != 'easy') {
      arrHardGreen.push(greenCardsData[i]);
    }
  }

  // Very hard settings
  // Brown
  let arrVHardGreen = []; let arrVHardBlue = []; let arrVHardBrown = [];
  let arrNormGreen = []; let arrNormBlue = []; let arrNormBrown = [];
  for (let i = 0; i < brownCardsData.length; i++) {
    if (brownCardsData[i].difficulty != 'easy') {
      if (brownCardsData[i].difficulty != 'normal') {
        arrVHardBrown.push(brownCardsData[i]);
      }
    }
  }
  for (let i = 0; i < brownCardsData.length; i++) {
    if (brownCardsData[i].difficulty != 'easy') {
      if (brownCardsData[i].difficulty != 'hard') {
        arrNormBrown.push(brownCardsData[i]);
      }
    }
  }
  if (arrVHardBrown.length < countBrownCard) {
    let different = countBrownCard - arrVHardBrown.length;
    for (let i = 0; i < different; i++) {
      arrVHardBrown.push(arrNormBrown[Math.floor(Math.random() * (different + 1))]);
    }
  }

  // Green
  for (let i = 0; i < greenCardsData.length; i++) {
    if (greenCardsData[i].difficulty != 'easy') {
      if (greenCardsData[i].difficulty != 'normal') {
        arrVHardGreen.push(greenCardsData[i]);
      }
    }
  }
  for (let i = 0; i < greenCardsData.length; i++) {
    if (greenCardsData[i].difficulty != 'easy') {
      if (greenCardsData[i].difficulty != 'hard') {
        arrNormGreen.push(greenCardsData[i]);
      }
    }
  }
  if (arrVHardGreen.length < countGreenCard) {
    let different = countGreenCard - arrVHardGreen.length;
    for (let i = 0; i < different; i++) {
      arrVHardGreen.push(arrNormGreen[Math.floor(Math.random() * (different + 1))]);
    }
  }

  // Blue
  for (let i = 0; i < blueCardsData.length; i++) {
    if (blueCardsData[i].difficulty != 'easy') {
      if (blueCardsData[i].difficulty != 'normal') {
        arrVHardBlue.push(blueCardsData[i]);
      }
    }
  }
  for (let i = 0; i < blueCardsData.length; i++) {
    if (blueCardsData[i].difficulty != 'easy') {
      if (blueCardsData[i].difficulty != 'hard') {
        arrNormBlue.push(blueCardsData[i]);
      }
    }
  }
  if (arrVHardBlue.length < countBlueCard) {
    let different = countBlueCard - arrVHardBlue.length;
    for (let i = 0; i < different; i++) {
      arrVHardBlue.push(arrNormBlue[Math.floor(Math.random() * (different + 1))]);
    }
  }
  // Very easy settings
  // Brown
  let arrVEasyGreen = []; let arrVEasyBlue = []; let arrVEasyBrown = [];
  let arrNormaGreen = []; let arrNormaBlue = []; let arrNormaBrown = [];
  for (let i = 0; i < brownCardsData.length; i++) {
    if (brownCardsData[i].difficulty != 'hard') {
      if (brownCardsData[i].difficulty != 'normal') {
        arrVEasyBrown.push(brownCardsData[i]);
      }
    }
  }
  for (let i = 0; i < brownCardsData.length; i++) {
    if (brownCardsData[i].difficulty != 'easy') {
      if (brownCardsData[i].difficulty != 'hard') {
        arrNormaBrown.push(brownCardsData[i]);
      }
    }
  }
  if (arrVEasyBrown.length < countBrownCard) {
    let different = countBrownCard - arrVEasyBrown.length;
    for (let i = 0; i < different; i++) {
      arrVEasyBrown.push(arrNormaBrown[Math.floor(Math.random() * (different + 1))]);
    }
  }

  // Green
  for (let i = 0; i < greenCardsData.length; i++) {
    if (greenCardsData[i].difficulty != 'hard') {
      if (greenCardsData[i].difficulty != 'normal') {
        arrVEasyGreen.push(greenCardsData[i]);
      }
    }
  }
  for (let i = 0; i < greenCardsData.length; i++) {
    if (greenCardsData[i].difficulty != 'easy') {
      if (greenCardsData[i].difficulty != 'hard') {
        arrNormaGreen.push(greenCardsData[i]);
      }
    }
  }
  if (arrVEasyGreen.length < countGreenCard) {
    let different = countGreenCard - arrVEasyGreen.length;
    for (let i = 0; i < different; i++) {
      arrVEasyGreen.push(arrNormaGreen[Math.floor(Math.random() * (different + 1))]);
    }
  }

  // Blue
  for (let i = 0; i < blueCardsData.length; i++) {
    if (blueCardsData[i].difficulty != 'hard') {
      if (blueCardsData[i].difficulty != 'normal') {
        arrVEasyBlue.push(blueCardsData[i]);
      }
    }
  }
  for (let i = 0; i < blueCardsData.length; i++) {
    if (blueCardsData[i].difficulty != 'easy') {
      if (blueCardsData[i].difficulty != 'hard') {
        arrNormaBlue.push(blueCardsData[i]);
      }
    }
  }
  if (arrVEasyBlue.length < countBlueCard) {
    let different = countBlueCard - arrVEasyBlue.length;
    for (let i = 0; i < different; i++) {
      arrVEasyBlue.push(arrNormaBlue[Math.floor(Math.random() * (different + 1))]);
    }
  }

  // start 
  let arrBlue = []; let arrGreen = []; let arrBrown = [];
  if (level == "Medium") {
    arrBlue = blueCardsData; arrGreen = greenCardsData; arrBrown = brownCardsData;
  } else if (level == "Easy") {
    arrBlue = arrEasyBlue; arrGreen = arrEasyGreen; arrBrown = arrEasyBrown;
  } else if (level == "High") {
    arrBlue = arrHardBlue; arrGreen = arrHardGreen; arrBrown = arrHardBrown;
  } else if (level == "Very high") {
    arrBlue = arrVHardBlue; arrGreen = arrVHardGreen; arrBrown = arrVHardBrown;
  } else if (level == "Very easy") {
    arrBlue = arrVEasyBlue; arrGreen = arrVEasyGreen; arrBrown = arrVEasyBrown;

  }


  let arrBlueCard = _.shuffle(_.range(0, arrBlue.length)).slice(0, countBlueCard);
  let arrGreenCard = _.shuffle(_.range(0, arrGreen.length)).slice(0, countGreenCard);
  let arrBrownCard = _.shuffle(_.range(0, arrBrown.length)).slice(0, countBrownCard);


  if (firstBlue.textContent > 0) {
    for (let a = 0; a < firstBlue.textContent; a++) {
      arrBlue1.push(arrBlue[arrBlueCard[0]].id);
      arrBlueCard.shift()
    }
  }
  if (secondBlue.textContent > 0) {
    for (let a = 0; a < secondBlue.textContent; a++) {
      arrBlue2.push(arrBlue[arrBlueCard[0]].id);
      arrBlueCard.shift()
    }
  }
  if (thirdBlue.textContent > 0) {
    for (let a = 0; a < thirdBlue.textContent; a++) {
      arrBlue3.push(arrBlue[arrBlueCard[0]].id);
      arrBlueCard.shift()
    }
  }

  if (firstGreen.textContent > 0) {
    for (let a = 0; a < firstGreen.textContent; a++) {
      arrGreen1.push(arrGreen[arrGreenCard[0]].id);
      arrGreenCard.shift()
    }
  }
  if (secondGreen.textContent > 0) {
    for (let a = 0; a < secondGreen.textContent; a++) {
      arrGreen2.push(arrGreen[arrGreenCard[0]].id);
      arrGreenCard.shift()
    }
  }
  if (thirdGreen.textContent > 0) {
    for (let a = 0; a < thirdGreen.textContent; a++) {
      arrGreen3.push(arrGreen[arrGreenCard[0]].id);
      arrGreenCard.shift()
    }
  }

  if (firstBrown.textContent > 0) {
    for (let a = 0; a < firstBrown.textContent; a++) {
      arrBrown1.push(arrBrown[arrBrownCard[0]].id);
      arrBrownCard.shift()
    }
  }
  if (secondBrown.textContent > 0) {
    for (let a = 0; a < secondBrown.textContent; a++) {
      arrBrown2.push(arrBrown[arrBrownCard[0]].id);
      arrBrownCard.shift()
    }
  }
  if (thirdBrown.textContent > 0) {
    for (let a = 0; a < thirdBrown.textContent; a++) {
      arrBrown3.push(arrBrown[arrBrownCard[0]].id);
      arrBrownCard.shift()
    }
  }

  let arrOfCards1 = arrBlue1.concat(arrGreen1, arrBrown1)

  arrOfCards1.sort(() => Math.random() - 0.5);
  let arrOfCards2 = arrBlue2.concat(arrGreen2, arrBrown2)

  arrOfCards2.sort(() => Math.random() - 0.5);
  let arrOfCards3 = arrBlue3.concat(arrGreen3, arrBrown3)

  arrOfCards3.sort(() => Math.random() - 0.5);

  deck = arrOfCards1.concat(arrOfCards2, arrOfCards3);
  console.log(`Колода состоит из - ${deck}`)
  return deck;
}

cardsBackImg.addEventListener('click', () => {
  let imgCard = deck[0];
  cardsUp.innerHTML = `<img src="src/assets/MythicCards/${imgCard}.png" alt="card-up" class="card-ups__img">
  <img src="src/assets/Ghost.gif" alt="card-up" class="card-ups__load">`;
  if (/^blue/.test(imgCard)) {
    firstBlue.textContent -= 1;
    if (firstBlue.textContent < 0) {
      firstBlue.textContent = 0;
      secondBlue.textContent -= 1;
      if (secondBlue.textContent < 0) {
        secondBlue.textContent = 0;
        thirdBlue.textContent -= 1;
        if (thirdBlue.textContent < 0) {
          thirdBlue.textContent = 0;
        }
      }
    }
  }
  if (/^green/.test(imgCard)) {
    firstGreen.textContent -= 1;
    if (firstGreen.textContent < 0) {
      firstGreen.textContent = 0;
      secondGreen.textContent -= 1;
      if (secondGreen.textContent < 0) {
        secondGreen.textContent = 0;
        thirdGreen.textContent -= 1;
        if (thirdGreen.textContent < 0) {
          thirdGreen.textContent = 0;
        }
      }
    }
  }
  if (/^brown/.test(imgCard)) {
    firstBrown.textContent -= 1;
    if (firstBrown.textContent < 0) {
      firstBrown.textContent = 0;
      secondBrown.textContent -= 1;
      if (secondBrown.textContent < 0) {
        secondBrown.textContent = 0;
        thirdBrown.textContent -= 1;
        if (thirdBrown.textContent < 0) {
          thirdBrown.textContent = 0;
        }
      }
    }
  }
  if (deck.length > 1) {
    deck.shift()
  } else {
    cardsBackImg.classList.add('backs')
    console.log('Thanks for game❤️. Choose another settings')
  }
})

playButton.addEventListener('click', () => location.reload())

window.onload = function () {
  let preloader = document.getElementById("preloader");
  preloader.style.display = "none";
}