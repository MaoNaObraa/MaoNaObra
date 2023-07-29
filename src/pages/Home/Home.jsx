import { useEffect, useState } from 'react';
import CardsPrestadorServico from '../../components/Home-components/cards-PrestadorServico/CardsPrestadorServico';
import Categories from '../../components/categories-filter/categories/Categories';
import FilterSearch from '../../components/categories-filter/filter/FilterSearch';
import './Home.css'
import SearchResults from '../../components/Home-components/searchResults/searchResults';
import { motion } from 'framer-motion';

const Home = () => {
    // recuperando os dados da barra de pesquisa
    const [pesquisaValue, setPesquisaValue] = useState('')
    //mostrar resultado da pesquisa
    const [mostrarResultados, setMostrarResultados] = useState(false)

    // função para retornar o que foi pesquisado
    const pesquisar = () => {
        setMostrarResultados(true)
    }

    var desa

    // caso a barra de pesquisa esteja vazia, voltar para componente de cards
    useEffect(()=>{
        if(pesquisaValue == ""){
            setMostrarResultados(false)
        }
    }, [pesquisaValue])

    return (
        <motion.div className='container d-flex justify-content-between' id='home-box'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <div id='categories-box'>
                <FilterSearch />
                <Categories />
            </div>

            <div id='principal-box-home' className='pb-3'>
                <div className='d-flex' id='pesquisar-box'>
                    <input type="text" placeholder='Pesquise um serviço de seu interesse' id='pesquisar-input' value={pesquisaValue} onChange={(e) => { setPesquisaValue(e.target.value) }} />
                    <button id='pesquisar-button' onClick={pesquisar}>Pesquisar</button>
                </div>
                <div className='mt-4 mb-4' id="persons">
                    <div>
                        {/* se o estado mostrarResultado for falso, então mostra os cards normalmente, se for verdadeiro retornar o componente de resultado de pesquisa */}
                        {mostrarResultados && <SearchResults textoPesquisa={pesquisaValue}/>}
                        {!mostrarResultados && <CardsPrestadorServico />}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Home;
