import { useState } from "react"


export const AddCategory = ({ onNewCategory }) => {
  //cada componente puede tener su propio estado
const [inputValue, setInputValue] = useState(''); 

const onInputChange = ( { target }) => {
  setInputValue( target.value );
}
const onSubmit = ( event ) =>{
  event.preventDefault(); 
  if( inputValue.trim().length <= 1) return;
 

  //setcategories(categories => [inputValue, ...categories]);
  onNewCategory( inputValue.trim() )
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


