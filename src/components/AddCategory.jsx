import { useState } from "react"


export const AddCategory = () => {
  //cada componente puede tener su propio estado
const [inputValue, setInputValue] = useState('One Puch'); 

const onInputChange = ( { target }) => {
  setInputValue( target.value );
}
const onSubmit = ( event ) =>{
  event.preventDefault();
  console.log(inputValue)
}

  return (
    <form onSubmit={ (event) => onSubmit(event)}>
      <input
        type="text"
        placeholder="Buscar gits"
        value={ inputValue }
        onChange={ onInputChange }
      />
    </form>
  )
}
