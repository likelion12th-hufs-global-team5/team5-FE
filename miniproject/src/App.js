// App retrun 최상위 태그. 태그 안 store 속성 값으로 {store} 삽입
import { Provider } from 'react-redux';

import store from './redux/store';
import Cookies from 'js-cookie';

import {login} from './redux/userSlice';

import { Route,BrowserRouter as Router,Routes } from 'react-router-dom';

import React,{ useEffect } from 'react';
import styled from 'styled-components'

import Main from './pages/Main';
import Login from './pages/Login';
import JoinMembership from './pages/JoinMembership';
import Project from './pages/Project';
import ProjectUpload from './pages/ProjectUpload';
import ProjectDetail from './pages/ProjectDetail';
import Curriculum from './pages/Curriculum';
import CurriculumUpload from './pages/CurriculumUpload';
import CurriculumDetail from './pages/CurriculumDetail';
import Member from './pages/Member';
import Profile from './pages/Profile';

// router css
const Container=styled.div`
  /* height:100%; */
  /* background-color:#FFDD87; */
`;

function App() {
  useEffect(()=>{
    const accessToken=Cookies.get('accessToken');
    const id=Cookies.get('id');

    if (accessToken && id){
      store.dispatch(login({accessToken,id}));
    }
  },[])

  return (
    <>
      <Provider store={store}>
        <Container>
          <Router>
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/login' element={<Login />} />
              <Route path='/joinMembership' element={<JoinMembership />} />
              <Route path='/project' element={<Project />} />
              <Route path='/projectUpload' element={<ProjectUpload />} />
              <Route path='/projectDetail' element={<ProjectDetail />} />
              <Route path='/curriculum' element={<Curriculum />} />
              <Route path='/curriculumUpload' element={<CurriculumUpload />} />
              <Route path='/curriculumDetail' element={<CurriculumDetail />} />
              <Route path='/member' element={<Member />} />
              <Route path='/profile' element={<Profile />} />
            </Routes>
          </Router>
        </Container>
      </Provider>
    </>
  );
}

export default App;
