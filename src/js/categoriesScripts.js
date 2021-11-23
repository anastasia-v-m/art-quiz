import Utils from './Utils.js';
import initData from './parseImageJson.js';
import Data from './Data.js';
import Res from './test.js';
import ArtQuiz from '../views/ArtQuiz.js';

const allImages = await initData.allImages;

function getQunicArtists(data) {
  const qunicArtists = new Set();
  for (let i = 0; i < data.length; i += 1) {
    qunicArtists.add(data[i].author);
  }
  return Array.from(qunicArtists);
}
const qunicArtists = getQunicArtists(allImages);

function getQunicPictures(data) {
  const qunicPictures = new Set();
  for (let i = 0; i < data.length; i += 1) {
    qunicPictures.add(data[i].imageNum);
  }
  return Array.from(qunicPictures);
}
const qunicPictures = getQunicPictures(allImages);

let categoryType;

function setCatsClickHandlers() {
  let cats = document.querySelectorAll('.category');
  for (let i = 0; i < cats.length; i += 1) {
    cats[i].addEventListener('click', openQuiz);
  }
}

function openQuiz() {
  fillQestionPage(this.id);
}

function getQuizType() {
  categoryType = Utils.parseRequestURL().category;
  setCatsClickHandlers();
}

function fillQestionPage(catNum) {
  function getCurImages() { 
    let startIndex = catNum * 10;
    let finishIndex = startIndex + 10;
    //console.log(allImages)
    let curretnImages = allImages.slice(startIndex, finishIndex);
    return curretnImages;
  }

  const curretnImages = getCurImages();
  //console.log(curretnImages)
  
  function getRandomArtists(rightNum) {
    const randomArr = getRandomNums(rightNum, qunicArtists);
    const result = randomArr.map((item) => {
      return qunicArtists[item];
    });
    return result;
  }

  function getRandomPictures(rightNum) {
    const randomArr = getRandomNums(rightNum, qunicPictures);
    return randomArr.map((item) => {
      qunicPictures[item];
    });
  }

  function getRandomNums(rightNum, itemSet) {
    let randomItems = [];
    console.log(rightNum)
    randomItems.push(rightNum);
    //console.log(randomItems)
    for(let i = 0; i < Data.answerQuontity - 1; i += 1) {
      let num = (getRandomNum(0, itemSet.length - 1, randomItems));
      randomItems.push(num); //allImages[num].author
      //console.log(randomItems)
    }
    return randomItems;
  }

  function getRandomNum(min, max, exclusion) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return (exclusion.indexOf(num) !== -1) ? getRandomNum(min, max) : num;
  }

  const shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
    return array;
  }
  
  let qestionNum = 0;
  let indexInQunicArt = qunicArtists.indexOf(curretnImages[qestionNum].author);
  // console.log(qunicArtists)
  // console.log(qunicArtists.indexOf(curretnImages[qestionNum].author))
  let indexInQunicPict = qunicPictures.indexOf(curretnImages[qestionNum].imageNum);
  let answers = shuffle(getRandomArtists(indexInQunicArt));
  // let answers_ = getRandomPictures(indexInQunicPict);
  let pictNumber = curretnImages[qestionNum].imageNum;

  const content = document.querySelector('main');
  async function fn() {
    const view = await ArtQuiz.render(pictNumber, answers, curretnImages[qestionNum].name);
    content.innerHTML = view;  
    const answersButtons = document.querySelectorAll('.answer-button');
    for (let i = 0; i < answersButtons.length; i += 1){
      answersButtons[i].addEventListener('click', checkAnswer);
      //console.log(answersButtons[i])
    }

    function checkAnswer() {
      if (this.textContent === curretnImages[qestionNum].author) {
        console.log('Yes');
      }
      qestionNum += 1;
      if (qestionNum <= 9) {
        renderNextRound();
      } else {
        //
      }
    }

    const renderNextRound = () => {
      indexInQunicArt = qunicArtists.indexOf(curretnImages[qestionNum].author);  
      answers = shuffle(getRandomArtists(indexInQunicArt));
      for (let i = 0; i < answersButtons.length; i += 1){
        answersButtons[i].textContent = answers[i];
        //console.log(answersButtons[i])
      }
      const qiuzQestion = document.querySelector('.question-sentence');
      qiuzQestion.textContent = `Кто автор картины ${curretnImages[qestionNum].name}?`
      const qiuzPicture = document.querySelector('.big-image');
      qiuzPicture.setAttribute('src', `../src/image-data-master/img/${curretnImages[qestionNum].imageNum}.jpg`);
    }
  }
  
  fn();
  // const a = Res.meth(1,10)
  // console.log(a);
  // currentQestionAnswers = answers;
  // currentQestion = qestionNum;
//console.log(document.querySelectorAll('div'))
  // for (let i = 0; i < answers.length; i += 1) {
  //   answerButton = document.querySelector('.artist' + i);
  //   answerButton.textContent = answer[i];
  // }  

  
}


window.addEventListener('load', getQuizType);
window.addEventListener('hashchange', getQuizType);