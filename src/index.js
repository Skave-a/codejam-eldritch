const ancientsData = [
  {
    id: 'azathoth',
    name: 'azathoth',
    //cardFace: Ancients.azathoth,
    firstStage: {
      greenCards: 1,
      blueCards: 1,
      brownCards: 2,
    },
    secondStage: {
      greenCards: 2,
      blueCards: 1,
      brownCards: 3,
    },
    thirdStage: {
      greenCards: 2,
      blueCards: 0,
      brownCards: 4,
    },
  },
  {
    id: 'cthulhu',
    name: 'cthulhu',
    //  cardFace: Ancients.cthulhu,
    firstStage: {
      greenCards: 0,
      blueCards: 2,
      brownCards: 2,
    },
    secondStage: {
      greenCards: 1,
      blueCards: 0,
      brownCards: 3,
    },
    thirdStage: {
      greenCards: 3,
      blueCards: 0,
      brownCards: 4,
    },
  },
  {
    id: 'iogSothoth',
    name: 'iogSothoth',
    //  cardFace: Ancients.iogSothoth,
    firstStage: {
      greenCards: 0,
      blueCards: 1,
      brownCards: 2,
    },
    secondStage: {
      greenCards: 2,
      blueCards: 1,
      brownCards: 3,
    },
    thirdStage: {
      greenCards: 3,
      blueCards: 0,
      brownCards: 4,
    },
  },
  {
    id: 'shubNiggurath',
    name: 'shubNiggurath',
    //cardFace: Ancients.shubNiggurath,
    firstStage: {
      greenCards: 1,
      blueCards: 1,
      brownCards: 2,
    },
    secondStage: {
      greenCards: 3,
      blueCards: 1,
      brownCards: 2,
    },
    thirdStage: {
      greenCards: 2,
      blueCards: 0,
      brownCards: 4,
    },
  },
]

//import blueCards from './img/MythicCards/index.js';
//import blue1 from './img/MythicCards/blue/blue1.png';


const cardsOfMonster = document.querySelectorAll('.play__item');
const playLevels = document.querySelector('.play__levels');
const playLevelsAll = document.querySelectorAll('.play__level');
//const cardAzathoth = document.querySelector('.item__card.Azathoth');
const cardsCount = document.querySelector('.cards__count');
const cardsBack = document.querySelector('.cards__card-backs');

const cardsUp = document.querySelector('.cards__card-ups');
const cardsBackImg = document.querySelector('.card-backs__img');




function chooseMonster() {
  cardsOfMonster.forEach((item, i) => {
    item.addEventListener('click', () => {
      cardsOfMonster.forEach((el) => {
        el.style.border = "none";
      })
      //console.log(i)
      playLevels.classList.remove("none");
      item.style.border = "solid 3px red";
      let firstGreen = document.querySelector('.count__item.first.green');
      let secondGreen = document.querySelector('.count__item.second.green');
      let thirdGreen = document.querySelector('.count__item.third.green');

      firstGreen.textContent = ancientsData[i].firstStage.greenCards;
      secondGreen.textContent = ancientsData[i].secondStage.greenCards;
      thirdGreen.textContent = ancientsData[i].thirdStage.greenCards;

      let firstYellow = document.querySelector('.count__item.first.yellow');
      let secondYellow = document.querySelector('.count__item.second.yellow');
      let thirdYellow = document.querySelector('.count__item.third.yellow');

      firstYellow.textContent = ancientsData[i].firstStage.brownCards;
      secondYellow.textContent = ancientsData[i].secondStage.brownCards;
      thirdYellow.textContent = ancientsData[i].thirdStage.brownCards;

      let firstBlue = document.querySelector('.count__item.first.blue');
      let secondBlue = document.querySelector('.count__item.second.blue');
      let thirdBlue = document.querySelector('.count__item.third.blue');

      firstBlue.textContent = ancientsData[i].firstStage.blueCards;
      secondBlue.textContent = ancientsData[i].secondStage.blueCards;
      thirdBlue.textContent = ancientsData[i].thirdStage.blueCards;
      //console.log(ancientsData[i].firstStage.greenCards)
    })
  })
}
chooseMonster()
//cardAzathoth.addEventListener('click', chooseMonster)




function chooseLevel() {
  playLevelsAll.forEach((item, i) => {
    item.addEventListener('click', () => {
      //console.log(i)
      playLevelsAll.forEach((el) => {
        el.style.border = "none";
      })
      cardsCount.classList.remove("none");
      cardsBack.classList.remove("none");
      item.style.border = "solid 3px red";
      console.log(i)
      cardsBackImg.addEventListener('click', () => {
        console.log(`2-${i}`)

        if (i == 2) {
          //console.log('3')
          cardsUp.innerHTML = `<img src="${blue1}" alt="card-up" class="card-ups__img">`
        }
      })
    })
  })

}
chooseLevel()

