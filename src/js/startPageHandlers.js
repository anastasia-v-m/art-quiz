import SetEventListeners from '../views/SetEventListeners.js';
import RenderPage from '../views/RenderPage.js';
import Categories from '../views/Categories.js';

const renderPage = RenderPage;
const renderCatPageForArt = async () => {
  await renderPage(Categories(0));
  document.body.classList.remove('start-page');
  //await setEventListeners(Categories(0));
  setEventListeners(Categories(0));
}
const renderCatPageForPictures = async () => {
  await renderPage(Categories(1));
  document.body.classList.remove('start-page');
  //await setEventListeners(Categories(1));
  console.log('4')
  setEventListeners(Categories(1));
}

const setEventListeners = SetEventListeners;

export {
  renderCatPageForArt,
  renderCatPageForPictures,
}