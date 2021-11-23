let Footer = {
  render: async () => {
    let view =  `
      <div>
        <a href="https://rs.school/js/">
          <img src="./assets/rs_school_js.svg" alt="rsschool" height="60">
        </a>
      </div>
      <div class="created">2 0 2 1</div>
      <div>
        <a href="https://github.com/anastasia-v-m">
          <img src="./assets/Github_pic.png" alt="git" height="60">
        </a>
      </div>
    `;
    return view;
  }, 
  after_render: async () => {
  }

};

export default Footer;