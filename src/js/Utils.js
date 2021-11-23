const Utils = {
  parseRequestURL: () => {
    let url = location.hash.slice(1).toLowerCase() || 'home';
    let urlParts = url.split('/');
    let request = {
      url: urlParts[0],
      category: null || urlParts[1],
    }
    return request;
  }, 
  sleep: (ms) => {
      return new Promise(resolve => setTimeout(resolve, ms));
  },
};

export default Utils;