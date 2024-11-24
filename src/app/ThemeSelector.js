import { useState } from 'react';

export default function ThemeSelector() {
    
    const [indice, setIndice] = useState(0);
    const colores = ['brown','blue','red']

    function siguienteTema() {
        if(indice < colores.length-1){
            setIndice(indice + 1)
        }
      }
    
      function temaAnterior() {
        if(indice > 0){
            setIndice(indice - 1)
        }
      }
    
      
      
      
    return(
        <div style={{backgroundColor:colores[indice]}}>
            <button onClick={siguienteTema}>Siguiente</button>  
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <button onClick={temaAnterior}>Atras</button>
        </div>
    )
  }