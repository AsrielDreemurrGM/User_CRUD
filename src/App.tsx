import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/main';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AllRoutes from './routes';

import { bootstrap } from './utils/bootstrap';

function App() {
  useEffect(() => {
    bootstrap();
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <AllRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
