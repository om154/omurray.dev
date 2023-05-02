import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Interests from './components/Interests';
import ContactMe from './components/ContactMe';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import Travel from './components/Travel';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/about',
    element: <AboutMe />,
  },
  {
    path: '/interests',
    element: <Interests />
  },
  {
    path: '/contact',
    element: <ContactMe />
  },
  {
    path: '/travel',
    element: <Travel />
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
