import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GitExpertApp = () => {
  
  //No ponere condicionalmente los hooks 
  const [categories, setcategories] = useState([ 'One Punch', 'Dragon Ball' ]);

 const onAddCategory = () =>{
  setcategories(['Valorant', ...categories]);
  //setcategories( cat => [...cat, 'valorant']);
 }


  console.log(categories);
  return(
    <>
      {/* titulo */}
      <h1>GitExpertApp</h1>

      {/* Input */}
      <AddCategory setcategories= { setcategories }/>

      {/* Listado de Git */}
      <ol>
        { categories.map( category =>{
          return <li key={ category }>{ category }</li>
        } ) }
        {/*<li>ABC</li>*/}
      </ol>

      {/*Git Item */}
    </>
  )
}