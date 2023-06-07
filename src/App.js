import React, { useEffect, useState } from 'react';
import {Container} from 'react-bootstrap'
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import HomeScreen from './components/screens/HomeScreen';
import LoginScreen from './components/screens/login'
import {Redirect, Route, Switch, useHistory} from 'react-router-dom'
import HomeScreen2 from './components/screens/HomeScreen2';

import "./_app.scss"
import { useSelector } from 'react-redux';
import WatchScreen from './components/screens/WatchScreen';

const Layout = ({children}) =>{

  const [sidebar,toggleSidebar] =useState(false);

  const handleToggleSidebar = () => toggleSidebar(value => !value)
  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app__container">
        <Sidebar 
        sidebar={sidebar}
        handleToggleSidebar={handleToggleSidebar}/>
    <Container fluid className="app__main">
      {children}
    </Container>    
      </div>
    </>
  );
  
}

const App = () => {

  const {accessToken, loading} = useSelector(state=>state.auth)
  const history = useHistory()
  useEffect(()=>{

     if(!loading && !accessToken){
      history.push('/')

     }

  },[accessToken,loading,history])

  return (


    <Switch>
    <Route path="/" exact>
      <Layout>
        <HomeScreen2/>
      </Layout>
    </Route>
    <Route path='/auth'>
      <LoginScreen/>
    </Route>
    <Route path='/search'>
      <Layout>
        <h1>Search Result</h1>
      </Layout>
    </Route>
    <Route path='/watch/:key'>
      <Layout>
       <WatchScreen/>
      </Layout>
    </Route>

    <Route>
      <Redirect to='/' />
    </Route>

    </Switch>     

  )
 
}

export default App;
