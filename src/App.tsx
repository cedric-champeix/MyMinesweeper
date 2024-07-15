import { FC, useContext } from 'react'
import Nav from './components/Nav';
import Footer from './components/Footer';
import { ThemeContext } from './context/ThemeProvider';
import MineSweeper from './pages/MineSweeper';

interface AppProps {}

const App: FC<AppProps> = () => {

  const { theme } = useContext(ThemeContext)

  return <div className='app' data-theme={theme}>
    <Nav/>
    <MineSweeper/>
    <Footer/>
  </div>;
};


export default App
