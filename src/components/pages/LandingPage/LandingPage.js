// src/components/pages/LandingPage/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="container mt-5">
            <h1>Bienvenido/a</h1>
            <p>Inicia sesión para acceder a tu clase o explora las publicaciones disponibles.</p>
            <div>
                <Link to="/login" className="btn btn-primary m-2">Iniciar Sesión</Link>
                <Link to="/visualizacion" className="btn btn-secondary m-2">Explorar como Visitante</Link>
            </div>
        </div>
    );
};

export default LandingPage;
