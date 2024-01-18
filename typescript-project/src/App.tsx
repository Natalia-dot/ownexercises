import { Outlet } from 'react-router-dom';
import './App.css';
import {Footer, Nav} from './components/index'

const App: React.FC = () => {
  return (
   <>
  <Nav theme='dark'/>
  <Outlet/>
  <Footer theme='dark'/>
   </>
  );
}

export default App;
