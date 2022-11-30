import { useState, useEffect } from 'react'

export default function useLocalStorage(key, initialValue) {

  //console.log("DENTRO DEL HOOK");  
  const [value , setValue] = useState(()=>{
        //console.log("DENTRO DEL USE-STATE (UNA SOLA VEZ)");
        return JSON.parse(localStorage.getItem(key)) || initialValue;
  })

  useEffect(() =>{
        //console.log("HUBO UN CAMBIO DE DEPENDENCIA => SETEO NUEVO VALOR");
        localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  //console.log("FIN");
  return [value, setValue]
}



//IMPORTANT!: Al pasarle al useState una fc, sólo se ejecuta una vez.
//Para casos de consultar el LocalStorage --lo cual es lento-- conviene
//hacer esto. De esta manera NO SE VA A EJECUTAR cada vez que nuestro 
//componente se vuelva renderizar.  