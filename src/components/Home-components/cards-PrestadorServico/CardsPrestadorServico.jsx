import PrestadorServico from '../../prestadorServico/PrestadorServico'
import fotoExemple from '/foto.png'
import fotoExemple2 from '../../../../public/foto1.png'
import fotoExemple3 from '../../../../public/foto2.png'
import fotoExemple4 from '../../../../public/foto3.png'

const CardsPrestadorServico = () => {
    return (
        <>
        <h4>Em destaque</h4>
        <div className="d-flex justify-content-between">
            <PrestadorServico foto={fotoExemple} nome="Larissa Soares" descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed efficitur ante. Praesent iaculis laoreet justo, et vestibulum ipsum consectetur." servicos={["encanador"]} avaliacao="4.5" />
            <PrestadorServico foto={fotoExemple2} nome="Alef Aquino" descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed efficitur ante. Praesent iaculis laoreet justo, et vestibulum ipsum consectetur." servicos={["Pedreiro", "eletricista", "encanador"]} avaliacao="5.0" />
            <PrestadorServico foto={fotoExemple3} nome="Kemysson" descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed efficitur ante. Praesent iaculis laoreet justo, et vestibulum ipsum consectetur." servicos={["Jardineiro", "pintor"]} avaliacao="3.5" />
        </div>
        <div className="mt-5 d-flex justify-content-between">
            <PrestadorServico foto={fotoExemple4} nome="Natalia Farias" descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed efficitur ante. Praesent iaculis laoreet justo, et vestibulum ipsum consectetur." servicos={["encanador"]} avaliacao="1.5" />
            <PrestadorServico foto={fotoExemple} nome="Alef Aquino" descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed efficitur ante. Praesent iaculis laoreet justo, et vestibulum ipsum consectetur." servicos={["Pedreiro", "eletricista", "encanador"]} avaliacao="4.5" />
            <PrestadorServico foto={fotoExemple2} nome="Alef Aquino" descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed efficitur ante. Praesent iaculis laoreet justo, et vestibulum ipsum consectetur." servicos={["Pedreiro", "eletricista", "encanador"]} avaliacao="5.0" />
        </div>
        <div className="mt-5 d-flex justify-content-between">
        <PrestadorServico foto={fotoExemple2} nome="Alef Aquino" descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed efficitur ante. Praesent iaculis laoreet justo, et vestibulum ipsum consectetur." servicos={["Pedreiro", "eletricista", "encanador"]} avaliacao="5.0" />
            <PrestadorServico foto={fotoExemple} nome="Alef Aquino" descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed efficitur ante. Praesent iaculis laoreet justo, et vestibulum ipsum consectetur." servicos={["Pedreiro", "eletricista", "encanador"]} avaliacao="4.5" />
            <PrestadorServico foto={fotoExemple4} nome="Natalia Farias" descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed efficitur ante. Praesent iaculis laoreet justo, et vestibulum ipsum consectetur." servicos={["encanador"]} avaliacao="1.5" />
        </div>
        </>
    );
}

export default CardsPrestadorServico;