import { RouterProvider } from 'react-router-dom';
import { router } from './components/AppRouter';
import { GlobalStyle } from './GlobalStyle';

function App() {

  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
    </>
  );
}

export default App
