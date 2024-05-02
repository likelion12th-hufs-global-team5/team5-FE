import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import styled from '@emotion/styled';
import { Route,BrowserRouter as Router,Routes } from 'react-router-dom';
import routes from './routes.jsx';
import store from './redux/store.js'
import Cookies from 'js-cookie';

import { login } from './redux/userSlice.js';

import GlobalStyle from './styles/GlobalStyle.js';
import Wrapper from './Wrapper.jsx';

import Signin from './pages/Signin.jsx';

const Container=styled.div`
  wedth : 1280px;
  height:100%;
  background-color:#FFDD87;
`;


function App() {
    //routes map함수 돌려서 elements에 선언.
    const elements=routes.map((item,index)=>{
      <Route key={index} path={item.path} elements={item.element} />
    });
  
    useEffect(()=>{
      const accessToken=Cookies.get('accessToken');
      const email=Cookies.get('email');
      const id=Cookies.get('id');
  
      if (accessToken && id){
        StorageEvent.dispatch(login({accessToken,id,email}));
      }
    },[]);


    return(
        <Provider store={store}>
            <Container>
                <Router>
                    <Routes>
                        <Route path='/' element={<Wrapper />}>
                            {elements}
                        </Route>
                    </Routes>
                </Router>
                            <Signin />
            </Container>
        </Provider>
    );
}

export default App;