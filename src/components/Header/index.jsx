import "./style.css";

export function Header(props){

    return (
        <header>

            <div className="container">
                <h1>{props.title}</h1>
                <h2>{props.subTitulo}</h2>
            </div>
            
        </header>
    )
}
