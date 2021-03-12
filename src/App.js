import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Overview from './pages/Overview';
import Reports from './pages/Reports';
import Users from './pages/Users';
import Main from './components/Main';

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/main" exact component={Main} />
        <Route path="/overview" exact component={Overview} />
        <Route path="/overview/users" exact component={Users} />
        <Route path="/reports" exact component={Reports} />
      </Switch>
    </Router>
    
  );
}

export default App;
