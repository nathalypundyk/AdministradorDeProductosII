import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Inicio from './componentes/Inicio'; // Cambia el nombre del componente aquí
import DetalleProducto from './componentes/DetalleProducto';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/productos/:id" element={<DetalleProducto />} />
            </Routes>
        </div>
    );
}

export default App;
