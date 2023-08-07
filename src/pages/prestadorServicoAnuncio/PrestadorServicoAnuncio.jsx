import Gallery from '../../components/Gallery/Gallery';
import './prestadorServicoAnuncio.css'
import api from '../../../utils/api'
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'
import Comment from '../../components/comment/Comment';

const PrestadorServicoAnuncio = () => {
    const [prestadorServico, setPrestadorServico] = useState({})
    const [picturesURL, setPicturesURL] = useState([])
    const [servicos, setServicos] = useState([])
    const { id } = useParams()
    const [token] = useState(localStorage.getItem('token') || '')

    let staticComments = [
        {
            "Nome": "Luciana calado",
            "Comentario": "Demorou um pouco, mas o serviço ficou ótimo!",
            "Avaliacao": "4.5"
        },
        {
            "Nome": "Marcio Henrique",
            "Comentario": "Ótimo trabalho, irei chamar mais vezes!!",
            "Avaliacao": "5.0"
        },
        {
            "Nome": "Sylvia dechiaro",
            "Comentario": "Não gostei muito do serviço, mas é uma ótima pessoa",
            "Avaliacao": "3.0"
        },
        {
            "Nome": "Juliano Casablanca",
            "Comentario": "Fez um ótimo trabalho",
            "Avaliacao": "5.0"
        }
    ]

    useEffect(() => {
        api.get(`/users/${id}`).then((response) => {
            setPrestadorServico(response.data.user)
        })
    }, [])

    useEffect(() => {
        if (prestadorServico && prestadorServico.servicesAd) {
            const arrayServices = prestadorServico.servicesAd.split(',')
            setServicos(arrayServices)
        }
        if (prestadorServico && prestadorServico.picturesAd) {
            const jsonArray = JSON.parse(prestadorServico.picturesAd);



            const baseUrl = 'http://54.87.135.22:5000/images/servicos';
            const pictureUrls = jsonArray.map(fileName => `${baseUrl}/${fileName}`);
            setPicturesURL(pictureUrls);
        }

    }, [prestadorServico]);


    return (
        <div className='container d-flex justify-content-between' id='main-anuncio'>
            <div id='perfil-box-anuncio' className='d-flex align-items-center flex-column justify-content-center'>
                <div id='foto-perfil-anuncio' style={{ backgroundImage: `url('http://54.87.135.22:5000/images/users/${prestadorServico.image}')` }}></div>
                <h3 className='mt-3'>{prestadorServico.name}</h3>
                <h5>{prestadorServico.city} | {prestadorServico.locationState}</h5>
                <h6 className='text-center'>
                    {
                        servicos ? servicos.join(' · ') : ''
                    }
                </h6>
            </div>

            <div id='other-side-anuncio'>
                <div id='description-box-anuncio'>
                    <p>{prestadorServico.descriptionAd}</p>
                </div>
                <div className='my-4'>
                    <div className='my-3'>
                        <h3 className='text-principal'>Serviços Feitos</h3>
                    </div>
                    <div id='gallery-box-anuncio'>
                        <div id='gallery-anuncio'>
                            <Gallery images={picturesURL} />
                        </div>
                    </div>
                </div>
                <div id='contract-button' className='mt-3'>
                    <button>Contratar</button>
                </div>
                <div id='comments-section' className='mt-4'>
                    <h5 className='text-principal mb-3'>Comentarios (4)</h5>
                    <div>
                        {staticComments.map((comentario, index) => (
                            <Comment
                                key={index}
                                Nome={comentario.Nome}
                                Avaliacao={comentario.Avaliacao}
                                Comentario={comentario.Comentario}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PrestadorServicoAnuncio;