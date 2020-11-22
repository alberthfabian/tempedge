import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Detail from './components/Detail';
import Home from './pages/Home';
import NotFound from './components/NotFound';
import Layout from './components/Layout';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      {/* <ServerProvider> */}
        <Layout>
          <Switch>
            <Route exact path='/movie/:id' component={Detail} />
            <Route exact path='/' component={Home} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      {/* </ServerProvider> */}
      </BrowserRouter>
  );
}

export default App;
