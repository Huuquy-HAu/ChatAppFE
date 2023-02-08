import './App.css';
import "antd/dist/reset.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signin from './Form/Signin/Signin';
import SignUp from './Form/SignUp/SignUp';
import Profile from './Profile/Profile';
import HomePage from './Main/HomePage/HomePage';
import BoxChat from './Main/Oulet/BoxChat';
import Active from './Main/Oulet/Active';
import Spam from './Main/Oulet/Spam';
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route element={<Signin></Signin>} path='/'></Route>
          <Route element={<SignUp></SignUp>} path='/SignUp'></Route>
          <Route element= {<HomePage></HomePage>} path = "/m">
              <Route index element = {<BoxChat></BoxChat>}></Route>
              <Route path='active' element = {<Active></Active>}></Route>
              <Route path='spam' element = {<Spam></Spam>}></Route>
          </Route>
          <Route element = {<Profile></Profile>} path="/profile"></Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
