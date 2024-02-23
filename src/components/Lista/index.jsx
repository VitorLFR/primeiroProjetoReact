import "./style.css";

export const Lista = () => {
    return (
        <main>
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
                    <strong>Nome: </strong> <span>Vítor</span>
                    <strong>Responsável: </strong> <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, officiis.</span>
                    <strong>Valor: </strong> <span>R$ 100.00</span>
                </div>
            </section>
        </main>
        
    )
}