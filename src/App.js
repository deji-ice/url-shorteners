import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Register from './pages/Register';

function App() {
  return (

  <Routes>
    <Route path='/' exact element={<Home />} />
    <Route path='/signin' exact element={<SignIn />} />
    <Route path='/registration' exact element={<Register />} />
  </Routes>
 )
}

export default App;
