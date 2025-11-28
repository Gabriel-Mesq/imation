import React from 'react';

const ProductPatrimonial = () => {
    return (
        <section className="section product-patrimonial">
            <div className="container">
                <h2 className="section-title">Software de Gestão Patrimonial</h2>
                <div className="product-content">
                    <div className="product-text">
                        <p>
                            Tenha controle total sobre o patrimônio da sua empresa com nossa solução completa de gestão.
                            Monitore ativos, depreciação e movimentações de forma simples e eficiente.
                        </p>
                        <ul className="feature-list">
                            <li>Controle de ativos fixos e intangíveis</li>
                            <li>Cálculo automático de depreciação</li>
                            <li>Rastreamento de movimentações e transferências</li>
                            <li>Relatórios gerenciais detalhados</li>
                            <li>Integração contábil facilitada</li>
                        </ul>
                    </div>
                    <div className="product-image">
                        <div className="img-placeholder" style={{
                            width: '100%',
                            height: '300px',
                            backgroundColor: '#e5e7eb',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '0.5rem',
                            color: '#6b7280',
                            fontSize: '1.5rem',
                            fontWeight: '600'
                        }}>
                            Imagem do Sistema
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductPatrimonial;
