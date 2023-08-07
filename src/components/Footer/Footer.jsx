import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './Footer.css';

const Footer = () => {
  return (
    <footer id='main-footer'>
      <div className='container'>
        <div className="footer">
          <div className='left-imagens'>
            <img src="/logo.png" alt="Logo" width='60'/>
          </div>

          <div className='right-imagens'>
            <Link to="/login" className="coment">Conheça nossa Equipe</Link>
            <img src="/github.png" alt="GitHub" width='60'/>
          </div>
        </div>

        <div className='comentario-rodape'>
          <p>© todos os direitos reservados | 2023 equipe NewGen Leaders</p>
        </div>
      </div>

    </footer>
  );
}

export default Footer;