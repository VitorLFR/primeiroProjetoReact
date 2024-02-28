import "./style.css";

const lista = [
    {
        nome: "Projeto novo",
        responsavel: "Fernando Carlos",
        valor: 1200
    },
    {
        nome: "Projeto do Mar",
        responsavel: "Fonte Seca",
        valor: 4000
    },
    {
        nome: "Vítor",
        responsavel: "Paulo",
        valor: 7000
    },
    {
        nome: "Fernanda",
        responsavel: "Pedro",
        valor: 5000
    }
]
export const Lista = () => {
    return (
        <main className="listMain">
            <section className="List">
                <h1>Lista</h1>
                <img src="http://lorempixel.com.br/300/250/?1" alt="imagem" />

                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, molestias!
                </p>
            </section>

            <section className="nameListContainer">

                <h1>Lista de nomes</h1>

                <div className="nameList">

                    {lista.map((item, index) => {
                        return(
                        <div key={index} className="listagem">
                        <strong>Nome: </strong> <span>{item.nome}</span>
                        <strong>Responsável: </strong> <span>{item.responsavel}.</span>
                        <strong>Valor: </strong> <span>{item.valor}</span>
                        </div>
                        )
                        })}
                    
                </div>
            </section>
        </main>
        
    )
}