import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

* {
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
}

$robotFont: 'Roboto', sans-serif;

%flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

%flex-spacebetween {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

%flex-start {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

%flex-jutify-center {
  display: flex;
  justify-content: center;
}

$lightgray: 1px solid #ddd;

`;

export default GlobalStyle;
