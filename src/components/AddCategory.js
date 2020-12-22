import React, { useState } from 'react';
import PropTypes from "prop-types";

const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) =>{
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) =>{
        e.preventDefault() //Para prevenir el comportamiento de una etiqueta en este caso para que el navegador no se actualice al preasionar el enter
        if ( inputValue.trim().length >2 ){
            setCategories( cats => [...cats, inputValue]);
            setInputValue('');
        }
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text" 
            value={ inputValue }
            onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory
