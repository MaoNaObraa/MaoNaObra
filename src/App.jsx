import Navigation from './components/navigation/Navigation';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from './pages/Home/Home';
import Login from './pages/Login/login'
import PrestadorServico from './components/prestadorServico/PrestadorServico';
import foto from './components/prestadorServico/foto.png'

function App() {

  return (
    <>
    <PrestadorServico foto={foto} nome="Kemysson" descricao="Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed efficitur ante. Praesent iaculis laoreet justo, et vestibulum ipsum consectetur." servicos={["pedreiro", "encanador", "encanador", "encanador", "encanador"]} avaliacao="5.0" />
      
    </>
  )
}

export default App
