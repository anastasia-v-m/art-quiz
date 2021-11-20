async function getAllImages() {
  const imagesJson = './image-data-master/images0.json';
  const res = await fetch(imagesJson);
  const data = await res.json();
  return data;
}

const allImages = getAllImages();
const initData = {
  allImages,
};

export default initData;
