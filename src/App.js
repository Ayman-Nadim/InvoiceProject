import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Menu from './Components/Header/Menu';
import Invoice from './Components/Invoice';
import Login2 from './Components/Login2';
import MainVisualiser from "./Components/Visualiser/MainVisualiser";
import MainSuivi from "./Components/Suivi/MainSuivi";
import GestionCompte from "./Components/GestionComptes/GestionCompte";
export default function App(){
    return(
        <>
            {/* <Login2/> */}
            {/* <Invoice/> */}
            {/* <MainVisualiser/> */}
            {/* <MainSuivi/> */}
            {/* <GestionCompte/> */}
            <BrowserRouter>
                <Menu/>
                <Routes>
                    <Route path='/Visualiser' element={<MainVisualiser/>}/>
                    <Route path='/Enregistrer' element={<Invoice/>}/>
                    <Route path="/Suivi" element={<MainSuivi/>}/>
                    <Route path="/Gestion des comptes" element={<GestionCompte/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

