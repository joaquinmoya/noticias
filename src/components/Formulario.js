import React from 'react'
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';
import PropTypes from 'prop-types';


const Formulario = ({guardarCategoria}) =>{

    const opciones = [
        {value:'general', label:'General'},
        {value:'business', label:'Negocios'},
        {value:'entertainment', label:'Entretenimiento'},
        {value:'health', label:'Salud'},
        {value:'science', label:'Ciencia'},
        {value:'sports', label:'Deporte'},
        {value:'technology', label:'Tecnologia'},
    ]

    //utilizar custom hook
    const[categoria, SelectNoticias] = useSelect('general',opciones);
    //submit al form, pasar categoria a app.js
    const buscarNoticias = e => {
        e.preventDefault();
        guardarCategoria(categoria);
    }

    return(
        <div className={`${styles.buscador} row `}>
            <div className='col s12 m8 offset-m2'>
                <form
                    onSubmit={buscarNoticias}
                >
                    <h2 className={styles.heading}>Encuentre noticias por categoria</h2>
                    <SelectNoticias/>
                    <div className='input-field col s12'>
                        <input 
                        type="submit"
                        className={`btn-large amber darken-2 ${styles.btn_block}`}
                        value='Buscar'
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}
Formulario.propTypes= {
    guardarCategoria: PropTypes.func.isRequired }

export default Formulario;