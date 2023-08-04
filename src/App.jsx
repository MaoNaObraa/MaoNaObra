import Navigation from './components/navigation/Navigation';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Cadastro from './pages/Cadastro/Cadastro';
import Login from './pages/Login/login';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import { AnimatePresence } from 'framer-motion';
import PrestadorServicoAnuncio from './pages/prestadorServicoAnuncio/PrestadorServicoAnuncio';
import AnuncioPage from './pages/anuncioPage/anuncioPage';
import AboutUs from './pages/AboutUs/AboutUs';

function App() {


  return (
    <>
      <AnimatePresence mode='wait'>
        <BrowserRouter>

          <div>
            <Route path="/cadastro">
              <Cadastro />
            </Route>

            <Route path={["/", "/prestadorServicoAnuncio","/anuncioPage","/aboutUs"]} exact>
              <Navigation />
            </Route>
            
            <Switch>

              <Route path="/login" exact>
                <Login />
              </Route>

              <Route path="/prestadorServicoAnuncio" exact>
                <PrestadorServicoAnuncio />
              </Route>

              <Route path="/aboutUs" exact>
                <AboutUs />
              </Route>

              <Route path="/recuperarSenha" exact>
                <ForgotPassword />
              </Route>

              <Route path="/anuncioPage" exact>
                <AnuncioPage />
              </Route>

              <Route path="/" exact>
                <Home />
              </Route>

            </Switch>
          </div>
        </BrowserRouter>
      </AnimatePresence>
    </>
  )
}

export default App
