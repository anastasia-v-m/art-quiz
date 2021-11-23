import Data from '../js/Data.js';

function getAnswersHTML(arr) {
  let answersHTML = '';

  for (let i = 0; i < Data.answerQuontity; i += 1) {
    answersHTML += `
      <div class="common-button answer-button artist${i}">${arr[i]}</div>
    `;
  }

  return answersHTML;
}

async function getPage() {
  return {
    headPart: {
      render: async () => {
        const view = `
          <div class="settings-button"></div>
        `;
        return view;
      },
      after_render: async () => {
      }
    },
    mainPart: {
      render: async () => {
        const pictName = 'kjjkl'
        const view =  `
        <div class="question">
          <div class="question-sentence">Кто автор картины ${pictName}?</div>
          <div class="question-pict">
            <img class="big-image" src="../src/image-data-master/img/${152}.jpg" alt="pict">
          </div>
        </div>
        <div class="answers">
          <div class="answers-wrapper">
            ${getAnswersHTML(['','','',''])}
          </div>
        </div>
        `; 

        return view;
      }, 
      after_render: async () => {
      }
    },
  };
};

const ArtQuiz = await getPage();
//console.log(ArtQuiz.render())
export default ArtQuiz;


//оставляю базовый рендеринг
//а потом делаю текстконтент уже готовй страницы