import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { App } from './App'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StateProvider } from './utils/StateProvider';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StateProvider>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </StateProvider>
  </React.StrictMode>,
)
