import './App.css'
import Navigation from './components/navigation/Navigation';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from './pages/Home/Home';
import Login from './pages/Login/login'
import PrestadorServico from './components/prestadorServico/PrestadorServico';

function App() {

  return (
    <>
      
      <PrestadorServico name="Laura Nogueira" text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed efficitur ante. Praesent iaculis laoreet justo, et vestibulum ipsum consectetur.' nota='5.0' funcao='caloteiro'/>
      <img src="./star.svg" alt="" />

      {/* <Login /> */}

        {/* <Navigation />
          <BrowserRouter>

            <Switch>

              <Route path='/'exact>
                <Home />
              </Route> 
                
            </Switch>
          </BrowserRouter> */}
    </>
  )
}

export default App
