import React from "react";
import "../components/ForgotPassword.css";

function ForgotPassword() {
    return (
        <div className="forgot-container">
            <div className="forgot-box">
                <h2 className="forgot-title">Восстановление пароля</h2>
                <p className="forgot-subtitle">Пожалуйста, введите ваш ИИН или Email</p>

                <input
                    type="text"
                    placeholder="ИИН или Email"
                    className="forgot-input"
                />

                <button className="forgot-button">Восстановить</button>

                <p className="forgot-login-link">
                    <a href="/">Вернуться ко входу</a>
                </p>

                <div className="forgot-footer">
                    <p className="forgot-privacy-text">
                         настоящему соглашению пользователь обязуется соблюдать меры по
                        защите персональных данных и врачебной тайны. В случае нарушения
                        конфиденциальности и допуска несанкционированного доступа к таким
                        данным, Пользователь несет ответственность в соответствии с
                        законодательством.
                    </p>

                    <div className="future-placeholders">
                        <div className="placeholder-box">QR</div>
                        <div className="placeholder-box">ЭЦП</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
