import React, { useState } from 'react';
import '../css/login.css'; // Assurez-vous de créer un fichier Form.css pour les styles
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {

return (
  <>
    <div class="Main-login container-fluid fade-in">
        <div class="row no-gutter">
                <div class="col-md-6 d-none d-md-flex bg-image"></div>
                <div class="col-md-6 bg-light test">
                    <div class="login d-flex align-items-center py-5">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-10 col-xl-7 mx-auto">
                                    <h3 class="display-4">Login</h3>
                                    <p class="text-muted mb-4">Merci de remplire vos donnees </p>
                                    <form>
                                        <div class="form-group mb-3">
                                            <input id="inputEmail" type="email" placeholder="Email address" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4"/>
                                        </div>
                                        <div class="form-group mb-3">
                                            <input id="inputPassword" type="password" placeholder="Password" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"/>
                                        </div>
                                        <div class="form-group form-check mb-3">
                                            <input id="rememberMe" type="checkbox" class="form-check-input"/>
                                            <label for="rememberMe" class="form-check-label">Remember Me</label>
                                        </div>
                                        <button type="submit" class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Sign in</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
        </div>
    </div>
  </>
);

};

export default Login;
