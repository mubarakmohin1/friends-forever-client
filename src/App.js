import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Footer from './Pages/Home/Shared/Footer';
import Navbar from './Pages/Home/Shared/Navbar';
import Photos from './Pages/Photos';


function App() {
  return (
    <div>
       <Navbar></Navbar>
     
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/photos' element={<Photos></Photos>}></Route>
      </Routes>
      <Footer></Footer>
      
       
    </div>
  );
}

export default App;
