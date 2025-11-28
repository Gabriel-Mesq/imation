import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <div className="container header-container">
                <div className="logo">
                    <h1>Imation Tecnologia</h1>
                </div>
                <nav className="nav">
                    <ul>
                        <li><a href="#hero">Início</a></li>
                        <li><a href="#about">Sobre</a></li>
                        <li><a href="#product-free">Produtos</a></li>
                        <li><a href="#product-enterprise">Enterprise</a></li>
                        <li><a href="#tutorial">Tutorial</a></li>
                        <li><a href="#download" className="btn-download-nav">Baixar Agora</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
