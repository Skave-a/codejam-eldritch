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
let shuffled = "";

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
  function setBlueArr() {
    let countBlueCard = +firstBlue.textContent + +secondBlue.textContent + +thirdBlue.textContent;
    let arrBlue = [];

    if (level == "Medium") {
      for (let i = 0; i < countBlueCard; i++) {
        let min = Math.ceil(0);
        let max = Math.floor(blueCardsData.length);
        let a = Math.floor(Math.random() * (max - min + 1)) + min;
        arrBlue.push(blueCardsData[a].id);
      }
    } else if (level == "Easy") {
      let arrEasyBlue = [];
      for (let i = 0; i < blueCardsData.length; i++) {
        if (blueCardsData[i].difficulty != 'hard') {
          arrEasyBlue.push(blueCardsData[i]);
        }
      }
      for (let i = 0; i < countBlueCard; i++) {
        let min = Math.ceil(0);
        let max = Math.floor(arrEasyBlue.length);
        let a = Math.floor(Math.random() * (max - min + 1)) + min;
        arrBlue.push(arrEasyBlue[a].id);
      }
    } else if (level == "High") {
      let arrHardBlue = [];
      for (let i = 0; i < blueCardsData.length; i++) {
        if (blueCardsData[i].difficulty != 'easy') {
          arrHardBlue.push(blueCardsData[i]);
        }
      }
      for (let i = 0; i < countBlueCard; i++) {
        let min = Math.ceil(0);
        let max = Math.floor(arrHardBlue.length);
        let a = Math.floor(Math.random() * (max - min + 1)) + min;
        arrBlue.push(arrHardBlue[a].id);
      }
    } else if (level == "Very high") {
      let arrVHardBlue = [];
      let arrNormBlue = [];
      countBlueCard
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

        let different = countBlueCard - arrVHardBlue;
        alert(different);
      }

      console.log(arrNormBlue)
      for (let i = 0; i < arrVHardBlue.length; i++) {
        let min = Math.ceil(0);
        let max = Math.floor(arrVHardBlue.length);
        let a = Math.floor(Math.random() * (max - min + 1)) + min;
        arrBlue.push(arrVHardBlue[a].id);
      }
    }
    return arrBlue;
  }

  function setGreenArr() {
    let countGreenCard = +firstGreen.textContent + +secondGreen.textContent + +thirdGreen.textContent;
    let arrGreen = [];

    if (level == "Medium") {
      for (let i = 0; i < countGreenCard; i++) {
        let min = Math.ceil(0);
        let max = Math.floor(greenCardsData.length);
        let a = Math.floor(Math.random() * (max - min + 1)) + min;
        arrGreen.push(greenCardsData[a].id);
      }
    } else if (level == "Easy") {
      let arrEasyGreen = [];
      for (let i = 0; i < greenCardsData.length; i++) {
        if (greenCardsData[i].difficulty != 'hard') {
          arrEasyGreen.push(greenCardsData[i]);
        }
      }
      for (let i = 0; i < countGreenCard; i++) {
        let min = Math.ceil(0);
        let max = Math.floor(arrEasyGreen.length);
        let a = Math.floor(Math.random() * (max - min + 1)) + min;
        arrGreen.push(arrEasyGreen[a].id);
      }
    } else if (level == "High") {
      let arrHardGreen = [];
      for (let i = 0; i < greenCardsData.length; i++) {
        if (greenCardsData[i].difficulty != 'easy') {
          arrHardGreen.push(greenCardsData[i]);
        }
      }
      for (let i = 0; i < countGreenCard; i++) {
        let min = Math.ceil(0);
        let max = Math.floor(arrHardGreen.length);
        let a = Math.floor(Math.random() * (max - min + 1)) + min;
        arrGreen.push(arrHardGreen[a].id);
      }
    }
    return arrGreen;
  }

  function setBrownArr() {
    let countBrownCard = +firstBrown.textContent + +secondBrown.textContent + +thirdBrown.textContent;
    let arrBrown = [];

    if (level == "Medium") {
      for (let i = 0; i < countBrownCard; i++) {
        let min = Math.ceil(0);
        let max = Math.floor(brownCardsData.length);
        let a = Math.floor(Math.random() * (max - min + 1)) + min;
        arrBrown.push(brownCardsData[a].id);
      }
    } else if (level == "Easy") {
      let arrEasyBrown = [];
      for (let i = 0; i < brownCardsData.length; i++) {
        if (brownCardsData[i].difficulty != 'hard') {
          arrEasyBrown.push(brownCardsData[i]);
        }
      }
      for (let i = 0; i < countBrownCard; i++) {
        let min = Math.ceil(0);
        let max = Math.floor(arrEasyBrown.length);
        let a = Math.floor(Math.random() * (max - min + 1)) + min;
        arrBrown.push(arrEasyBrown[a].id);
      }
    } else if (level == "High") {
      let arrHardBrown = [];
      for (let i = 0; i < brownCardsData.length; i++) {
        if (brownCardsData[i].difficulty != 'easy') {
          arrHardBrown.push(brownCardsData[i]);
        }
      }
      for (let i = 0; i < countBrownCard; i++) {
        let min = Math.ceil(0);
        let max = Math.floor(arrHardBrown.length);
        let a = Math.floor(Math.random() * (max - min + 1)) + min;
        arrBrown.push(arrHardBrown[a].id);
      }
    }
    return arrBrown;
  }

  arrOfCards = setBrownArr().concat(setBlueArr(), setGreenArr())
  shuffled = [];
  shuffled = arrOfCards.sort(() => Math.random() - 0.5);
  //console.log(shuffled)
  return shuffled;
}




cardsBackImg.addEventListener('click', () => {
  if (shuffled[0] == 'undefined') {
    setColorsArr()
  }

  let imgCard = shuffled[0];
  //console.log(imgCard)

  cardsUp.innerHTML = `<img src="src/assets/MythicCards/${imgCard}.png" alt="card-up" class="card-ups__img">`;
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
  if (shuffled.length > 1) {
    shuffled.shift()
  }
  if (shuffled.length == 1) {
    cardsBackImg.classList.add('backs')
  }
})

function reload() {
  location.reload()
}

playButton.addEventListener('click', reload)