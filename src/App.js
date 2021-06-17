import { useEffect } from 'react'
import { GlobalStyle } from './styles/global'
import { connect } from 'react-redux'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { fetchVideos } from './redux-flow/reducers/videos/action-creators'

import 'normalize.css'
import 'milligram'

const App = ({ fetchVideos }) => {

  useEffect(() => {
    fetchVideos()
  })

  return (
    <div style={{ height: "100%" }}>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </div >
  )
}

const mapDispatchToProps = { fetchVideos }

export default connect(null, mapDispatchToProps)(App)
