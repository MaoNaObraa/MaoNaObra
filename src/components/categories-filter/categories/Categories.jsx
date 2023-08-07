import SelectCategorie from '../../selectCategorie/selectCategorie';
import './Categories.css'

const Categories = () => {
    return (
        <div className="categorias">
            <h5 className='mb-3 mt-2'>Categorias</h5>
            <SelectCategorie id="construcoesreformas" nomeCategoria="Construções e Reformas" value="construcoesreformas"/>
            <SelectCategorie id="manutencaoreparos" nomeCategoria="Manutenção e Reparos" value="construcoesreformas"/>
            <SelectCategorie id="servicosautomotivos" nomeCategoria="Serviços Automotivos" value="construcoesreformas"/>
            <SelectCategorie id="servicosdomesticos" nomeCategoria="Serviços Domésticos" value="construcoesreformas"/>
            <SelectCategorie id="servicosjardinagem" nomeCategoria="Serviços de jardinagem" value="construcoesreformas"/>
        </div>
    );
}

export default Categories;