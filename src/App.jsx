import './App.css'
import Navigation from './components/navigation/Navigation';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from './pages/Home/Home';

function App() {
  return (
    <>

        <Navigation />
          <BrowserRouter>

            <Switch>

              <Route path='/'exact>
                <Home />
              </Route> 
                
            </Switch>
          </BrowserRouter>
    </>
  )
}

export default App
