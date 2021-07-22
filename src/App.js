import React, { useEffect } from 'react';
import './Header.css';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { login, logout, selectUser } from './features/userSlice';
import Login from './Login';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import Widgets from './Widgets';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=> {
    auth.onAuthStateChanged((userAuth) => {
      if(userAuth){
        //user logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }));
      }
      else{
        //user logged out
        dispatch(logout());
      }
    })
  },[])
  return (
    <div className="App">
      <Header />
      {!user ? (<Login />) :
        (
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        )}
    </div>
  );
}

export default App;

// 2021-8-21 "auth != null"