import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"
import { BrowserRouter } from 'react-router-dom'; // ✅ Import router
import { Provider,store } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter> {/* ✅ Wrap App in Router */}
      <App />
    </BrowserRouter>
  </Provider>
);
