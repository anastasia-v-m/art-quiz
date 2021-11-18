const categoriesTitles = ['portrait', 'landscape', 'still life', 'graphic', 'antique', 'avant-garde', 'renaissance', 'surrealism', 'kitsch', 'minimalism', 'avangard', 'industrial'];

const prefix = {
  'art': 100,
  'pict': 200,
};

const Data = {
  categoriesQuontity: categoriesTitles.length,
  itemsInCategory: 10,
  artStartIndex: 0,
  picttStartIndex: 120,
  categoriesTitles: categoriesTitles,
  prefix: prefix,
}

export default Data;