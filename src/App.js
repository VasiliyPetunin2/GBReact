import './App.css';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from './Home';
import Chat from './Chat';
import Profile from './Profile';
import CatFacts from './CatFacts';

function App() {
  return (
    
      <div className='container'>
        <BrowserRouter>
          <div className='appNavBar'>
            <Link to='/'>Home</Link>
          </div>
          <div className='content'>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='chats' element={<Chat />}/>
              <Route path='chats'>
                <Route path=':chatID' element={<Chat />}/>
              </Route>
              <Route path='profile' element={<Profile />}/>
              <Route path='catFacts' element={<CatFacts />}/>
            </Routes>
          </div>
        </BrowserRouter>
      </div>

  );
}

export default App;
