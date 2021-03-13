import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Reports from './pages/Reports';
import Users from './pages/Users';
import Main from './components/coins/Main';
import NotFound from './pages/NotFound';
import CoinDetails from './pages/CoinDetails';

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/coins/:id" exact component={CoinDetails} />
        <Route path="/overview/users" exact component={Users} />
        <Route path="/reports" exact component={Reports} />
        <Route component={NotFound}/>
      </Switch>
    </Router>
    
  );
}

export default App;
