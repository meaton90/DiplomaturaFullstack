import LoremIpsum from "react-lorem-ipsum";

var cantidad =0;

const NombrePuesto = ({nombre, puesto}) =>{
    return (
    <div>
        <h5>{nombre}</h5>
        <h6>{puesto}</h6>
        <LoremIpsum p={1}/>
    </div>
    )
};


const Imagenes = ({imagenes,nomimg}) =>{
    return (
        <img src={imagenes} width={75} alt={nomimg} />
    )
};

const Bienvenidos = props => {
    return(
        <div>
            <h2>Bienvenidos</h2>
            <LoremIpsum p={2}/>
        </div>
    )

};

const ContadorClick = props => {
    // defino la funcion que va a manjear el evento del click
    const handleClick = e => {
        // valido que esten pasando el "manejador" que necesito
        if (props.eventoClick) {
            // si lo pasaron lo ejecuto
            props.eventoClick(cantidad++);
        }
    }

    return (
        <p>
            <button onClick={handleClick}>Clickeame!</button>
        </p>
    );
}

export {NombrePuesto, Imagenes, Bienvenidos, ContadorClick};