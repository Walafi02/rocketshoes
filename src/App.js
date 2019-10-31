import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './config/Reactotron';

import Routes from './routes';
import GlobalStyles from './styles/global';
import Header from './components/Header';

import history from './service/history';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <GlobalStyles />
        <Header />
        <Routes />
        <ToastContainer autoClose={3000} />{' '}
        {/** autoClose quantidade tem tempo que a mensagem fica na tela // lembrar de import no global.js tbm o css */}
      </Router>
    </Provider>
  );
}

export default App;
