import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import Pets from './pages/Pets/Pets';
import Ongs from './pages/Ongs/Ongs';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/pets' element={<Pets/>}/>
        <Route path='/ongs' element={<Ongs/>}/>
      </Routes>
    </div>
  );
}

export default App;
