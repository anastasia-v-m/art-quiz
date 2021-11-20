class Control extends HTMLElement {
  constructor(parentNode, tagName = 'div', className = '', content = '') {
    // const elem = document.createElement(tagName);
    // elem.className = className;
    // elem.textContent = content;
    // if (parentNode) {
    //   parentNode.append(elem);
    //   //this.node = elem;
    // }
    // this.node = elem; 
    super();
    this.parentNode = parentNode;
    this.tagName = tagName;  
    this.node = null; 
  }

  async create() {
    if (this.parentNode) {
      const elem = document.createElement(this.tagName);
      this.parentNode.append(elem);
      this.node = elem;
    }
  }

  destroy() {
    this.node.remove();
  }
}

window.customElements.define('my-control', Control);

export default Control;