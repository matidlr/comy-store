import React from 'react';
import { createRoot } from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import App from './App';
import { ToastContainer } from 'react-toastify';
import { store } from './store';
import { Provider } from 'react-redux';



const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
  <App />
  <ToastContainer position='top-center' />
</Provider>
);