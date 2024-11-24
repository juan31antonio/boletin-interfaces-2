import { useState } from 'react';

export default function LimitedCounter(){
    const [contador, setContador] = useState(0); 
    const [limitador, setLimitador] = useState(0);

    function aumentarContador(){
        if(contador<limitador){
            setContador(contador + 1)
        }
    }

    function resetContador(){
        setContador(0)
    }

    return(
        <div>
            <input
                type="text"
                placeholder="Escribe el limite"
                value={limitador}
                onChange={(e) => setLimitador(e.target.value)}
            />
            <br/>
            {contador}
            <button onClick={aumentarContador}>+1</button>
            <br/>
            <button onClick={resetContador}>Reset</button>
        </div>
    )
}