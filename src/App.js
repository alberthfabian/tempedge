import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Detail from './components/Detail';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import NotFound from './components/NotFound';
import Layout from './components/Layout';
import { Provider } from 'react-redux';
import store from './redux/store';
import { initial } from './redux/actions/ShopAction';

store.dispatch(initial('batman'));

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path='/movie/:id' component={Detail} />
              <Route exact path='/' component={Home} />
              <Route exact path='/favorites' component={Favorites} />
              <Route component={NotFound} />
           </Switch>
          </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
