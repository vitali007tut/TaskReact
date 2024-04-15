import { RouterProvider } from 'react-router-dom';
import { router } from './components/AppRouter';
import Header from './components/Header';
import { GlobalStyle } from './GlobalStyle';

function App() {

  return (
    <>
      <GlobalStyle />
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App
