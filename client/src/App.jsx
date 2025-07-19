
import './App.css'

import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import SIgnup from './pages/SIgnup';
import Dashboard from './pages/Dashboard';
import Plans from './pages/Plans';
import Trainerdashboard from './pages/Trainerdashboard';
import Trainersignup from './pages/Trainersignup';
import Trainerlog from './pages/Trainerlog';


function App() {
  
  return (
    <>
    
    <Routes>
       
       <Route path='/' element = {<Home />} />
       <Route path='/login' element = {<Login />} />
       <Route path='/signup?' element = {<SIgnup />} />
       <Route path='/dashboard' element = {<Dashboard />} />
       <Route path='/plans' element = {<Plans />} />
       <Route path = '/trainer/signup' element = {<Trainersignup />}/>
       <Route path='/trainer/login' element= {<Trainerlog />} />
       <Route path = '/trainer/dashboard' element = {<Trainerdashboard />} />
    </Routes>
    </>
  )
}

export default App;
