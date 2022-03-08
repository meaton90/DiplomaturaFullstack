import LoremIpsum from "react-lorem-ipsum";

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

export {NombrePuesto, Imagenes, Bienvenidos};