const ancientsData = [
  {
    id: 'azathoth',
    name: 'azathoth',
    ////cardFace: Ancients.azathoth,
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
    //  //cardFace: Ancients.cthulhu,
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
    //  //cardFace: Ancients.iogSothoth,
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
    ////cardFace: Ancients.shubNiggurath,
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


let blueCardsData = [
  {
    id: 'blue1',
    //cardFace: blueCardsAssets.blue1,
    difficulty: 'hard',
    color: 'blue'
  },
  {
    id: 'blue2',
    //cardFace: blueCardsAssets.blue2,
    difficulty: 'hard',
    color: 'blue'
  },
  {
    id: 'blue3',
    //cardFace: blueCardsAssets.blue3,
    difficulty: 'easy',
    color: 'blue'
  },
  {
    id: 'blue4',
    //cardFace: blueCardsAssets.blue4,
    difficulty: 'easy',
    color: 'blue'
  },
  {
    id: 'blue5',
    //cardFace: blueCardsAssets.blue5,
    difficulty: 'easy',
    color: 'blue'
  },
  {
    id: 'blue6',
    //cardFace: blueCardsAssets.blue6,
    difficulty: 'hard',
    color: 'blue'
  },
  {
    id: 'blue7',
    //cardFace: blueCardsAssets.blue7,
    difficulty: 'normal',
    color: 'blue'
  },
  {
    id: 'blue8',
    //cardFace: blueCardsAssets.blue8,
    difficulty: 'hard',
    color: 'blue'
  },
  {
    id: 'blue9',
    //cardFace: blueCardsAssets.blue9,
    difficulty: 'normal',
    color: 'blue'
  },
  {
    id: 'blue10',
    //cardFace: blueCardsAssets.blue10,
    difficulty: 'easy',
    color: 'blue'
  },
  {
    id: 'blue11',
    //cardFace: blueCardsAssets.blue11,
    difficulty: 'normal',
    color: 'blue'
  },
  {
    id: 'blue12',
    //cardFace: blueCardsAssets.blue12,
    difficulty: 'normal',
    color: 'blue'
  },
]


const brownCardsData = [
  {
    id: 'brown1',
    //cardFace: brownCardsAssets.brown1,
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown2',
    //cardFace: brownCardsAssets.brown2,
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown3',
    //cardFace: brownCardsAssets.brown3,
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown4',
    //cardFace: brownCardsAssets.brown4,
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown5',
    //cardFace: brownCardsAssets.brown5,
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown6',
    //cardFace: brownCardsAssets.brown6,
    difficulty: 'hard',
    color: 'brown'
  },
  {
    id: 'brown7',
    //cardFace: brownCardsAssets.brown7,
    difficulty: 'hard',
    color: 'brown'
  },
  {
    id: 'brown8',
    //cardFace: brownCardsAssets.brown8,
    difficulty: 'hard',
    color: 'brown'
  },
  {
    id: 'brown9',
    //cardFace: brownCardsAssets.brown9,
    difficulty: 'hard',
    color: 'brown'
  },
  {
    id: 'brown10',
    //cardFace: brownCardsAssets.brown10,
    difficulty: 'hard',
    color: 'brown'
  },
  {
    id: 'brown11',
    //cardFace: brownCardsAssets.brown11,
    difficulty: 'easy',
    color: 'brown'
  },
  {
    id: 'brown12',
    //cardFace: brownCardsAssets.brown12,
    difficulty: 'easy',
    color: 'brown'
  },
  {
    id: 'brown13',
    //cardFace: brownCardsAssets.brown13,
    difficulty: 'easy',
    color: 'brown'
  },
  {
    id: 'brown14',
    //cardFace: brownCardsAssets.brown14,
    difficulty: 'easy',
    color: 'brown'
  },
  {
    id: 'brown15',
    //cardFace: brownCardsAssets.brown15,
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown16',
    //cardFace: brownCardsAssets.brown16,
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown17',
    //cardFace: brownCardsAssets.brown17,
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown18',
    //cardFace: brownCardsAssets.brown18,
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown19',
    //cardFace: brownCardsAssets.brown19,
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown20',
    //cardFace: brownCardsAssets.brown20,
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown21',
    //cardFace: brownCardsAssets.brown21,
    difficulty: 'easy',
    color: 'brown'
  },
]


const greenCardsData = [
  {
    id: 'green1',
    //cardFace: greenCardsAssets.green1,
    difficulty: 'easy',
    color: 'green'
  },
  {
    id: 'green2',
    //cardFace: greenCardsAssets.green2,
    difficulty: 'hard',
    color: 'green'
  },
  {
    id: 'green3',
    //cardFace: greenCardsAssets.green3,
    difficulty: 'hard',
    color: 'green'
  },
  {
    id: 'green4',
    //cardFace: greenCardsAssets.green4,
    difficulty: 'hard',
    color: 'green'
  },
  {
    id: 'green5',
    //cardFace: greenCardsAssets.green5,
    difficulty: 'hard',
    color: 'green'
  },
  {
    id: 'green6',
    //cardFace: greenCardsAssets.green6,
    difficulty: 'hard',
    color: 'green'
  },
  {
    id: 'green7',
    //cardFace: greenCardsAssets.green7,
    difficulty: 'normal',
    color: 'green'
  },
  {
    id: 'green8',
    //cardFace: greenCardsAssets.green8,
    difficulty: 'normal',
    color: 'green'
  },
  {
    id: 'green9',
    //cardFace: greenCardsAssets.green9,
    difficulty: 'normal',
    color: 'green'
  },
  {
    id: 'green10',
    //cardFace: greenCardsAssets.green10,
    difficulty: 'normal',
    color: 'green'
  },
  {
    id: 'green11',
    //cardFace: greenCardsAssets.green11,
    difficulty: 'normal',
    color: 'green'
  },
  {
    id: 'green12',
    //cardFace: greenCardsAssets.green12,
    difficulty: 'easy',
    color: 'green'
  },
  {
    id: 'green13',
    //cardFace: greenCardsAssets.green13,
    difficulty: 'normal',
    color: 'green'
  },
  {
    id: 'green14',
    //cardFace: greenCardsAssets.green14,
    difficulty: 'normal',
    color: 'green'
  },
  {
    id: 'green15',
    //cardFace: greenCardsAssets.green15,
    difficulty: 'normal',
    color: 'green'
  },
  {
    id: 'green16',
    //cardFace: greenCardsAssets.green16,
    difficulty: 'easy',
    color: 'green'
  },
  {
    id: 'green17',
    //cardFace: greenCardsAssets.green17,
    difficulty: 'easy',
    color: 'green'
  },
  {
    id: 'green18',
    //cardFace: greenCardsAssets.green18,
    difficulty: 'easy',
    color: 'green'
  },
]




const cardsOfMonster = document.querySelectorAll('.item__card');
const playLevels = document.querySelector('.play__levels');
const playLevelsAll = document.querySelectorAll('.play__level');
//const cardAzathoth = document.querySelector('.item__card.Azathoth');
const cardsCount = document.querySelector('.cards__count');
const cardsBack = document.querySelector('.cards__card-backs');

const cardsUp = document.querySelector('.cards__card-ups');
const cardsBackImg = document.querySelector('.card-backs__img');


let firstGreen = document.querySelector('.count__item.first.green');
let secondGreen = document.querySelector('.count__item.second.green');
let thirdGreen = document.querySelector('.count__item.third.green');

let firstYellow = document.querySelector('.count__item.first.yellow');
let secondYellow = document.querySelector('.count__item.second.yellow');
let thirdYellow = document.querySelector('.count__item.third.yellow');

let firstBlue = document.querySelector('.count__item.first.blue');
let secondBlue = document.querySelector('.count__item.second.blue');
let thirdBlue = document.querySelector('.count__item.third.blue');

const playLevelVEasy = document.querySelectorAll('.play__level.very-easy');
const playLevelEasy = document.querySelectorAll('.play__level.easy');
const playLevelMedium = document.querySelectorAll('.play__level.medium');
const playLevelHigh = document.querySelectorAll('.play__level.high');
const playLevelVHigh = document.querySelectorAll('.play__level.very-high');


function chooseMonster() {
  cardsOfMonster.forEach((item, i) => {
    item.addEventListener('click', () => {
      cardsOfMonster.forEach((el) => {
        el.style.border = "none";
        el.style.boxShadow = "none";
      })
      //console.log(i)
      playLevels.classList.remove("none");
      item.style.border = "3px solid #122a54";
      item.style.boxShadow = "0 0 15px rgb(123 205 199)";

      firstGreen.textContent = ancientsData[i].firstStage.greenCards;
      secondGreen.textContent = ancientsData[i].secondStage.greenCards;
      thirdGreen.textContent = ancientsData[i].thirdStage.greenCards;

      firstYellow.textContent = ancientsData[i].firstStage.brownCards;
      secondYellow.textContent = ancientsData[i].secondStage.brownCards;
      thirdYellow.textContent = ancientsData[i].thirdStage.brownCards;

      firstBlue.textContent = ancientsData[i].firstStage.blueCards;
      secondBlue.textContent = ancientsData[i].secondStage.blueCards;
      thirdBlue.textContent = ancientsData[i].thirdStage.blueCards;
      //console.log(ancientsData[i].firstStage.greenCards)

      countCards()
      cardsUp.innerHTML = ''
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
        el.style.boxShadow = "none";
      })
      cardsCount.classList.remove("none");
      cardsBack.classList.remove("none");
      item.style.border = "3px solid #122a54";
      item.style.boxShadow = "0 0 15px rgb(123 205 199)";
      //console.log(i)
      // cardsBackImg.addEventListener('click', () => {

      //   cardsUp.innerHTML = `<img src="src/assets/MythicCards/blue/blue1.png" alt="card-up" class="card-ups__img">`
      // })
      if (item.textContent == "Easy") {
        console.log(blueCardsData)
        for (let j = 0; j < blueCardsData.length; j++) {
          for (let key in blueCardsData[i]) {
            //console.log(blueCardsData[i][key])

            if (blueCardsData[i][key] == 'hard') {
              console.log(blueCardsData.indexOf(blueCardsData[i]))
              blueCardsData.splice(blueCardsData.indexOf(blueCardsData[i]), 1)
            }
          }
        }
        console.log(blueCardsData)

      }
    })
  })

}
chooseLevel()





