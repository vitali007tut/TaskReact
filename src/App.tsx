import { RouterProvider } from 'react-router-dom';
import { router } from './components/router';
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
