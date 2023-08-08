import { useEffect, useState } from 'react';
import CardsPrestadorServico from '../../components/Home-components/cards-PrestadorServico/CardsPrestadorServico';
import Categories from '../../components/categories-filter/categories/Categories';
import FilterSearch from '../../components/categories-filter/filter/FilterSearch';
import './Home.css'
import { motion } from 'framer-motion';
import api from '../../../utils/api';
import ShowResultsToHome from '../../components/showResultsToHome/ShowResultsToHome';

const Home = () => {
    const [pesquisaValue, setPesquisaValue] = useState('')
    const [mostrarResultados, setMostrarResultados] = useState(false)
    const [usersFound, setUsersFound] = useState([])

    const updateUsersFound = (users) => {
        setUsersFound(users);
        setMostrarResultados(true)
    };

    const isEmpty = (empty) =>{
        if (empty == "") {
            setMostrarResultados(false)
        }
    }

    const pesquisar = (event) => {
        setMostrarResultados(true)
        event.preventDefault()
        api.get(`/users/search/${pesquisaValue}`).then((response) => {
            setUsersFound(response.data.users)
        })
    }

    // caso a barra de pesquisa esteja vazia, voltar para componente de cards
    useEffect(() => {
        if (pesquisaValue == "") {
            setMostrarResultados(false)
        }
    }, [pesquisaValue])

    return (
        <motion.div className='container d-flex justify-content-between' id='home-box'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div id='categories-box'>
                <FilterSearch cityUsers={updateUsersFound} empty={isEmpty} />
                <Categories />
            </div>

            <div id='principal-box-home' className='pb-3'>
                <form action="">
                    <div className='d-flex' id='pesquisar-box'>
                        <input type="text" name='search' placeholder='Pesquise um serviço de seu interesse' id='pesquisar-input' value={pesquisaValue} onChange={(e) => { setPesquisaValue(e.target.value) }} />
                        <button id='pesquisar-button' type='submit' onClick={() => { pesquisar(event) }}>Pesquisar</button>
                    </div>
                </form>
                <div className='mt-4 mb-4' id="persons">
                    <div>

                        {
                            mostrarResultados ?
                                <div>
                                    <h4>Resultado da busca: {pesquisaValue}</h4>
                                    <ShowResultsToHome usersFound={usersFound} />
                                </div>
                                :
                                <CardsPrestadorServico />
                        }   
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Home;
