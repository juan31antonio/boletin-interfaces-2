import { useState } from 'react';

export default function ShoppingList(){
    
    const [newProducto, setNewProducto] = useState(''); 
    const [productos, setProductos] = useState([]);

    function addProduct(){
        setProductos(
            [...productos,newProducto]
        )
    }

    function deleteProduct(index){
        setProductos(productos.filter((producto, i) => i!=index))
    }

    function modifyProduct(index){
        const nuevoProducto = prompt("Introduce el nuevo producto");
        setProductos(
            productos
                .map((producto, i) => 
                {
                    if(i == index){
                        return(
                            nuevoProducto
                        )
                    }
                    else{
                        return(
                            producto
                        )
                    }
                }
                ) 
        );
    }

    return(
        
        <div>
            <input
                type="text"
                placeholder="Escribe un producto"
                value={newProducto}
                onChange={(e) => setNewProducto(e.target.value)}
            />
            <button onClick={addProduct}>Agregar</button>

            <ul>
                {productos.map((producto, index) => 
                    <li key={index}>
                        {producto}
                        <button onClick={() => modifyProduct(index)}>Modify</button>
                        <button onClick={() => deleteProduct(index)}>Borrar</button>
                    </li>
                )}
            </ul>
        </div>
    )
}