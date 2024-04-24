import React from 'react';
import AuthProvider from '../contexts/auth/AuthProvider'
import Router from './Router'
import './App.scss'

const App = () => {
  return (
    <AuthProvider>
        <Router/>
    </AuthProvider>
  );
};

export default App;
