import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DetalleProducto = () => {
    const { id } = useParams(); // Obtiene el ID del producto de la URL
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        const fetchProducto = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/productos/${id}`);
                setProducto(response.data);
            } catch (error) {
                console.error('Error al obtener el producto:', error);
            }
        };

        fetchProducto();
    }, [id]);

    if (!producto) return <div>Cargando...</div>;

    return (
        <div>
            <h2>Detalle del Producto</h2>
            <h3>{producto.titulo}</h3>
            <p>Precio: ${producto.precio}</p>
            <p>Descripción: {producto.descripcion}</p>
        </div>
    );
};

export default DetalleProducto;
