const selectCategorie = () => {
    return ( 
        <div className='categoria mt-1'>
                <label htmlFor="construcoesReformas">Construções e Reformas</label>
                <input type="radio" name="categoria" id="construcoesReformas" value="construcoesReformas" className='hidden'/>
        </div>
     );
}
 
export default selectCategorie;