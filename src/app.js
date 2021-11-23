import Home from './views/Home.js';
import Footer from './views/Footer.js'; 
// import ArtQuiz from './views/ArtQuiz.js'; //console.log(ArtQuiz)
// import PictQuiz from './views/PictQuiz.js';
import Categories from './views/Categories.js';//console.log(Categories.render())
import Utils from './js/Utils.js';


const routes = {
  'home': Home,
  // 'artquiz': ArtQuiz,
  // 'pictquiz': PictQuiz,
  'categories': Categories,
};

const router = async () => {
  //console.log('***')
  const header = document.querySelector('header');
  const content = document.querySelector('main');
  const footer = document.querySelector('footer');
  
  // Render the Header and footer of the page
  //header.innerHTML = await Navbar.render();
  //await Navbar.after_render();
  footer.innerHTML = await Footer.render();
  await Footer.after_render();


  // Get the parsed URl from the addressbar
  let parsedURL = Utils.parseRequestURL();

  // Parse the URL and if it has an id part, change it with the string ":id"
  //let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')
  
  // Get the page from our hash of supported routes.
  // If the parsed URL is not in our list of supported routes, select the 404 page instead
  // console.log(parsedURL.url)
  let page = routes[parsedURL.url]; // ? routes[parsedURL] : Error404
  //console.log(content)
  let view = await page.render();
  //console.log(view)
  content.innerHTML = view;
  await page.after_render();
}

// const router = async () => {
//   console.log('***');
//   console.log(location.hash);
// }


window.addEventListener('hashchange', router);

window.addEventListener('load', router);