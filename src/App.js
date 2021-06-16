import { GlobalStyle } from './styles/global'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

import 'normalize.css'
import 'milligram'

const App = () => (
  <div style={{ height: "100%" }}>
    <GlobalStyle />
    <Header />
    <Main />
    <Footer />
  </div >
)

export default App
