
import React,{useState} from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import './App.css';
import Pokemon from './Components/Pokemon';
import Home from './Components/Home';
import GitHub from './Components/GitHub';
import Ben10 from './Components/Ben10';
import Ben102 from './Components/Ben102';
import Protected from "./Components/Protected";
const App=()=> {
  const [isLoggedIn, setisLoggedIn] = useState(null);
  const logIn = () => {
  setisLoggedIn(true);
  };
  const logOut = () => {
  setisLoggedIn(false);
  };
  return (
    <>
    {isLoggedIn ? (
      <button onClick={logOut}>Logout</button>
      ) : (
      <button onClick={logIn}>Login</button>
      )}
    <BrowserRouter>
   
      <div className="router">

        <Link to="/">Home</Link>
        &emsp;&emsp;
        <Link to="/gitHub">GitHubUsers</Link>
        &emsp;&emsp;
        <Link to="/pokemon">Pokemon </Link>
        &emsp;&emsp;
        <Link to="/ben10">Ben10 </Link>
        
      </div>
    
      <Routes>

        <Route path="/pokemon" element={<Protected isLoggedIn={isLoggedIn}><Pokemon/></Protected>} />
        <Route path="/gitHub" element={<GitHub/>} />
        <Route path="/"  element={<Home/>}/>
        <Route path="/ben10"  element={<Ben10/>}/>
        <Route path="/ben102" element={<Ben102/>}/>
      </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;
