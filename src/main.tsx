import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from "react-router";
import { Toaster } from "@/components/ui/sonner";
import {QueryClient, QueryClientProvider,} from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient()

createRoot(document.getElementById("root")!).render(
  // Provide the client to your App
  <QueryClientProvider client={queryClient}>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <Toaster position="top-right" richColors />
    </StrictMode>
  </QueryClientProvider>
);
