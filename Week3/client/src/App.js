import {UserContext} from './context/UserProvider'
import React, { useContext } from 'react';
import Navbar from './components/Navbar';
import { Routes, Route, Navigate } from 'react-router-dom'
import Auth from './components/Auth'
import Profile from './components/Profile'


function App() {
  const {token, logout} = useContext(UserContext)
  return (
    <div className='app'>
      <Navbar logout={logout}/>
      <Routes>
        <Route
        exact path='/'
        render={() => token ? <Navigate to="/profile"/> : <Auth/>}
        />
        <Route
        path='/profile'
        render={() => <Profile/>}
        />
      </Routes>
    </div>
  )
}

export default App;
