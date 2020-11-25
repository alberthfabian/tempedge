import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Detail from './components/Detail';
import Home from './pages/Home';
import NotFound from './components/NotFound';
import Layout from './components/Layout';
import { ServerProvider } from './context';
import { Provider } from 'react-redux';
import store from './redux/store';
import { initial } from './redux/actions/ShopAction';

store.dispatch(initial('batman'));

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <ServerProvider>
          <Layout>
            <Switch>
              <Route exact path='/movie/:id' component={Detail} />
              <Route exact path='/' component={Home} />
              <Route component={NotFound} />
           </Switch>
          </Layout>
        </ServerProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
