import Navigation from './components/navigation/Navigation';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Cadastro from './pages/Cadastro/Cadastro';
import Login from './pages/Login/login';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import { AnimatePresence } from 'framer-motion';
import PrestadorServicoAnuncio from './pages/prestadorServicoAnuncio/PrestadorServicoAnuncio';
import { UserProvider } from '../context/userContext';
import Profile from './pages/Profile/Profile';

function App() {


  return (
    <>
      <AnimatePresence mode='wait'>
        <UserProvider>
          <BrowserRouter>

            <div>
              <Route path="/cadastro">
                <Cadastro />
              </Route>

              <Route path={["/", "/users/:id", "/profile"]} exact>
                <Navigation />
              </Route>

              <Switch>

                <Route path="/profile">
                  <Profile />
                </Route>
                <Route path="/login" exact>
                  <Login />
                </Route>

                <Route path="/users/:id" exact>
                  <PrestadorServicoAnuncio />
                </Route>

                <Route path="/recuperarSenha" exact>
                  <ForgotPassword />
                </Route>

                <Route path="/" exact>
                  <Home />
                </Route>

              </Switch>
            </div>
          </BrowserRouter>
        </UserProvider>
      </AnimatePresence>
    </>
  )
}

export default App
