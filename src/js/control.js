class Control extends HTMLElement {
  constructor(parentNode, tagName = 'div', className = '', content = '') {
    const elem = document.createElement(tagName);
    elem.className = className;
    elem.textContent = content;
    if (parentNode) {
      parentNode.append(elem);
    }

    this.node = elem;
  }

  destroy() {
    this.node.remove();
  }
}

export default Control;