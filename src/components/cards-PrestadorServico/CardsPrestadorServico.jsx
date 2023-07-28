import PrestadorServico from "../prestadorServico/PrestadorServico";
import fotoExemple from '/foto.png'

const CardsPrestadorServico = () => {
    return (
        <>
        <div className="d-flex justify-content-between">
            <PrestadorServico foto={fotoExemple} nome="Larissa Soares" descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed efficitur ante. Praesent iaculis laoreet justo, et vestibulum ipsum consectetur." servicos={["encanador"]} avaliacao="4.5" />
            <PrestadorServico foto={fotoExemple} nome="Alef Aquino" descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed efficitur ante. Praesent iaculis laoreet justo, et vestibulum ipsum consectetur." servicos={["Pedreiro", "eletricista", "encanador"]} avaliacao="4.5" />
            <PrestadorServico foto={fotoExemple} nome="Kemysson" descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed efficitur ante. Praesent iaculis laoreet justo, et vestibulum ipsum consectetur." servicos={["Jardineiro", "pintor"]} avaliacao="4.5" />
        </div>
        </>
    );
}

export default CardsPrestadorServico;