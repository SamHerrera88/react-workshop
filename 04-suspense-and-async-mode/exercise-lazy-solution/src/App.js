import React, {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import './App.css';
import Spinner from './components/spinner';

const Home = lazy(() => import('./pages/home'));
const Content = lazy(() => import('./pages/content'));
const PragueImage = lazy(() => import('./pages/prague-image'));

const App = () => (
  <Router>
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/content">Content</Link></li>
          <li><Link to="/image">Image</Link></li>
        </ul>
      </nav>
      <div className="App-content">
        <Suspense fallback={<Spinner>Loading the page...</Spinner>}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/content" component={Content} />
            <Route path="/image" component={PragueImage} />
          </Switch>
        </Suspense>
      </div>
    </div>
  </Router>
);

export default App;
