import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './components/coins/Main';
import NotFound from './pages/not-found/NotFound';
import CoinDetails from './pages/CoinDetails';
import News from './pages/news/News';
import AI from './pages/news/AI';
import Login from './pages/login/Login';
import Watchlist from './pages/Watchlist';
import About from './pages/about/About';

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/coins/:id" exact component={CoinDetails} />
        <Route path="/news" exact component={News} />
        <Route path="/news/ai" exact component={AI} />
        <Route path="/watchlist" exact component={Watchlist} />
        <Route path="/about" exact component={About} />
        <Route path="/auth/login" exact component={Login} />
        <Route component={NotFound}/>
      </Switch>
    </Router>
  );
}

export default App;
