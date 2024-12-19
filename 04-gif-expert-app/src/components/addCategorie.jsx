import { useState } from "react";


export const AddCategorie = ({onNewCategory}) =>{
    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target}) =>{
        setInputValue(target.value);
    }
    const onSubmit = (event) =>{
        event.preventDefault();
        const inputClean = inputValue.trim();
        if (inputClean.length <= 1) return;
        onNewCategory(inputClean);
        setInputValue('');
        
    }


    return(
        <form onSubmit={ onSubmit }>
            <input 
            type="text" 
            placeholder="Buscar Gif"
            value={inputValue}
            onChange={ onInputChange }
            />
        </form>

    )
}