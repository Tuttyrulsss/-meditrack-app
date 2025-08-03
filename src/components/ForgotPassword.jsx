import React, { useState } from 'react';
import './ForgotPassword.css';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [emailSent, setEmailSent] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // Здесь будет запрос к вашему API
          
            await new Promise(resolve => setTimeout(resolve, 1500));

            setMessage('Инструкции по восстановлению пароля отправлены на вашу почту');
            setEmailSent(true);
        } catch (error) {
            setMessage('Произошла ошибка. Пожалуйста, попробуйте позже.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="forgot-password-container">
            <div className="forgot-password-form">
                <div className="logo">
                    {/* Замените на ваш логотип */}
                    <h2>ALM System</h2>
                </div>

                {!emailSent ? (
                    <>
                        <h3>Восстановление пароля</h3>
                        <p>Введите email, указанный при регистрации</p>

                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder="Введите ваш email"
                                />
                            </div>

                            <button type="submit" disabled={isLoading}>
                                {isLoading ? 'Отправка...' : 'Отправить'}
                            </button>
                        </form>
                    </>
                ) : (
                    <div className="success-message">
                        <h3>Проверьте вашу почту</h3>
                        <p>{message}</p>
                        <button onClick={() => setEmailSent(false)}>Отправить повторно</button>
                    </div>
                )}

                {message && !emailSent && <div className="error-message">{message}</div>}

                <div className="links">
                    <a href="/signin">Вернуться к входу</a>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;