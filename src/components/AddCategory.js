import React, { useState } from 'react';
import PropType from "prop-types";

const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ( e ) =>{
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault(); // Importante esto es para prevenir que al momento de pulsar enter en el formulario se refresque la pagina

        //La linea de abajo es una validacion para los espacios en Blanco
        if ( inputValue.trim().length > 2) {
            setCategories( cats => [inputValue, ...cats] ); // En esta linea lo que hacemos es la modificacion del estado de la variable del componente padre
            setInputValue(''); //Para que al momento de agregar un valor la misma se coloque como un string vacio 
        }

    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue } 
                onChange={ handleInputChange }
            />
        </form>
    )
}
// La linea de abajo lo que hace es colocar el proptype para que el atributo de setCategories sea pasado a dicho componente para que este mismo pueda funcionar
AddCategory.propType = {
    setCategories: PropType.isRequired
}

export default AddCategory
