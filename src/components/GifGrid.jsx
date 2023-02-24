import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import GitItem from "./GitItem";


export const GifGrid = ({ category }) => {

   const [images, setImages] = useState([]);

   const getImages = async() => {
    const newImages = await getGifs( category ); 
    setImages(newImages); 
   }

   useEffect( () => {
    getImages();
   }, [])
  

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {
        images.map(( image ) => (
          <GitItem 
              key={image.id}
              {...image }
          />
        ))
        }
       
      </div>
      
    
    </>
  )
}
