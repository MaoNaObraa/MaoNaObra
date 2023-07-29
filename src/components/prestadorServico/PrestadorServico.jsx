import { Link } from 'react-router-dom/cjs/react-router-dom';
import './PrestadorServico.css'
import estrela from "/star.svg"

const PrestadorServico = ({ foto, nome, descricao, servicos, avaliacao }) => {
  return (
    <>
      <Link to="/PresadorServicoPage">
        <div className='card'>

          <div className='imagem' style={{ backgroundImage: `url(${foto})` }}>
            <div className='d-flex justify-content-end'>
              <div id='star' className='d-flex justify-content-center m-2'>
                <div id='avaliation' className='m-1 d-flex justify-content-between align-items-center'> <img src={estrela} /> <span id='avaliation-texto'>{avaliacao}</span> </div>
              </div>
            </div>
          </div>

          <div className='d-flex flex-column justify-content-around px-2 py-1'>
            <div>
              <div>
                <h5 id='Nome'>{nome}</h5>
              </div>
              <div id="descricao-box">
                <p id="text">{descricao}</p>
              </div>
            </div>
            <div className='d-flex flex-column'>
              <p id='services'>serviços:</p>
              <p id='function'>{servicos.join(' · ')}</p>
            </div>
          </div>
          <div>
            <button id='botão'>Contratar</button>
          </div>

        </div>
      </Link>

    </>
  );
}

export default PrestadorServico;