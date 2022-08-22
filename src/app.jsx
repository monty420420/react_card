import React from 'react';
import Login from './components/login/login';
import styles from './app.module.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Maker from './components/maker/maker';
import Error from './components/error/error';

//router
function App({authService}) {
  return (
    <div className={styles.app}>
    <BrowserRouter>
       <Routes>   
       <Route
           path="/"   
           element={<Login authService={authService} />} 
       />
       <Route
          path='/maker'    
          element={<Maker authService={authService} />}  
       />  
       <Route path='*' element={<Error />} />  
       </Routes>   
        
    </BrowserRouter>

    </div>
   
  );
}

export default App;
