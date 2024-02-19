import React  from 'react'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AuthProvider, useAuth } from './AuthContext';

import Register from './components/Register'
import WelcomePage from './components/WelcomePage'
import Login from './components/Login'
import UserInfo from './components/UserInfo'
import Form from './components/Form'
import Dashboard from './components/Dashboard';
import UpdateProduct from './components/UpdateProduct';
import DisplayOne from './components/DisplayOne';
import MyProfile from './components/MyProfile';
import MyListings from './components/MyListings';
import Favorites from './components/Favorites';
import Rezervime from './components/Rezervime';
import Shpallje from './components/Shpallje';
import ShpalljeOne from './components/ShpalljeOne';
import './App.css'

function App() {
  const { user } = useAuth();
  const token = localStorage.getItem('token');
  return (
    <>
      <BrowserRouter>
        <Routes>
      {
            token ?(
              <>
                <Route path="/" element={<WelcomePage  user={user}/>} />
                <Route path="/dashboard" element={<Dashboard user={user} />}/>
                <Route path="create" element={<Form  user={user}/>} />
                <Route path="/userinfo" element={<UserInfo/>}/>
                <Route path="/mylistings" element={<MyListings/>}/>
                <Route path="/myprofile" element={<MyProfile/>}/>
                <Route path="/update/form/:id" element={<UpdateProduct />} />
                <Route path="/form/:id" element={<DisplayOne />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/reservations" element={<Rezervime />} />
                <Route path="/shpallje" element={<Shpallje />} />
                <Route path="/shpallje/:id" element={<ShpalljeOne />} />

              </>
            ) :
            (
            <>
                            <Route path="/create" element={<Form/>}/>
                            <Route path="/register" element={<Register />} />
                            <Route path="/" element={<WelcomePage />} />
                            <Route path="/login" element={<Login />} />
              </>
            )
          }
          </Routes>
      </BrowserRouter>

    </>
  )
}


{/* <BrowserRouter>
<Routes>
    <Route path="/register" element={<Register />} />
    <Route path="/" element={user ? <WelcomePage user={user}/> : <Navigate to="/login" replace/>} />
    <Route path="/login" element={<Login />} />

{
    user && (
      <>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="create" element={<Form  user={user}/>} />
        <Route path="/userinfo" element={<UserInfo/>}/>
        <Route path="/mylistings" element={<MyListings/>}/>
        <Route path="/myprofile" element={<MyProfile/>}/>
        <Route path="/update/form/:id" element={<UpdateProduct />} />
        <Route path="/forms/:id" element={<DisplayOne />} />
      </>
    ) }


      <Route path="*" element={<Login/>} />
  </Routes>
</BrowserRouter> */}


export default App

