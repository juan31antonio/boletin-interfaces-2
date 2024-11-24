import { useState } from "react";

export default function LiveValidationForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [correoElectronico, setCorreoElectronico] = useState("");
    const [errores, setErrores] = useState({
      username: "",
      password: "",
      correoElectronico: "",
    });

    function validarUsername (valor) {
      return valor.length >= 5 ? "" : "El nombre debe tener al menos 5 caracteres.";
    };
  
    function validarPassword (valor) {
      return valor.length >= 8
        ? ""
        : "La contraseña debe tener al menos 8 caracteres.";
    };
  
    function validarCorreo (valor) {
      return valor.length >= 7
        ? ""
        : "El email debe tener al menos 7 caracteres.";
    };
  
    function validador (campo, valor) {
      let error = "";
      if (campo === "username") {
        setUsername(valor);
        error = validarUsername(valor);
      } 
      else if (campo === "password") {
        setPassword(valor);
        error = validarPassword(valor);
      } 
      else if (campo === "correoElectronico") {
        setCorreoElectronico(valor);
        error = validarCorreo(valor);
      }
      setErrores((prevErrores) => ({
        ...prevErrores,
        [campo]: error,
      }));
    };
  
    return (
      <div>
        <form>
          <div>
            <label htmlFor="username">Nombre de usuario:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => validador("username", e.target.value)}
            />
            {errores.username}
          </div>
          <div>
            <label htmlFor="password">Contraseña:</label>
            <input
              type="text"
              id="password"
              value={password}
              onChange={(e) => validador("password", e.target.value)}
            />
            {errores.password }
          </div>
          <div>
            <label htmlFor="correoElectronico">Correo electrónico:</label>
            <input
              type="text"
              id="correoElectronico"
              value={correoElectronico}
              onChange={(e) => validador("correoElectronico", e.target.value)}
            />
            {errores.correoElectronico}
          </div>
        </form>
      </div>
    );
  }