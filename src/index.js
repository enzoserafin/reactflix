import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import configureStore from './redux-flow/configure-store'
import { db } from './config/firebase'

const store = configureStore()

const videos = db.ref('videos')

//---
//READ DADOS DO FIREBASE
//---
// videos.on('value', (snapshot) => {
//   console.log('snapshot:', snapshot.val())
// }, (error) => {
//   console.log('error:', error)
// })

videos.once('value').then((snapshot) => {
  console.log('snapshot:', snapshot.val())
})

//----
//CREATE DADOS DO FIREBASEß
//----

//CRIA ITEM COM ID ALEATÓRIO
const videosJs = videos.push()

//SOBREESCREVE OS DADOS
videosJs.set({
  id: 'epII7UIu2vU',
  title: 'React - Migrando projeto CRA para Next.js - Code/drops #79'
})


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)