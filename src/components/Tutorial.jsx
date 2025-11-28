import React from 'react';

const Tutorial = () => {
    return (
        <section id="tutorial" className="section tutorial">
            <div className="container">
                <h2 className="section-title">Tutorial de Instalação</h2>
                <div className="tutorial-content">
                    <div className="step-card">
                        <div className="step-icon">1</div>
                        <h3>Baixar o Instalador</h3>
                        <p>Faça o download da versão mais recente do OpenErp v2026.</p>
                        <a href="https://github.com/Gabriel-Mesq/imation/releases/download/v1.1.1.3/OpenErp-1.1.1.3-x86-Instalador.exe" target="_blank" rel="noopener noreferrer" className="btn-primary">
                            Baixar OpenErp v2026
                        </a>
                    </div>

                    <div className="step-card">
                        <div className="step-icon">2</div>
                        <h3>Acesso ao Sistema</h3>
                        <p>Após a instalação, utilize as credenciais abaixo para acessar:</p>
                        <div className="credentials-box">
                            <div className="credential-item">
                                <span className="label">Usuário:</span>
                                <span className="value">IMATION</span>
                            </div>
                            <div className="credential-item">
                                <span className="label">Senha:</span>
                                <span className="value">123</span>
                            </div>
                        </div>
                        <div className="note">
                            <label className="checkbox-label">
                                <input type="checkbox" checked readOnly />
                                <span>Lembrar</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tutorial;
