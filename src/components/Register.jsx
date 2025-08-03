import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InputMask from 'react-input-mask';

import './Register.css';

const Register = () => {
    const [formData, setFormData] = useState({
        login: '',
        password: '',
        confirmPassword: '',
        iin: '',
        lastName: '',
        firstName: '',
        middleName: '',
        birthDate: '',
        gender: '',
        region: '',
        address: '',
        phone: '',
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [passwordMismatch, setPasswordMismatch] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "iin") {
            const numericValue = value.replace(/\D/g, "");
            if (numericValue.length <= 12) {
                setFormData((prev) => ({ ...prev, [name]: numericValue }));
            }
        } else {
            setFormData((prev) => {
                const updated = { ...prev, [name]: value };

                // Проверка совпадения паролей
                if (name === "password" || name === "confirmPassword") {
                    setPasswordMismatch(updated.password !== updated.confirmPassword);
                }

                return updated;
            });
        }
    };

    const handleRegister = (e) => {
        e.preventDefault();
        if (passwordMismatch) {
            alert("Пароли не совпадают");
            return;
        }
        console.log('Регистрация:', formData);
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="form-header">
                    <span className="register-title">Регистрация</span>
                    <Link to="/login" className="left-link">у меня уже есть аккаунт</Link>
                </div>

                <form className="login-form" onSubmit={handleRegister}>
                    <div className="form-group">
                        <label>*Логин</label>
                        <input
                            type="text"
                            name="login"
                            value={formData.login}
                            onChange={handleChange}
                            required
                        />
                        <small className="login-hint">
                            Логином может быть ваш ИИН, электронная почта, номер телефона, фамилия имя на латинице
                        </small>
                    </div>

                    {/* Пароль */}
                    <div className="form-group" style={{ position: 'relative' }}>
                        <label>*Пароль</label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            style={{ paddingRight: '40px' }}
                        />
                        <button
                            type="button"
                            onMouseDown={() => setShowPassword(true)}
                            onMouseUp={() => setShowPassword(false)}
                            onMouseLeave={() => setShowPassword(false)}
                            style={{
                                position: 'absolute',
                                top: '65%',
                                right: '10px',
                                transform: 'translateY(-50%)',
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                fontSize: '18px',
                                color: '#BBBBE2'
                            }}
                            aria-label="Показать пароль"
                        >
                            👁
                        </button>
                    </div>

                    {/* Повторите пароль */}
                    <div className="form-group" style={{ position: 'relative' }}>
                        <label>*Повторите пароль</label>
                        <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                            style={{ paddingRight: '40px' }}
                        />
                        <button
                            type="button"
                            onMouseDown={() => setShowConfirmPassword(true)}
                            onMouseUp={() => setShowConfirmPassword(false)}
                            onMouseLeave={() => setShowConfirmPassword(false)}
                            style={{
                                position: 'absolute',
                                top: '65%',
                                right: '10px',
                                transform: 'translateY(-50%)',
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                fontSize: '18px',
                                color: '#BBBBE2'
                            }}
                            aria-label="Показать повторный пароль"
                        >
                            👁
                        </button>
                        {passwordMismatch && (
                            <small style={{ color: 'red', marginTop: '5px', display: 'block' }}>
                                Пароли не совпадают
                            </small>
                        )}
                    </div>

                    {/* Остальные поля */}
                    <div className="form-group">
                        <label>ИИН</label>
                        <input
                            type="text"
                            name="iin"
                            inputMode="numeric"
                            value={formData.iin}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>*Фамилия</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>*Имя</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Отчество</label>
                        <input
                            type="text"
                            name="middleName"
                            value={formData.middleName}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>*Дата рождения</label>
                        <input
                            type="date"
                            name="birthDate"
                            value={formData.birthDate}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>*Пол</label>
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Выберите пол</option>
                            <option value="male">Мужской</option>
                            <option value="female">Женский</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>*Область</label>
                        <input
                            type="text"
                            name="region"
                            value={formData.region}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Адрес</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>*Телефон</label>
                        <input
                            type="tel"
                            name="phone"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            maxLength={11}
                            value={formData.phone}
                            onChange={(e) => {
                                const value = e.target.value.replace(/\D/g, "");
                                if (value.length <= 11) {
                                    setFormData({ ...formData, phone: value });
                                }
                            }}
                            required
                        />
                    </div>

                    <button type="submit" className="login-button">Запросить код подтверждения</button>
                </form>
            </div>
        </div>
    );
};

export default Register;
