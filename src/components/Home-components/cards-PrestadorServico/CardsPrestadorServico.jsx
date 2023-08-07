import PrestadorServico from '../../prestadorServico/PrestadorServico'
import api from '../../../../utils/api'
import { useEffect, useState } from 'react'
import "./CardsPrestadorServico.css"

const CardsPrestadorServico = () => {

    const [prestadoresServico, setPrestadoresServicos] = useState([])

    useEffect(() => {
        api.get('/users/').then((response) => {
            setPrestadoresServicos(response.data.users)
            console.log(prestadoresServico)
        })
    }, [])

    return (
        <>
            <h4>Em destaque</h4>
            <div id='prestadores-box'>
                {
                    prestadoresServico.length > 0 ?
                        prestadoresServico.map((prestador) => (
                            <PrestadorServico
                                key={prestador.id}
                                foto={`http://localhost:5000/images/users/${prestador.image}`}
                                nome={prestador.name}
                                descricao={prestador.descriptionAd}
                                servicos={prestador.servicesAd}
                                avaliacao={"5.0"}
                                rota={`/users/${prestador.id}`}
                            />
                        ))
                        :
                        <div className='text-center'>
                            <h5 style={{color:"rgb(77, 77, 77)"}}>Nenhum prestador de serviço cadastrado</h5>
                        </div>
                }
            </div>

        </>
    );
}

export default CardsPrestadorServico;