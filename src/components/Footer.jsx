import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-section">
                    <h3>Imation Tecnologia</h3>
                    <p>Soluções em software para o seu sucesso.</p>
                </div>
                <div className="footer-section">
                    <h4>Links Rápidos</h4>
                    <ul>
                        <li><a href="#hero">Início</a></li>
                        <li><a href="#about">Sobre</a></li>
                        <li><a href="#product-free">NFSe Grátis</a></li>
                        <li><a href="#product-enterprise">Enterprise</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Contato</h4>
                    <p>Email: contato@imation.com.br</p>
                    <p>Telefone: (11) 99999-9999</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Imation Tecnologia. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
