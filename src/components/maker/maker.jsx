import React, { useEffect } from 'react';
import styes from './maker.module.css';
import Footer from '../footer/footer';
import Header from '../header/header';
import { useNavigate } from 'react-router-dom';


const Maker = ({ authService }) => {
      const navigate = useNavigate();

      const onLogout = () => {
          authService.logout();
      };

      useEffect(() => {
          authService.onAuthChange(user => {
            if(!user) {
                navigate('/');
            }
          });
      });


return (
    <section className={styes.maker}>
        <Header onLogout={onLogout} />
        <Footer />
    </section>
    ); 
};

export default Maker;<h1>MAKER</h1>