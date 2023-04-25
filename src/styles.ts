import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
  }
`

export default GlobalStyle

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 128px auto;
  gap: 56px;
  padding-top: 80px;

  img {
    max-width: 100%;
  }
`
