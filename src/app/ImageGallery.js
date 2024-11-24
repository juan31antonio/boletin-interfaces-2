import { useState } from 'react';


export default function ImageGallery({imagenes}){
    
    const [indice, setIndice] = useState(0);

    function siguienteImagen() {
        if(indice < imagenes.length-1){
            setIndice(indice + 1)
        }
      }
    
      function imagenAnterior() {
        if(indice > 0){
            setIndice(indice - 1)
        }
      }
    
      
      let imagenActual = imagenes[indice];
      
    return(
        <div>
            <div>
                <img src={imagenActual.src} alt={imagenActual.alt} />  
                <br></br>
                <button onClick={siguienteImagen}>Siguiente</button>  
                <button onClick={imagenAnterior}>Atras</button>
            </div>
        </div>
    )
}
