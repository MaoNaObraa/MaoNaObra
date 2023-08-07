import './FilterSearch.css'

const FilterSearch = () => {
    return (
        <div className="caixa-pesquisa">
            <h5>Pesquisar filtro</h5>
            <div className="procurar-input">
                <input type="text" className="pesquisa" id="campoPesquisa" name="Pesquisa" placeholder="Procure por um filtro" />
                <button className="lupa">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#FFF" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default FilterSearch;