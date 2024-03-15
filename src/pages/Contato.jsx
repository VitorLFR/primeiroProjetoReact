import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../components/Contato/contato.css';

export function Contato() {

    //UseState do React para gereniar o estados dos usuários

    const [usuarios, setUsuarios] = useState([]);

    // Hook useEffect para lidar com efeitos colaterais no components

    useEffect(() => {
        fetch("http://localhost:7000/news")
            .then((response) => response.json())
            .then((data) => setUsuarios(data))

            console.log(usuarios)
    }, [])

    return (
        
        <div className="container2">
            <h1>Página de Contato</h1>

            <div>
                <Link to='/'>Voltar para Home </Link>
            </div>

            <section className="contactContainer">
                {usuarios.map((user) => (
                    <div className="contactBox" key={user.id}>
                        <strong>Nome: {user.nome}</strong><br />
                        <strong>Email: {user.email}</strong><br />
                        <strong>Telefone: {user.telefone}</strong><br />
                    </div>
                ))}
            </section>
        </div>
        
    )
}