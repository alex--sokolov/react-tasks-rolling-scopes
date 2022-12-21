import './App.scss';

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Main from './components/pages/Main/Main';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Character from './components/ui/Character/Character';
import Forms from './components/pages/Forms/Forms';

import Page404 from './components/pages/Page404/page404';
import store from './store';

function App() {
  return (
    <div className="app-container" data-testid="app">
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/">
            <Route index element={<Main />} />
            <Route path="/character/:id" element={<Character />} />
          </Route>
          <Route path="/forms" element={<Forms />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
