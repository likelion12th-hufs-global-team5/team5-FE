import React,{Component} from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";

import Main from './pages/Main';
import Project from './pages/Project';
import Curriculum from './pages/Curriculum';
import Profile from './pages/Profile';

const App = () => {
  return(
    <>
      <div className="App">
        <BrowserRouter>
          <Main />
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/Project" element={<Project />}></Route>
            <Route path="/Curriculum" element={<Curriculum />}></Route>
            <Route path="/Profile" element={<Profile />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;