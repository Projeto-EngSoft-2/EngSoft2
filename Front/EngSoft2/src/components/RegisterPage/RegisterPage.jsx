import React from "react";
import "./RegisterPage.css";

export default function RegisterPage() {
    return (
        <div className="register-container">
            <h1 className="register-title">Crie sua conta.</h1>
            <form className="register-form">
                <div className="form-group">
                    <label htmlFor="name">Nome</label>
                    <input type="text" id="name" placeholder="Nome" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Senha</label>
                    <input type="password" id="password" placeholder="Senha"/>
                </div>
                <button type="submit" className="register-button">Cadastrar</button>
            </form>
        </div>
    );
}
