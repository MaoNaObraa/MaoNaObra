import { useState } from 'react';
import CardsPrestadorServico from '../../components/cards-PrestadorServico/CardsPrestadorServico';
import Categories from '../../components/categories-filter/categories/Categories';
import FilterSearch from '../../components/categories-filter/filter/FilterSearch';
import './Home.css'

const Home = () => {
    // recuperando os dados da barra de pesquisa
    const[pesquisaValue, setPesquisaValue] = useState('')
    const pesquisar = () =>{
        console.log(pesquisaValue)
    }

    return ( 
        <div className='container d-flex justify-content-between' id='home-box'>
            <div id='categories-box'>
                <FilterSearch />
                <Categories />
            </div>

            <div id='principal-box-home' className='pb-3'>
                <div className='d-flex' id='pesquisar-box'>
                    <input type="text" placeholder='Pesquise um serviço de seu interesse' id='pesquisar-input' value={pesquisaValue} onChange={(e)=>{ setPesquisaValue(e.target.value)}}/>
                    <button id='pesquisar-button' onClick={pesquisar}>Pesquisar</button>
                </div>
                <div className='mt-4' id="persons">
                    <h4 className='mb-4'>Em destaque</h4>
                    <div>
                        <CardsPrestadorServico />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Home;
