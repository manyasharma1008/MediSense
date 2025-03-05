import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { HealthProvider } from './context/HealthContext';
import { AIProvider } from './context/AIContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HealthProvider>
      <AIProvider>
        <App />
      </AIProvider>
    </HealthProvider>
  </StrictMode>
);