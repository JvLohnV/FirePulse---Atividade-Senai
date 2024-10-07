import React from 'react';
import './Footer.css'; // Crie este arquivo para estilizar

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Seção Institucional */}
        <div className="footer-section">
          <h3>Sobre Nós</h3>
          <p>FirePulse é uma plataforma dedicada a facilitar o aprendizado musical através de recursos interativos e colaborativos.</p>
          <ul className="footer-links">
            <li><a href="/sobre">Sobre</a></li>
            <li><a href="/contato">Contato</a></li>
            <li><a href="/termos">Termos de Uso</a></li>
            <li><a href="/privacidade">Política de Privacidade</a></li>
          </ul>
        </div>

        {/* Seção Educacional */}
        <div className="footer-section">
          <h3>Recursos</h3>
          <ul className="footer-links">
            <li><a href="/tutorials">Tutoriais</a></li>
            <li><a href="/faqs">FAQs</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </div>

        {/* Seção de Suporte */}
        <div className="footer-section">
          <h3>Suporte</h3>
          <ul className="footer-links">
            <li><a href="/ajuda">Ajuda</a></li>
            <li><a href="/feedback">Feedback</a></li>
          </ul>
        </div>

        {/* Seção de Redes Sociais */}
        <div className="footer-section">
          <h3>Siga-nos</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>

      {/* Linha de Separação */}
      <div className="footer-bottom">
        <p>&copy; 2024 FirePulse. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;