import Data from '../js/Data.js';
import Utils from '../js/Utils.js';

let categoriesGrid = '';

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

const Categories = {
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
};

export default Categories;