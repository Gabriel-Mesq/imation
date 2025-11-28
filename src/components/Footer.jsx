import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-section brand-section">
                    <h3>Imation Tecnologia</h3>
                    <p>Soluções em software para o seu sucesso.</p>
                    <div className="social-icons">
                        {/* Add social icons here if needed later */}
                    </div>
                </div>

                <div className="footer-section links-section">
                    <h4>Links Rápidos</h4>
                    <ul>
                        <li><a href="#hero">Início</a></li>
                        <li><a href="#about">Sobre</a></li>
                        <li><a href="#product-free">Produto</a></li>
                        <li><a href="#product-enterprise">Enterprise</a></li>
                        <li><a href="#tutorial">Tutorial</a></li>
                    </ul>
                </div>

                <div className="footer-section contact-section">
                    <h4>Contato</h4>
                    <div className="contact-item">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                        <span>imation.tecnologia@gmail.com</span>
                    </div>
                    <div className="contact-item">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                        </svg>
                        <a href="http://wa.me/5562984250200" target="_blank" rel="noopener noreferrer" className="whatsapp-link">
                            55 (62) 98425-0200
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2000 - {new Date().getFullYear()} Imation Tecnologia & Informação. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
