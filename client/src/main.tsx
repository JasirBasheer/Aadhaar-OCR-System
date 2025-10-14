import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LandingPage from './pages/LandingPage';
import { AadhaarProvider } from './context/AadhaarContext';

const queryClient = new QueryClient();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
        <AadhaarProvider>
        <LandingPage />
        </AadhaarProvider>
    </QueryClientProvider>
  </StrictMode>,
)
