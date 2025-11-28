import React from 'react';
import './products.css';

const ProductPatrimonial = () => {
    return (
        <section className="product-section product-patrimonial">
            <div className="container">
                <h2 className="section-title">Software de Gestão Patrimonial</h2>
                <div className="product-content">
                    <div className="product-text">
                        <p>
                            Tenha controle total sobre o patrimônio da sua empresa com nossa solução completa de gestão.
                            Monitore ativos, depreciação e movimentações de forma simples e eficiente.
                        </p>
                        <ul className="product-feature-list">
                            <li>Controle de ativos fixos e intangíveis</li>
                            <li>Cálculo automático de depreciação</li>
                            <li>Rastreamento de movimentações e transferências</li>
                            <li>Relatórios gerenciais detalhados</li>
                            <li>Integração contábil facilitada</li>
                        </ul>
                    </div>
                    <div className="product-image">
                        <div className="product-image-placeholder">
                            Imagem do Sistema
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductPatrimonial;
