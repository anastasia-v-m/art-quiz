///////////////////////////////////////////
import initData from './js/parseImageJson.js';

const allImages = initData(()=>allImages);
console.log(allImages)
//const allImages = initData.allImages;
const qunicArtists = initData.qunicArtists;
const qunicPictures = initData.qunicPictures;
const catNum = 1;

function getCurImages() { 
  let startIndex = catNum * 10;
  let finishIndex = startIndex + 10;
  let curretnImages = allImages.slice(startIndex, finishIndex);
  return curretnImages;
}

const curretnImages = await getCurImages();

function getRandomArtists(rightNum) {
  const randomArr = getRandomNums(rightNum, qunicArtists);
  return randomArr.map((item) => {
    qunicArtists[item];
  });
}

function getRandomPictures(rightNum) {
  const randomArr = getRandomNums(rightNum, qunicPictures);
  return randomArr.map((item) => {
    qunicPictures[item];
  });
}

function getRandomNums(rightNum, itemSet) {
  let randomItems = [];
  randomItems.push(rigthNum);
  for(let i = 0; i < Data.answerQuontity - 1; i += 1) {
    let num = (getRandomNum(0, itemSet.size, randomItems));
    randomItems.push(num); //allImages[num].author
  }
  return randomItems;
}

function getRandomNum(min, max, exclusion) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return (exclusion.indexOf(num) !== -1) ? generateRandom(min, max) : num;
}

let qestionNum = 0;
let answers = getRandomArtists(qestionNum);
let answers_ = getRandomp(qestionNum);
let pictNumber = curretnImages[qestionNum].imageNum;

for (let i = 0; i < answers.length; i += 1) {
  answerButton = document.querySelector('.artist' + i);
  answerButton.textContent = answer[i];
}

