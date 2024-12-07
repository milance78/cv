import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { CustomizedElementsContextProvider } from './contexts/navigateContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CustomizedElementsContextProvider>
      <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    </CustomizedElementsContextProvider>
  </React.StrictMode>
);

