import StartPage from './views/StartPage.js';

import SetEventListeners from './views/SetEventListeners.js';
import RenderPage from './views/RenderPage.js';

const renderStartPage = async () => {
  await renderPage(StartPage);
  setEventListeners(StartPage);
  document.body.classList.add('start-page');
}

const renderPage = RenderPage;
const setEventListeners = SetEventListeners;

// const setEventListeners = async (currentPage) => {
//   if (!!currentPage.getEventListeners) {
//     const listenerList = await currentPage.getEventListeners();
//     listenerList.forEach(element => {
//       const elems = document.querySelectorAll(element.selector);
//       for (let i = 0; i < listenerList.length - 1; i += 1) {
//         elems[i].addEventListener(element.eventName, element.toDo);    
//       }
//     });
//   }
// };

window.addEventListener('load', renderStartPage);
