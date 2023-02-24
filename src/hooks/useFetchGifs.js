import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

//Un hooks no es mas que una funcion que regresa algo 
export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsloading] = useState(true);

   const getImages = async() => {
   const newImages = await getGifs( category ); 
     setImages(newImages); 
     setIsloading(false);
    }

   useEffect( () => {
    getImages();
   }, [])
  return {
    images,
    isLoading
  }
}
