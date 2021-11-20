import Data from '../js/Data.js';
import {renderArtQuizPage, renderPictQuizPage} from '../js/catsPageHandlers.js';

const CategoriesForType = (quizType) => {
  const delay = quizType * Data.categoriesQuontity;
  let categoriesGrid = '';
  const quizTypeName = Data.quizTypeNames[quizType];

  const testus = function() {
    console.log('152', this.id);
  }

  let renderPageFunction;
  if (quizType === 0) {
    renderPageFunction = renderArtQuizPage;
  } else if (quizType === 0) {
    renderPageFunction = renderPictQuizPage;
  }
  const eventsArr = [
    {
      selector: `.${quizTypeName}-cat`,
      eventName: 'click',
      toDo: renderPageFunction,
    }
  ];

  for (let i = 0; i < Data.categoriesQuontity; i += 1) {
    categoriesGrid += `
      <div class="category ${quizTypeName}-cat" id="${i + delay}">
        <div class="cat-info">
          <div class="cat-title">
            ${Data.categoriesTitles[i]}
          </div>
          <div class="cat-score">
            <span class="user-score for-${Data.categoriesTitles[i]}"></span><span class="cat-${Data.categoriesTitles[i]}-total-score"></span>
          </div>
        </div>
        <img src="../src/image-data-master/img/${i + delay}.jpg" alt="category" >
      </div>
    `;
  }

  const Categories = {
    headPart: {
      render: async () => {
        const view = `
          <div class="wrapper">
            <div class="logo">
              <div class="ellipse" id="ellipse1"></div>
              <div class="ellipse" id="ellipse2"></div>
              <span>Art Quiz</span>
            </div>
            <div class="settings-button"></div>
          </div>
        `;
        return view;
      },
      after_render: async () => {
      }
    },
    mainPart: {
      render: async () => {
        const view = `
          <h3>Categories</h3>
          <div class="grid-categories">        
            ${categoriesGrid}
          </div>
        `;
        return view;
      },
      after_render: async () => {
      }
    },
    getEventListeners: () => {
      return eventsArr;
    },
  };

  return Categories;
};

export default CategoriesForType;