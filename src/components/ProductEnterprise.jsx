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
                        <h3>Gestão Contábil</h3>
                        <li>Contas a receber e a pagar</li>
                        <li>Relatórios</li>
                        <li>Atualizações conforme mudanças legais</li>
                    </div>
                    <div className="feature-card">
                        <h3>Gestão Fiscal</h3>
                        <li>Livros Fiscais</li>
                        <li>Apuração de Impostos</li>
                        <li>Relatórios</li>
                        <li>Atualizações conforme mudanças legais</li>
                    </div>
                    <div className="feature-card">
                        <h3>Gestão de RH</h3>
                        <li>Folha de Pagamento</li>
                        <li>eSocial, e-Consignado</li>
                        <li>Atualizações conforme mudanças legais</li>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductEnterprise;
