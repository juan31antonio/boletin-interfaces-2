import { useState } from 'react';

const usuarios = [
    { username: 'usuario1', password: 'contraseña1' },
    { username: 'usuario2', password: 'contraseña2' },
    { username: 'usuario3', password: 'contraseña3' },
  ];

export default function LoginForm(){
    
   
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    
    function handleSubmit(e){
        e.preventDefault();
    
        let user = null;

        usuarios.forEach(usuario => 
            {
                if(usuario.username == username && usuario.password == password){
                    user = usuario
                }
            }
        )
        
    
        if (user) {
            setMessage('Credenciales correctas');
        } 
        else {
            setMessage('Credenciales incorrectas');
        }
    };
    

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Nombre de usuario: </label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Contraseña: </label>
                    <input
                        type="text"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Iniciar sesión</button>
            </form>
            <p>{message}</p>
        </div>
    )
}
