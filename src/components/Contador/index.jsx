import { useState } from "react";
import "./style.css";

export function Contador(){

    /* Usando hooks */
    const [contador, setContador] = useState(0);


    const clickIncrement = () => {
        setContador(contador + 1);
    }
    const clickDecrement = () => {
        setContador(contador - 1);
    }

    return (
        <div className="contador">

            <h1>Contador:</h1>
            <section className="button">
                <button onClick={clickIncrement}>Increment</button>
                <button onClick={clickDecrement}>Decrement</button>
            </section>
            
            <section className="result">
                <strong>{contador}</strong>
            </section>

        </div>
    )
}
