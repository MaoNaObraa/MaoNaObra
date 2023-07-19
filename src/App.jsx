import './App.css'
import Navigation from './components/navigation/Navigation';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from './pages/Home/Home';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'

function App() {
  return (
    <>

    <ForgotPassword />
{/* 
        <Navigation />
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
