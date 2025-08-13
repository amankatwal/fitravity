
import './App.css'

import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import SIgnup from './pages/SIgnup';
import Plans from './pages/Plans';
import Trainerdashboard from './pages/Trainerdashboard';
import Trainersignup from './pages/Trainersignup';
import Trainerlog from './pages/Trainerlog';
import Training from './pages/Training';
import Chat from './pages/Chat';
import Dashboard from './pages/Dashboard';
import Dashboardlayout from './components/Dashboardlayout';
import Progress from './pages/Progress';
import Client from './pages/Client';


function App() {
  
  return (
    <>
    
    <Routes>
       
       <Route path='/' element = {<Home />} />
       <Route path='/login' element = {<Login />} />
       <Route path='/signup?' element = {<SIgnup />} />
       <Route path='/dashboard' element = {<Dashboardlayout />}>
       <Route index element = {<Dashboard />}/>
       <Route path ="progress" element = {<Progress />}/>
       <Route path ="training" element = {<Training />}/>
       <Route path ="training" element = {<Training />}/>
       <Route path ="training" element = {<Training />}/>
       <Route path = 'chat' element = {<Chat />} />
       </Route>
       <Route path='/plans' element = {<Plans />} />
       <Route path = '/trainer/signup' element = {<Trainersignup />}/>
       <Route path='/trainer/login' element= {<Trainerlog />} />
       <Route path = '/trainer/dashboard' element = {<Trainerdashboard />} />
       <Route path = "/trainer/client/:id" element = {<Client />} />
       
    </Routes>
    </>
  )
}

export default App;
