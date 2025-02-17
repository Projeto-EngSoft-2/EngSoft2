import React from "react";
import "./HomePage.css";
import feature1 from "../../assets/feature1.png";
import feature2 from "../../assets/feature2.png";
import feature3 from "../../assets/feature3.png";
import mapPng from "../../assets/map.png";


export default function HomePage() {
    return (
        <div className="container">
            {/* Header */}
            <header className="header">
                <div className="logo">Logo</div>
                <div className="header-buttons">
                    <button className="register-button">cadastre-se</button>
                    <button className="login-button">entrar</button>
                </div>
            </header>

            {/* Hero */}
            <section className="hero">
                <h1 className="hero-title">
                    Você quer melhorar sua cidade e não sabe como?
                </h1>
                <p className="hero-description">
                    Com o (nome do projeto) é possível! Você pode enviar relatos de problemas, que serão encaminhados para o órgão responsável e solucionados.
                </p>
                <div className="hero-buttons">
                    <button className="register-button">cadastre-se</button>
                    <button className="login-button">entrar</button>
                </div>
            </section>

            {/* Features  */}
            <section className="features">
                <h2 className="features-title">
                    Quando se trata de melhorar a cidade, nós temos a solução.
                </h2>
                <div className="features-grid">
                    <div className="feature-item">
                        <img
                            src={feature1}
                            alt="Tenha tudo disponível"
                            className="feature-image"
                        />
                        <p className="feature-description">Tenha tudo disponível na palma da sua mão</p>
                    </div>
                    <div className="feature-item">
                        <img
                            src={feature2}
                            alt="Resolva os problemas"
                            className="feature-image"
                        />
                        <p className="feature-description">Resolva os problemas rapidamente</p>
                    </div>
                    <div className="feature-item">
                        <img
                            src={feature3}
                            alt="Informações completas"
                            className="feature-image"
                        />
                        <p className="feature-description">Tenha acesso a todas as informações dos problemas na sua cidade</p>
                    </div>
                </div>
            </section>

            {/* Updated   */}
            <section className="monitoring">
                <div className="monitoring-container">
                    <div className="monitoring-content">
                        <h2 className="monitoring-title">
                            Monitore a cidade e descubra todos os pontos de melhorias
                        </h2>
                        <button className="register-button">cadastre-se</button>
                    </div>
                    <div className="monitoring-image-container">
                        <img
                            src={mapPng}
                            alt="Monitoramento da cidade"
                            className="monitoring-image"
                        />
                    </div>
                </div>
            </section>

            {/* Footer  */}
            <footer className="footer">
                <div className="social-links">
                    <a href="#" className="social-link">Facebook</a>
                    <a href="#" className="social-link">Twitter</a>
                    <a href="#" className="social-link">Instagram</a>
                </div>
                <p className="footer-text">Empresa sem nome</p>
            </footer>
        </div>
    );
}