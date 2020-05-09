import { createGlobalStyle } from 'styled-components';

require('../THEME/main/lib/@fortawesome/fontawesome-free/css/all.min.css');
require('../THEME/main/lib/ionicons/css/ionicons.min.css');
require('../THEME/main/assets/css/dashforge.min.css');
require('../THEME/main/assets/css/dashforge.profile.css');

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fff;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
