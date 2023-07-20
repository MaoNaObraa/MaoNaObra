import './App.css'
import Navigation from './components/navigation/Navigation';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from './pages/Home/Home';
import Login from './pages/Login/login'
import Categories from './components/categories/Categories';

function App() {
  return (
    <>

      <Categories />

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
