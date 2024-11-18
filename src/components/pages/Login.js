import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/api/users/login', { email, password });
            localStorage.setItem('token', response.data.token); // Guardar token en localStorage
            alert('Inicio de sesión exitoso');
            window.location.href = '/'; // Redirigir al inicio después del login
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            alert('Credenciales inválidas');
        }
    };

    return (
        <div className="container mt-5">
            <h1>Iniciar Sesión</h1>
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label>Contraseña</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
            </form>
        </div>
    );
};

export default Login;
