import React, { useState } from 'react';
import './Login.css';
import logo from '../assets/logo.png'; // Убедись, что логотип действительно в этом пути
import { Link } from 'react-router-dom';


const Login = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Login:', login, 'Password:', password);
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="logo-section">
                    <img src={logo} alt="MediTrack Logo" className="logo-img"/>
                    <div className="logo-text">
                        <h1 className="main-title">MediTrack</h1>
                        <p className="subtitle"><strong>жизнь без границ</strong></p>
                    </div>
                </div>

                <h2 className="form-title">Войти</h2>

                <form className="login-form" onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder="Логин"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                        required
                    />
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="toggle-password"
                    >
                        {showPassword ? "Скрыть" : "Показать"}
                    </button>
                    
                    <button type="submit" className="login-button">Войти</button>

                    <div className="form-links">
                        <Link to="/forgot-password">Забыли пароль?</Link>
                        <Link to="/register">Зарегистрироваться</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
