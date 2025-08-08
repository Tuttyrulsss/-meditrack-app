import React, { useState } from 'react';
import './Login.css';
import logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('https://your-backend.com/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ login, password }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Ошибка при входе');
            }

            const data = await response.json();
            // Сохраняем токен или другую информацию
            localStorage.setItem('token', data.token);

            // Редирект на главную или другую страницу
            navigate('/dashboard');

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="logo-section">
                    <img src={logo} alt="MediTrack Logo" className="logo-img" />
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
                        type={showPassword ? 'text' : 'password'}
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
                        {showPassword ? 'Скрыть' : 'Показать'}
                    </button>

                    <button type="submit" className="login-button" disabled={loading}>
                        {loading ? 'Вход...' : 'Войти'}
                    </button>

                    {error && <div className="error-message">{error}</div>}

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
