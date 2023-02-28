import { useState } from "react";
import PropTypes from 'prop-types';


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
  setInputValue('');
  onNewCategory( inputValue.trim() )

}

  return (
    <form onSubmit={onSubmit} aria-label="form">
      <input
        type="text"
        placeholder="Buscar gits"
        value={ inputValue }
        onChange={ onInputChange }
      />
    </form>
  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
}
