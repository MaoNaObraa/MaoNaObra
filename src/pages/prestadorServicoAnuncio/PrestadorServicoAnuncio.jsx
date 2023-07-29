import Gallery from '../../components/Gallery/Gallery';
import './prestadorServicoAnuncio.css'
import fotoExemplo from '/foto.png'

const PrestadorServicoAnuncio = () => {

    var commentsQtd = 0

    return (
        <div className='container d-flex justify-content-between' id='main-anuncio'>
            <div id='perfil-box-anuncio' className='d-flex align-items-center flex-column justify-content-center'>
                <div id='foto-perfil-anuncio' style={{ backgroundImage: `url(${fotoExemplo})` }}></div>
                <h3 className='mt-3'>Laura Nogueira</h3>
                <h5>Recife | PE</h5>
                <h6 className='text-center'>Encanador · Pedreiro · Jardineiro · blabla · blabla</h6>
            </div>

            <div id='other-side-anuncio'>
                <div id='description-box-anuncio'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus libero felis, lacinia dictum mauris vitae, laoreet dictum est. Proin vestibulum elementum lectus, ut lobortis est luctus ut. Nunc et quam ex. Sed interdum, nulla at ultrices porttitor, diam felis finibus erat, vel ullamcorper tortor arcu eu ex. In ultrices purus vitae ullamcorper porta. Aenean porta, ligula nec sodales sodales, lorem nulla efficitur ante, sit amet bibendum lacus elit ac elit. Cras nec facilisis magna, non pellentesque est. Proin nisl sapien, pulvinar vel vulputate sed, fermentum eu enim. Curabitur fermentum dui non luctus imperdiet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus libero felis, lacinia dictum mauris vitae, laoreet dictum est. Proin vestibulum elementum lectus, ut lobortis est luctus ut. Nunc et quam ex. Sed interdum, nulla at ultrices porttitor, diam felis finibus erat, vel ullamcorper tortor arcu eu ex.</p>
                </div>
                <div className='my-4'>
                    <div className='my-3'>
                        <h3 className='text-principal'>Serviços Feitos</h3>
                    </div>

                    <div id='gallery-box-anuncio'>
                        <Gallery />
                    </div>
                </div>
                <div id='contract-button'>
                    <button>Contratar</button>
                </div>
                <div id='comments-section' className='mt-4'>
                    <h3 className='text-principal'>Comentarios ({commentsQtd})</h3>
                </div>
            </div>
        </div>
    );
}

export default PrestadorServicoAnuncio;