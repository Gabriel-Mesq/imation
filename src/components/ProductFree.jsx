import React from 'react';

const ProductFree = () => {
    return (
        <section id="product-free" className="section product-free">
            <div className="container">
                <h2 className="section-title">Emissor de NFSe Gratuito</h2>
                <div className="product-content">
                    <div className="product-text">
                        <p>
                            Simplifique a emissão de Notas Fiscais de Serviço Eletrônicas com nosso software desktop gratuito.
                            Ideal para prestadores de serviços e pequenas empresas que buscam agilidade e conformidade fiscal sem custos.
                        </p>
                        <ul className="feature-list">
                            <li>Emissão rápida e ilimitada</li>
                            <li>Armazenamento local seguro</li>
                            <li>Interface intuitiva e fácil de usar</li>
                            <li>Compatível com diversas prefeituras</li>
                            <li>Totalmente Gratuito</li>
                        </ul>
                    </div>
                    <div className="product-image">
                        {/* Placeholder for product screenshot */}
                        <div className="img-placeholder">Software Screenshot</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductFree;
