import { Outlet, RouterProvider } from 'react-router-dom';
import './App.css';
import {Footer, Nav} from './components/index'
import { router } from './routes/routes';

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
