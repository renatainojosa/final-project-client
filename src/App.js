import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import Pets from './pages/Pets/Pets';
import Ongs from './pages/Ongs/Ongs';
import Footer from './components/Footer/Footer';
import Instructions from './pages/Instructions/Instructions';
import SignUpOng from './pages/SignUpOng/SignUpOng';
import SignUpUser from './pages/SignUpUser/SignUpUser';
import Error from './pages/Error/Error';
import MyProfile from './pages/MyProfile/MyProfile';
import MyPets from './pages/MyPets/MyPets';
import NewPet from './pages/NewPet/NewPet';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import MyProfileOng from './pages/MyProfileOng/MyProfileOng';
import EditPet from './pages/EditPet/EditPet';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signup/user' element={<SignUpUser/>}/>
        <Route path='/signup/ong' element={<SignUpOng/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/pets' element={<PrivateRoute><Pets/></PrivateRoute>}/>
        <Route path='/ongs' element={<Ongs/>}/>
        <Route path='/instructions' element={<Instructions/>} />
        <Route path='/my-profile' element={<PrivateRoute><MyProfile /></PrivateRoute>} />
        <Route path='/my-profile-ong' element={<PrivateRoute><MyProfileOng /></PrivateRoute>} />
        <Route path='/my-profile-ong/my-pets' element={<PrivateRoute><MyPets /></PrivateRoute>} />
        <Route path='/my-profile-ong/my-pets/:petId/edit' element={<PrivateRoute><EditPet /></PrivateRoute>} />
        <Route path='/my-profile-ong/new-pet' element={<PrivateRoute><NewPet /></PrivateRoute>} />
        <Route path='/my-profile/my-pets' element ={<PrivateRoute><MyPets /></PrivateRoute>} />
        <Route path='/my-profile/my-pets/:petId/edit' element ={<PrivateRoute><EditPet /></PrivateRoute>} />
        <Route path='/my-profile/new-pet' element ={<PrivateRoute><NewPet /></PrivateRoute>} />
        <Route path='/*' element={<Error />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
