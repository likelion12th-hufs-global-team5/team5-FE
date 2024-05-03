import { Provider } from 'react-redux';
import { Route,BrowserRouter as Router,Routes } from 'react-router-dom';
import store from './redux/store';
import styled from 'styled-components'

import Main from './pages/Main';
import Login from './pages/Login';
import JoinMembership from './pages/JoinMembership';
import Project from './pages/Project';
import Curriculum from './pages/Curriculum';
import Member from './pages/Member';
import Profile from './pages/Profile';

import theme from './styles/theme';


// router css
const Container=styled.div`
  height:100%;
  background-color:##FFDD87;
`;

function App() {
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
              <Route path='/curriculum' element={<Curriculum />} />
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
