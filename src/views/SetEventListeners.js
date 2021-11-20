const SetEventListeners = async (currentPage) => {
  if (!!currentPage.getEventListeners) {
    const listenerList = await currentPage.getEventListeners();
    listenerList.forEach(element => {
      const elems = document.querySelectorAll(element.selector);
      if (elems.length > 0) {
        for (let i = 0; i < elems.length; i += 1) {
          elems[i].addEventListener(element.eventName, element.toDo);
        }
      }
    });
  }
};

export default SetEventListeners;