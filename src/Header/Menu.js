import React from "react";
import '../css/Menu.css';
export default function Menu(){
    return(
        <>
            <div className="Menu sidebar">
                <header>
                    <div className="LOGO">
                        <marquee width='70%' behavior='alternate'><h2>Stg Community</h2></marquee>
                        <img src={require('../Ressources/Logo_ofppt.png')} alt="Logo_ofppt"/>
                    </div>
                    <div className="Profil">
                        <div>
                                <img src={require('../Ressources/Resume Picture whiteBG .png')} alt='Photo_Profil'/>
                        </div>
                        <div className="Infos">
                            <a href="#" className="Profil-Link" >
                                <p>Ayman Nadim</p>
                            </a>
                            <small><div className="green-circle"></div>En ligne</small>
                        </div>
                    </div>
                </header>
                <div className="menu-bar">
                    <div className="menu">
                        <ul className="menu-links">
                            <li className="nav-links"> 
                                <a href="#">
                                    <i class='icon bx bx-group'></i>
                                    <span className="text nav-text">Forum</span>
                                </a>
                            </li>
                            <li className="nav-links"> 
                                <a href="#">
                                    <i class='icon bx bx-chat'></i>
                                    <span className="text nav-text">Conversations</span>
                                </a>
                            </li>
                            <li className="nav-links"> 
                                <a href="#">
                                <i class='icon bx bx-calendar'></i>
                                    <span className="text nav-text">Plannings</span>
                                </a>
                            </li>
                            <li className="nav-links"> 
                                <a href="#">
                                    <i class='icon bx bxs-file'></i>
                                    <span className="text nav-text">Documents</span>
                                </a>
                            </li>
                            <li className="nav-links"> 
                                <a href="#">
                                    <i class='icon bx bxs-party'></i>
                                    <span className="text nav-text">Activitées scolaire</span>
                                </a>
                            </li>
                            <li className="nav-links"> 
                                <a href="#">
                                    <i class='icon bx bx-notification'></i>
                                    <span className="text nav-text">Notifications</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <footer>
                    <div className="Mode-Deconnexion">
                        <div className="Mode">
                            <a href="#" >
                                <i class='bx bx-moon' ></i>
                            </a>
                        </div>
                        <div className="Deconnexion">
                            <a href="#">
                                <i class='bx bx-log-out'></i>
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}