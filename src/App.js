import Event_Navber from './components/Event_Navber';
import Event_Footer from './components/Event_Footer';
import Event_Content from './components/Event_Content';
import Event_Banner from './components/Event_Banner';
import Event_Story from './components/page/Story/Event_Story';
import Page404 from './Page404';
import Register from './components/page/Form/Register';
import Login from './Login';

import {BrowserRouter, BrowserRouter as Switch, Route, Routes} from 'react-router-dom'
import Search_Register from './components/page/Form/Search_Register';



function App() {
  return (
    <div >

      <BrowserRouter>
        <Event_Navber />
          <Routes>
            <Route path="/" element={<Event_Content />}></Route>

            <Route path="/register" element={<Search_Register/>}></Route>

            <Route path="/story" element={<Event_Story />}></Route>

            <Route path="/Login" element={<Login />}></Route>
          </Routes>
      </BrowserRouter>  

              


      <Event_Footer />

     

  
      
    </div>
  );
}

export default App;
