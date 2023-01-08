import React from 'react';
import Logo from './img/logo.png'

function SplashScreen() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <img src={Logo} style={{width: '100%'}} alt="Logo" />
      <p>Carregando...</p>
    </div>
  );
}

export default SplashScreen;