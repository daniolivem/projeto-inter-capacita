import { createGlobalStyle } from 'styled-components'; // Importa o createGlobalStyle do styled-components

export const GlobalStyle = createGlobalStyle`
  :root {
    --bg-main: #F9F8FE;

    --primary-color: #C92071;
    --secondary-color: #B5B6F2;
    --tertiary-color: #991956;

    --error-color: #EE4266;
    --success-color: #52CA76;
    --warning-color: #F6AA1C;
    --card-destaque-color: #D8E3F2;
    --card-tag-color: #E7FF86;

    /* Grayscales (Tons de cinza) */
    --dark-gray: #1f1f1f;
    --dark-gray-2: #474747;
    --dark-gray-3: #666666;
    --light-gray: #8f8f8f;
    --light-gray-2: #CCCCCC;
    --light-gray-3: #F5F5F5;
    --light-gray-4: #F7F7FC;
    --white: #FFFFFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body {
    background-color: var(--bg-main);
    font-size: 1rem;
  }

  html {
    min-height: 100%;
  }

  input, textarea, button, a, ul {
    text-decoration: none;
    list-style: none;
    outline: none;
    border: none;
  }
`;
