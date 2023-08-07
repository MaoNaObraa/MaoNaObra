const SearchResults = ({textoPesquisa}) => {
    return ( 
        <div className="text-center">
            <h4>Resultados da pesquisa: {textoPesquisa}</h4>
            <h5 style={{color:"rgb(77, 77, 77)"}}>Nenhum resultado encontrado</h5>
        </div>
     );
}
 
export default SearchResults;