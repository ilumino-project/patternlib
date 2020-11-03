module.exports = {
    html: () => '<div id="skiplinks"><a href="mainContent">Skip to Main Content</a></div><nav id="mainMenu">Main Menu Here</nav><div id="mainContent"><h1>Main Content Area</h1><p>Not a sunrise but a galaxyrise galaxies how far away adipisci velit citizens of distant epochs decipherment. Ship of the imagination are creatures of the cosmos Sea of Tranquility vel illum qui dolorem eum fugiat quo voluptas nulla pariatur vel illum qui dolorem eum fugiat quo voluptas nulla pariatur sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. A still more glorious dawn awaits Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium dream of the mind\'s eye encyclopaedia galactica Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium two ghostly white figures in coveralls and helmets are softly dancing and billions upon billions upon billions upon billions upon billions upon billions upon billions.</p></div>',
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
      `
}