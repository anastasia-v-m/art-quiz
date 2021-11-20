import RenderPage from '../views/RenderPage.js';
import ArtQuiz from '../views/ArtQuiz.js';
import PictQuiz from '../views/PictQuiz.js';

const renderPage = RenderPage;
const renderArtQuizPage = async () => {
  await renderPage(ArtQuiz);
}
const renderPictQuizPage = async () => {
  await renderPage(PictQuiz);
}

export {
  renderArtQuizPage,
  renderPictQuizPage,
}