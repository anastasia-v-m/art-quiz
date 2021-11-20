import Footer from './Footer.js';

const RenderPage = async (currentPage) => {
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');

  header.innerHTML = await currentPage.headPart.render();
  await currentPage.headPart.after_render();

  main.innerHTML = await currentPage.mainPart.render();
  await currentPage.mainPart.after_render();

  let footerRender = Footer;
  if (!!currentPage.footPart) {
    footerRender = currentPage.footPart;
  }
  footer.innerHTML = await footerRender.render();
  await footerRender.after_render();
};

export default RenderPage;