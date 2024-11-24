import { useState } from 'react';

export default function AverageCalculator(){
    
    const [calificaciones, setCalificaciones] = useState([]); 
    const [promedio, setPromedio] = useState(0);
    const [calificacion, setCalificacion] = useState(0);

    function deleteCalificacions(){
        setCalificaciones([])
    }

    function addCalificacion(){
        setCalificaciones([...calificaciones,calificacion])
        let media = calificacion
        calificaciones.forEach(i => media+=i)
        setPromedio(media/(calificaciones.length+1))
        setCalificacion('');
        
        console.log(promedio)
    }

    return(
        <div>
            <input
                type="text"
                placeholder="Escribe una calificacion"
                value={calificacion}
                onChange={(e) => setCalificacion(+e.target.value)}
                
            />
            <button onClick={addCalificacion}>Add</button>

            <ul>
                {calificaciones.map((calificacion, index) => 
                    <li key={index}>
                        {calificacion}
                      
                    </li>
                )}
            </ul>
            <button onClick={deleteCalificacions}>Borrar calificaciones</button>
            El promedio es:{promedio}
            
        </div>
    )
}