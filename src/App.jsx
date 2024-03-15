import './App.css'
import Router from './Router'
import { Footer } from './components/Footer'
import { Header } from './components/Header'


function App() {

  return (
    <>
      <Header title="Projeto React" subTitulo="React" />

      <Router />
      <Footer />
    </>
  )
}

export default App
