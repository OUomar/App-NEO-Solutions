import { createBrowserRouter, RouterProvider } from 'react-router';
import MainLayout from './components/layout/MainLayout';
//import DashboardLayout from './components/layout/DashboardLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import ClientArea from './pages/ClientArea';
import NotFound from './pages/NotFound';
//import Dashboard from '././pages/Interface_NEO/dashboard';  // Si tu as une page spécifique pour le Dashboard

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'services', element: <Services /> },
      { path: 'contact', element: <Contact /> },
      { path: 'client-area', element: <ClientArea /> },
      { path: '*', element: <NotFound /> },
    ],
  },

]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
