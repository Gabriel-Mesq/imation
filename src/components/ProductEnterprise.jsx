import React from 'react';

const ProductEnterprise = () => {
    return (
        <section id="product-enterprise" className="section product-enterprise">
            <div className="container">
                <h2 className="section-title">Imation Enterprise</h2>
                <p className="section-subtitle">Leve a gestão da sua empresa para o próximo nível.</p>

                <div className="features-grid">
                    <div className="feature-card">
                        <h3>Suporte Dedicado</h3>
                        <p>Atendimento prioritário e especializado para resolver suas dúvidas e problemas rapidamente.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Controle de Estoque</h3>
                        <p>Gerencie seus produtos, entradas e saídas com precisão e evite perdas.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Controle de Mercadoria</h3>
                        <p>Rastreabilidade completa de suas mercadorias, desde a compra até a venda.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Gestão de Patrimônio</h3>
                        <p>Controle total sobre os ativos da sua empresa, com depreciação e localização.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductEnterprise;
