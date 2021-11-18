import Utils from './Utils.js';

let categoryType;

function setCatsClickHandlers() {
  let cats = document.querySelectorAll('.category');
  for (let i = 0; i < cats.length; i += 1) {
    cats[i].addEventListener('click', goToQuiz);
  }
}

function goToQuiz() {
  console.log("****", this); 
  location.hash = '#artQuiz';
  //router();
}

function getQuizType() {
  categoryType = Utils.parseRequestURL().category;
  setCatsClickHandlers();
}

window.addEventListener('load', getQuizType);
window.addEventListener('hashchange', getQuizType);