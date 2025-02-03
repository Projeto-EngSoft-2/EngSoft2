import React from "react";
import "./LoginPage.css";

export default function LoginPage() {
    return (
        <div className="login-container">
            <h1 className="login-title">Entre na sua conta</h1>
            <form className="login-form">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Digite seu email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Senha</label>
                    <input type="password" id="password" placeholder="Digite sua senha" />
                </div>
                <a href="#" className="forgot-password">
                    Esqueceu a senha?
                </a>
                <button type="submit" className="login-button">Entrar</button>
            </form>
        </div>
    );
}
