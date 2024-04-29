import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import styled from '@emotion/styled';
import { Route,BrowserRouter as Router,Routes } from 'react-router-dom';
import routes from './routes.jsx';
import store from './redux/store.js'
import Cookies from 'js-cookie';

import { login } from './redux/userSlice.js';

import { Counter } from './features/counter/Counter';
import './App.css';

import Wrapper from './Wrapper.jsx';

const Container=styled.div`
  height:100%;
  background-color:#FFDD87;
`;

function App() {
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
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <Counter />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <span>
    //       <span>Learn </span>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         React
    //       </a>
    //       <span>, </span>
    //       <a
    //         className="App-link"
    //         href="https://redux.js.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Redux
    //       </a>
    //       <span>, </span>
    //       <a
    //         className="App-link"
    //         href="https://redux-toolkit.js.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Redux Toolkit
    //       </a>
    //       ,<span> and </span>
    //       <a
    //         className="App-link"
    //         href="https://react-redux.js.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         React Redux
    //       </a>
    //     </span>
    //   </header>
    // </div>
    <>
    <Provider store={store}>
      <Container>
        <Router>
          <Routes>
            <Route path='/' element={<Wrapper />}>
              {elements}
            </Route>
          </Routes>
        </Router>
      </Container>
    </Provider>
    </>
  );
}

export default App;
