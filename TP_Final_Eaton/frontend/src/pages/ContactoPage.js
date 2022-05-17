import React, { useState} from "react";
import axios from "axios";
import '../styles/components/pages/ContactoPage.css'

const ContactoPage = (props) => {
    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSendings] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value //forma dinámica
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSendings(false)
        const response =await
        axios.post('http://localhost:3000/api/contacto', formData);
        setSendings(false);
        setMsg(response.data.message);
        if(response.data.error === false){
            setFormData(initialForm)
        }
    }

    return (

        <body className="contacto_img">
            <main>
                <div class="columna left">
                    <h2>Contacto directo</h2>
                    <form className="formulario" onSubmit={handleSubmit}>
                        <p>
                            <label for="nombre">Nombre: </label>
                            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange}/>
                        </p>
                        <p>
                            <label for="email">Email: </label>
                            <input type="text" name="email" value={formData.email} onChange={handleChange}/>
                        </p>
                        <p>
                            <label for="teléfono">Teléfono: </label>
                            <input type="text" name="telefono" value={formData.telefono} onChange={handleChange}/>
                        </p>
                        <p>
                            <label for="comentario">Comentario: </label>
                            <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                        </p>
                        <p class="acciones"><input type="submit" value="Enviar" /></p>
                    </form>
                    {sending ? <p>Enviando...</p> : null}
                        {msg ? <p>{msg}</p> : null}
                </div>
                <div class="columna right">
                    <h2>Otros medios de comunicación</h2>
                    <p>También se pueden comunicar a través de:</p>
                    <ul>
                        <li>Teléfono: (+54911) 4477-3349</li>
                        <li>Email: contacto@medicinetech.com.ar</li>
                    </ul>
                </div>
            </main>
        </body >
    );
}

export default ContactoPage;