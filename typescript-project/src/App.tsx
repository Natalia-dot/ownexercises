import { Outlet } from 'react-router-dom';
import {Footer, Nav} from './components/index'


const App: React.FC = () => {

  
  return (
   <>
  <Nav/>
  <Outlet/>
  <Footer/>
   </>
  );
}

export default App;
