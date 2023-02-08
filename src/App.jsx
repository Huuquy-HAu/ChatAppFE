import './App.css';
import "antd/dist/reset.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home';
import SignIn from './components/Login/SignIn';
import SignUp from './components/Login/SignUp';
import Admin from './components/Admin/Admin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/sign-in' element={<SignIn/>}/>
          <Route path='/sign-up' element={<SignUp/>}/>
          <Route path='/admin' element={<Admin/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
