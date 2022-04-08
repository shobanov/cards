import styled, { createGlobalStyle } from 'styled-components';

const StyledRoot = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  width: 90%;
  height: 100vh;
`;

const GlobalStyles = createGlobalStyle`

body {
  background-color: #1A1A1A;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont,'Inter', 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html, body, #root {
  height: 100%;
}

* { 
  font-family: 'Inter';
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}
`;

interface IProps {
  children: React.ReactNode;
};

export const Root: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <StyledRoot>
        {children}
      </StyledRoot>
    </>
  );
};

// html {
//   overflow: hidden;
// }

// body {
//   background: repeat #000 url("https://raw.githubusercontent.com/lordniken/feed-your-cat/master/src/assets/bg.png");
//   margin: 0;
//   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
//     'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
//     sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   overflow: hidden;
// }

// code {
//   font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
//     monospace;
// }
