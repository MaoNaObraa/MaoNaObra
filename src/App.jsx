import './App.css'
import Navigation from './components/navigation/Navigation';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Cadastro from './pages/Cadastro/Cadastro';

function App() {
  return (
    <>


      <BrowserRouter>

        <div>
          <Route path="/cadastro">
            <Cadastro />
          </Route>

          {/* Componente Navigation aparece somente na rota inicial '/' */}
          <Route path="/" exact>
            <Navigation />
          </Route>

          {/* Rota para outras páginas que não cadastro */}
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
