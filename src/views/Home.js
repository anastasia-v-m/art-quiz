const Home = {
  render: async () => {
    const view = `
    <div class="wrapper">
      <div class="logo">
        <div class="ellipse" id="ellipse1"></div>
        <div class="ellipse" id="ellipse2"></div>
        <span>Art Quiz</span>
      </div>
      <div class="quize-buttons">
        <div class="toQuiz common-button Art"><a href="#categories/art">Art Quiz</a></div>
        <div class="toQuiz common-button Pict"><a href="#categories/pict">Picture Quiz</a></div>
      </div>
    </div>
    `;
    return view;
  },
  after_render: async () => {
  }
};

export default Home;