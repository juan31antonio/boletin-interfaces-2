import { useState } from 'react';

export default function MultiCounter(){
    const [contadores, setContadores] = useState([]); 

    function addCounter(){
        setContadores([...contadores,0])
    }

    function aumentarCount(index) {
        const nuevosContadores = [...contadores];
        nuevosContadores[index] += 1; 
        setContadores(nuevosContadores);
      }
    
      function reducirCount(index) {
        const nuevosContadores = [...contadores];
        nuevosContadores[index] -= 1;  
        setContadores(nuevosContadores);
      }
    
      function resetCount(index) {
        const nuevosContadores = [...contadores];
        nuevosContadores[index] = 0;  
        setContadores(nuevosContadores);
      }
    

    return(
        <div>
            <button onClick={addCounter}>Agregar</button>

            <ul>
                {contadores.map((contador, index) => 
                    <li key={index}>
                        {contador}
                        <button onClick={() => aumentarCount(index)}>+1</button>
                        <button onClick={() => reducirCount(index)}>-1</button>
                        <button onClick={() => resetCount(index)}>Reset</button> 
                    </li>
                )}
            </ul>
        </div>
    )
}