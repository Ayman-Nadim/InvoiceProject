import React, { useState } from 'react';
import '../css/Login2.css'; // Assurez-vous de créer un fichier Form.css pour les styles

const Login2 = () => {

  return (
    <div className="Mycontainer Main-login">
      <div className="Mycolumn bg-image image">
      </div>
      <div className="Mycolumn">
            <div className='login'>
                <h3 class="display-4">Se connecter</h3>
                <p class="text-muted mb-4">Merci de remplire vos donnees </p>
                <form>
                    <div class="MyMyform-group mb-3">
                        <input id="inputEmail" type="email" placeholder="Email address" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4"/>
                    </div>
                    <div class="MyMyform-group mb-3">
                        <input id="inputPassword" type="password" placeholder="Password" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"/>
                    </div>
                    <div class="Myform-group Myform-check mb-3">
                        <input id="rememberMe" type="checkbox" class="form-check-input"/>
                        <label for="rememberMe" class="form-check-label">Se souvenir de moi</label>
                    </div>
                    <button type="submit" class="Mybtn ">SIGN IN</button>
                </form>
            </div>
      </div>
    </div>
  );
};

export default Login2;
