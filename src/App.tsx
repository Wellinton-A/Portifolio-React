import About from './containers/About'
import Profile from './containers/Profile'
import Projects from './containers/Projects'
import GlobalStyle, { Container } from './styles'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Profile />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </>
  )
}

export default App
