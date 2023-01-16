import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Features from './pages/Features';
import SignIn from './pages/SignIn';
import Register from './pages/Register';

function App() {
  return (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/features' exact element={<Features />} />
    <Route path='/signin' exact element={<SignIn />} />
    <Route path='/registration' exact element={<Register />} />
  </Routes>
 )
}

export default App;
