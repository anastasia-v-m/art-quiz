import {renderCatPageForArt, renderCatPageForPictures} from '../js/startPageHandlers.js';

const StartPage = {
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
      const view = `
        <div class="wrapper">
          <div class="logo">
            <div class="ellipse" id="ellipse1"></div>
            <div class="ellipse" id="ellipse2"></div>
            <span>Art Quiz</span>
          </div>
          <div class="quizes">
            <div class="toQuiz common-button Art">Art Quiz</div>
            <div class="toQuiz common-button Pict">Picture Quiz</div>
          </div>
        </div>
      `;
      return view;
    },
    after_render: async () => {
    }
  },
  getEventListeners: async () => {
    return [
      {
        selector: '.Art',
        eventName: 'click',
        toDo: renderCatPageForArt,
      },
      {
        selector: '.Pict',
        eventName: 'click',
        toDo: renderCatPageForPictures,
      }
    ];
  },
};

export default StartPage;