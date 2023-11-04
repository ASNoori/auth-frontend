import './App.css';
import Signup from './Signup';
import Login from './Login';
import Home from './Home'
import {Route,Routes} from 'react-router-dom';
function App() {
  return (
    <>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/' element={<Login/>}/>
    </Routes>
    </>
  );
}

export default App;
