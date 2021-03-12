import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Overview from './pages/Overview';
import Reports from './pages/Reports';
import Users from './pages/Users';
import Main from './components/coins/Main';
import BarChart from './components/charts/BarChart';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/chart" exact component={BarChart} />
        <Route path="/overview/users" exact component={Users} />
        <Route path="/reports" exact component={Reports} />
        <Route component={NotFound}/>
      </Switch>
    </Router>
    
  );
}

export default App;
