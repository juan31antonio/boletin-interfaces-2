import { useState } from 'react';

export default function GuessTheNumber(){
    
    const [intentos, setIntentos] = useState(0)
    const [adivinar, setAdivinar] = useState(0)
    const [message, setMessage] = useState('')
    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 100) + 1);
    

    function handleSubmit(e){
        e.preventDefault();
    
        if(adivinar < randomNumber){
            setMessage('El numero ha adivinar es mayor')
            setIntentos(intentos + 1)
        }
        else if(adivinar > randomNumber){
            setMessage('El numero ha adivinar es menor')
            setIntentos(intentos + 1)
        }
        else{
            setMessage('Felicidades, acertaste el numero')
            setRandomNumber(Math.floor(Math.random() * 100) + 1);
        }
    };


    return(
        <div>
           <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="number">Intenta adivinar el numero </label>
                    <input
                        type="number"
                        id="numeroSecreto"
                        value={adivinar}
                        onChange={(e) => setAdivinar(e.target.value)}
                    />
                </div>
                <button type="submit">Guess</button>
                
                Numero de intentos:{intentos}<br></br>{message}
            </form>
        </div>
    )
}