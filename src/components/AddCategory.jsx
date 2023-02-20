import { useState } from "react"


export const AddCategory = ({ setcategories }) => {
  //cada componente puede tener su propio estado
const [inputValue, setInputValue] = useState(''); 

const onInputChange = ( { target }) => {
  setInputValue( target.value );
}
const onSubmit = ( event ) =>{
  if( inputValue.trim().length <= 1) return;
  event.preventDefault();

  setcategories(categories => [inputValue, ...categories]);
  setInputValue(' ');
}

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gits"
        value={ inputValue }
        onChange={ onInputChange }
      />
    </form>
  )
}
