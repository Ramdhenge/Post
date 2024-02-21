import './App.css';
import { Routes, Route } from 'react-router-dom';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Feeds from './Components/Feeds';
import Index from './Components/Index';
import PostStateMng from './Context/post/PostStateMng';

function App() {
  return (
    <PostStateMng>
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/feeds' element={<Feeds />} />
          <Route path='/' element={<Index />} />
        </Routes>
    </PostStateMng>
  );
}

export default App;
