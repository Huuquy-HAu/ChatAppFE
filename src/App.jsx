import './App.css';
import "antd/dist/reset.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home';
import SignIn from './components/Login/SignIn';
import SignUp from './components/Login/SignUp';
import Admin from './components/Admin/Admin';
import SignIn from "./components/Form/Signin/Signin"
import SignUp from "./components/Form/SignUp/SignUp"
import Profile from './components/Profile/Profile';
import HomePage from './components/Main/HomePage/HomePage';
import BoxChat from './components/Main/Oulet/BoxChat';
import Active from './components/Main/Oulet/Active';
import Spam from './components/Main/Oulet/Spam';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/sign-in' element={<SignIn/>}/>
          <Route path='/sign-up' element={<SignUp/>}/>
          <Route path='/admin' element={<Admin/>}/><Route element={<SignIn></SignIn>} path='/'></Route>
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
