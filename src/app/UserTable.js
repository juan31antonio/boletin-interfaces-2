import { useState } from 'react';

export default function UserTable(){
   
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [users,setUsers] = useState([])

    function handleSubmit(e){
        e.preventDefault();
        const usuario = {
            nombre: username,
            password: password,
            email: email
        };
        setUsers([...users,
            usuario]
        )
    }     
    
    function deleteUser(indice){
        setUsers(users.filter((usuario, i) => i!=indice))
    }
    
    

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
                <div>
                    <label htmlFor="email">Email: </label>
                    <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button type="submit">Add Table</button>
            </form>
            <table border="1">
                <tbody>
                    {users.map((usuario,index) =>
                        <tr key={index}>
                            <td>{usuario.nombre}</td>
                            <td>{usuario.password}</td>
                            <td>{usuario.email}</td>
                            <td><button onClick={() => deleteUser(index)}>Delete user</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}