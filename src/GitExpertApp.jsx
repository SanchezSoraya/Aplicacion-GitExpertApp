import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GitExpertApp = () => {
  
  //No ponere condicionalmente los hooks 
  const [categories, setcategories] = useState([ 'One Punch' ]);

 const onAddCategory = ( newCategory ) =>{
  if( categories.includes(newCategory) ) return;
  //console.log(newCategory)
  //categories.push(newCategory);
  setcategories([ newCategory , ...categories]);
  //setcategories( cat => [...cat, 'valorant']);
 }


  //console.log(categories);
  return(
    <>
      {/* titulo */}
      <h1>GitExpertApp</h1>

      {/* Input */}
      <AddCategory 
         //setcategories= { setcategories }
         onNewCategory = { (value) => onAddCategory(value)}
         
      />


      {/* Listado de Git */}
     
        { 
        categories.map( ( category) =>( 
          
           <GifGrid 
               key={category} 
               category= {category}/>
          ))
        } 
        {/*<li>ABC</li>*/}
    

    </>
  )
}