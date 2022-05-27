import { Route, Routes } from 'react-router-dom';
import './App.css';
import Admin from './Pages/Admin/Admin';
import Home from './Pages/Home/Home';
import Footer from './Pages/Home/Shared/Footer';
import Navbar from './Pages/Home/Shared/Navbar';
import Login from './Pages/Login/Login';
import Photos from './Pages/Photos';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import SignUp from './SignUp/SignUp';


function App() {
  return (
    <div>
       <Navbar></Navbar>
     
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/admin' element={<Admin></Admin>}></Route>
        <Route path='/photos' element={<RequireAuth><Photos></Photos></RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
      
       
    </div>
  );
}

export default App;
