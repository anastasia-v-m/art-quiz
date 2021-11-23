function getPage() {
  return {
    meth:  (n, arr) => {
      const view =  n + arr; 

      return view;
    }, 
    after_render:  () => {
    }
  };
};

const Res = getPage();

export default Res;