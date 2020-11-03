module.exports = {
    html: () => '<div id="skiplinks"><a href="mainContent">Skip to Main Content</a></div>',
    css: () => `
      #skiplinks a {
          position: absolute;
          left: -10000px;
          top: auto;
          width: 1px;
          height: 1px;
          overflow: hidden;
      }
      #skiplinks :focus {
          position: static;
          width: auto;
          height: auto;
          outline: 1px dashed #000;
      }
      ',
      `,
    default: () => {
        // tbd
    }
}