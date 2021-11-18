import Data from '../js/Data.js';
import Utils from '../js/Utils.js';

let answers = '';

for (let i = 0; i < Data.categoriesQuontity; i += 1) {
  categoriesGrid += `
  <div class="category" id="${i}">
    <div class="cat-info">
      <div class="cat-title">
        ${Data.categoriesTitles[i]}
      </div>
      <div class="cat-score">
        <span class="user-score for-portrait"></span><span class="cat-total-score"></span>
      </div>
    </div>
    <img src="../src/image-data-master/img/${i}.jpg" alt="category" >
  </div>`
}


const ArtQuiz = {
  render: async () => {
    const view =  `
    <div class="question">
      <div class="question-sentence">Кто здесь?</div>
      <div class="question-pict">
        <img src="../src/image-data-master/img/99.jpg" alt="pict">
      </div>
    </div>
    <div class="answers">
      <div class="answers-wrapper">
        <div class="common-button answer-button artist1">ans1</div>
        <div class="common-button answer-button artist2">ans2</div>
        <div class="common-button answer-button artist3">ans3</div>
        <div class="common-button answer-button artist4">ans4</div>
      </div>
    </div>
    `;
    return view;
  }, 
  after_render: async () => {
  }

};

export default ArtQuiz;