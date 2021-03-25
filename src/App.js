import Home from './pages/Home'
import Competences from './pages/Competences'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Portfolio from './pages/Portfolio'

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/competences" component={Competences}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/portfolio" component={Portfolio}/>
          <Route component={NotFound}/>
        </Switch>

      </BrowserRouter>
    </>
  );
}

export default App;
