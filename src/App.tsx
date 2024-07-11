import { FC } from 'react'
import Nav from './components/Nav';

interface AppProps {}

const App: FC<AppProps> = () => {
  return <div>
    <Nav/>
    <main></main>
    <footer></footer>
  </div>;
};


export default App
