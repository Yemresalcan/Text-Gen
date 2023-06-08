import styled, { createGlobalStyle } from "styled-components"
import Content from "./Components/Content";
import Header from "./Components/Header";
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    font-size: 	62.5%;
    font-family: 'Inconsolata', monospace;
    background-color:#303030;
    display: grid;
  }
`
const MainContainer = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  height: 100vh;
`
function App() {
  return (
    <>
      <MainContainer>
        <Header />
        <Content />
      </MainContainer>
      <GlobalStyle />
    </>
  );
}

export default App;