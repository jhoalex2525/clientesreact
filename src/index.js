import React from 'react';
import ReactDOM from 'react-dom/client';
import { HeaderComponente } from './HeaderComponente';
import './index.css';
import { PrimerComponente } from './PrimerComponente';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <HeaderComponente/>
    <PrimerComponente/>
  </>
)
