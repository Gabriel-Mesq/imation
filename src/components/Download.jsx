import React from 'react';

const Download = () => {
    return (
        <section id="download" className="section download">
            <div className="container download-content">
                <h2>Comece a usar agora mesmo</h2>
                <p>Baixe o Emissor de NFSe Gratuito e transforme a gestão do seu negócio.</p>
                <div className="download-options">
                    <button className="btn-download-large">
                        <span className="icon">⬇️</span>
                        <span className="text">
                            <span className="label">Download para Windows</span>
                            <span className="version">Versão 1.1.3 (32/64-bit)</span>
                        </span>
                    </button>
                </div>
                <p className="requirements">Requisitos: Windows 10 ou superior.</p>
            </div>
        </section>
    );
};

export default Download;
