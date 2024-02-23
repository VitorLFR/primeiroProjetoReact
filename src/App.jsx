import './App.css'
import { Contador } from './components/Contador'
import { Header } from './components/Header'
import { Lista } from './components/Lista'

function App() {

  return (
    <>
  <Header title="Projeto React" subTitulo="React" />

      <main className="container1">
        <h1>Conteúdo do projeto React</h1>

        <div className='contact'>
          <a href="#">Vai para Contato</a>
        </div>
        
        <Contador />
        <Lista />
      </main>
    </>
  )
}

export default App
