
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//COMPONENTS
import Header from './components/Header'

//STYLE
import './sass/App.scss';

//PAGES
import Home from './pages/Home'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          {/* <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
