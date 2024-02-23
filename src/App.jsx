import './App.css'
import { Contador } from './components/Contador'
import { Header } from './components/Header'

function App() {

  return (
    <>
  <Header title="Projeto React" subTitulo="React" />

      <main className="container">
        <h1>Conteúdo do projeto React</h1>

        <div>
        <a href="#">Vai para Contato</a>
        </div>
        
        <Contador />
      </main>
    </>
  )
}

export default App