function countCards() {
  let countBlueCard = +firstBlue.textContent + +secondBlue.textContent + +thirdBlue.textContent;
  let countGreenCard = +firstGreen.textContent + +secondGreen.textContent + +thirdGreen.textContent;
  let countYellowCard = +firstYellow.textContent + +secondYellow.textContent + +thirdYellow.textContent;
  let countOfCard = countBlueCard + countGreenCard + countYellowCard;







  function getRandomBlue(min = 0, max = blueCardsData.length) {
    let arr = [];
    for (let i = 0; i < countBlueCard; i++) {
      min = Math.ceil(min);
      max = Math.floor(max);
      let a = Math.floor(Math.random() * (max - min + 1)) + min;
      arr.push(blueCardsData[a].id);
    }
    return arr;
  }

  function getRandomGreen(min = 0, max = greenCardsData.length) {
    let arr = [];
    for (let i = 0; i < countGreenCard; i++) {
      min = Math.ceil(min);
      max = Math.floor(max);
      let a = Math.floor(Math.random() * (max - min + 1)) + min;
      arr.push(greenCardsData[a].id);
      greenCardsData.slice(a, 1)
    }
    return arr;
  }

  function getRandomYellow(min = 0, max = brownCardsData.length) {
    let arr = [];
    for (let i = 0; i < countYellowCard; i++) {
      min = Math.ceil(min);
      max = Math.floor(max);
      let a = Math.floor(Math.random() * (max - min + 1)) + min;
      arr.push(brownCardsData[a].id);
    }
    return arr;
  }
  let arrOfCards = getRandomGreen().concat(getRandomYellow(), getRandomBlue())
  var shuffled = arrOfCards.sort(() => Math.random() - 0.5);
  //console.log(shuffled)
  cardsBackImg.addEventListener('click', () => {
    let imgCard = shuffled[0];
    console.log(imgCard)
    cardsUp.innerHTML = `<img src="src/assets/MythicCards/${imgCard}.png" alt="card-up" class="card-ups__img">`;
    if (/^blue/.test(imgCard)) {
      //console.log(firstBlue.textContent)
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
      //console.log(firstBlue.textContent)
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
      //console.log(firstBlue.textContent)
      firstYellow.textContent -= 1;
      if (firstYellow.textContent < 0) {
        firstYellow.textContent = 0;
        secondYellow.textContent -= 1;
        if (secondYellow.textContent < 0) {
          secondYellow.textContent = 0;
          thirdYellow.textContent -= 1;
          if (thirdYellow.textContent < 0) {
            thirdYellow.textContent = 0;
          }
        }
      }
      //console.log(firstBlue.textContent)
    }
    if (shuffled.length > 1) {
      shuffled.shift()
      //console.log(` слайс ${shuffled}`)

    }
    if (shuffled.length == 1) {
      cardsBackImg.classList.add('backs')
    }
  })
}

//countCards()