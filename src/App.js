import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import firebase from './firebase';
import Navbar from './components/Navbar';
import Login from './components/Login';
import AddWeight from './components/AddWeight';
import SeeWeights from './components/SeeWeights';

export default function App() {
  
  const [userData, setUserData] = useState({ user: null, loading: false });

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) setUserData({ user, loading: false });
      else setUserData({ user: null, loading: false });
    });
  }, []);

  const handleLogin = () => {
    setUserData({ user: null, loading: true });
    firebase
      .auth()
      .signInAnonymously()
      .then(() => console.log("Logged In"))
  }

  const handleSignOut = () => {
    firebase
    .auth()
    .signOut()
    .then(() => console.log("Signed Out"))
  }

  return userData.user ?
    <div>
      <Navbar handleSignOut={handleSignOut} />
      <AddWeight userId={userData.user.uid} />
      <SeeWeights userId={userData.user.uid} />
    </div> : 
    <Login handleLogin={handleLogin} loading={userData.loading} />;
}

