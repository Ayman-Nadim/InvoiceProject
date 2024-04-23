// import React from 'react';
// import '../../css/GestionCompte.css'; // Assurez-vous d'avoir ce fichier CSS dans le même dossier

// const GestionCompte = () => {
//   return (
//     <div className="container GestionCompte">
//       <div className="box add">
//         <svg xmlns="http://www.w3.org/2000/svg" width="6em" height="6em" viewBox="0 0 24 24"><path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 10h3m3 0h-3m0 0V7m0 3v3M1 20v-1a7 7 0 0 1 7-7v0a7 7 0 0 1 7 7v1m-7-8a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></path></svg>
//         <div>Ajouter un utilisateur</div>
//       </div>
//       <div className="box management">
//       <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" viewBox="0 0 2048 2048"><path fill="white" d="M1148 1152q-83-62-179-95t-201-33q-88 0-170 23t-153 64t-129 100t-100 130t-65 153t-23 170H0q0-120 35-231t101-205t156-167t204-115q-56-35-100-82t-76-104t-47-119t-17-129q0-106 40-199t110-162T569 41T768 0t199 40t162 110t110 163t41 199q0 66-16 129t-48 119t-76 103t-101 83q60 23 113 54v152zM384 512q0 80 30 149t82 122t122 83t150 30q79 0 149-30t122-82t83-122t30-150q0-79-30-149t-82-122t-123-83t-149-30q-80 0-149 30t-122 82t-83 123t-30 149m1664 768v768H1024v-768h256v-256h512v256zm-640 0h256v-128h-256zm512 384h-128v128h-128v-128h-256v128h-128v-128h-128v256h768zm0-256h-768v128h768z"></path></svg>
//       <div>Editer les comptes</div>
//       </div>
//       <div className="box add-emmetteur">
//       <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" viewBox="0 0 24 24"><path fill="white" d="M3 6h13c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1s.45 1 1 1m12 11h2v-3h.18c.63 0 1.1-.58.98-1.2l-1-5c-.09-.46-.5-.8-.98-.8H2.82c-.48 0-.89.34-.98.8l-1 5c-.12.62.35 1.2.98 1.2H2v5c0 .55.45 1 1 1h7c.55 0 1-.45 1-1v-5h4zm-6 1H4v-4h5z"></path><path fill="white" d="M22 18h-2v-2c0-.55-.45-1-1-1s-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1"></path></svg><div>Ajouter un émetteur</div>
//       </div>
//     </div>
//   );
// }

// export default GestionCompte;

// import React, { useState } from 'react';
// import '../../css/GestionCompte.css'; // Assurez-vous d'avoir ce fichier CSS dans le même dossier

// const GestionCompte = () => {
//   const [formVisible, setFormVisible] = useState(false);
//   const [activeBoxId, setActiveBoxId] = useState(null);

//   const handleBoxClick = (boxId) => {
//     setActiveBoxId(boxId);  // Définit l'ID de la boîte active
//   };

//   const toggleFormVisibility = () => {
//     setFormVisible(!formVisible);
//   }

//   return (
//     <div className="GestionCompte">
//       <div className={`container ${formVisible ? "smaller" : ""}`}>
//         <div className="box add" onClick={toggleFormVisibility}>
//             <svg xmlns="http://www.w3.org/2000/svg" width="6em" height="6em" viewBox="0 0 24 24"><path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 10h3m3 0h-3m0 0V7m0 3v3M1 20v-1a7 7 0 0 1 7-7v0a7 7 0 0 1 7 7v1m-7-8a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></path></svg>
//             <div>Créer un utilisateur</div>
//         </div>
//         <div className="box management" onClick={toggleFormVisibility}>
//             <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="5em" viewBox="0 0 2048 2048"><path fill="white" d="M1148 1152q-83-62-179-95t-201-33q-88 0-170 23t-153 64t-129 100t-100 130t-65 153t-23 170H0q0-120 35-231t101-205t156-167t204-115q-56-35-100-82t-76-104t-47-119t-17-129q0-106 40-199t110-162T569 41T768 0t199 40t162 110t110 163t41 199q0 66-16 129t-48 119t-76 103t-101 83q60 23 113 54v152zM384 512q0 80 30 149t82 122t122 83t150 30q79 0 149-30t122-82t83-122t30-150q0-79-30-149t-82-122t-123-83t-149-30q-80 0-149 30t-122 82t-83 123t-30 149m1664 768v768H1024v-768h256v-256h512v256zm-640 0h256v-128h-256zm512 384h-128v128h-128v-128h-256v128h-128v-128h-128v256h768zm0-256h-768v128h768z"></path></svg>
//            <div>Gérer</div>
//         </div>
//         <div className="box add-emmetteur" onClick={toggleFormVisibility}>
//             <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" viewBox="0 0 24 24"><path fill="white" d="M3 6h13c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1s.45 1 1 1m12 11h2v-3h.18c.63 0 1.1-.58.98-1.2l-1-5c-.09-.46-.5-.8-.98-.8H2.82c-.48 0-.89.34-.98.8l-1 5c-.12.62.35 1.2.98 1.2H2v5c0 .55.45 1 1 1h7c.55 0 1-.45 1-1v-5h4zm-6 1H4v-4h5z"></path><path fill="white" d="M22 18h-2v-2c0-.55-.45-1-1-1s-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1"></path></svg>
//             <div>Ajouter un émetteur</div>
//         </div>
//       </div>
//       {formVisible && (
        // <form className="form">
        //   <input type="text" placeholder="Nom" required />
        //   <input type="email" placeholder="Adresse Email" required />
        //   <input type="password" placeholder="Mot de passe" required />
        //   <input type="password" placeholder="Mot de passe" required />
        //   <button type="submit">Enregistrer</button>
        // </form>
//       )}
//     </div>
//   );
// }

// export default GestionCompte;

import React, { useState } from 'react';
import '../../css/GestionCompte.css'; // Assurez-vous d'avoir ce fichier CSS dans le même dossier
import TableUsers from '../../Components/GestionComptes/TableUsers'

const GestionCompte = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [TableVisible, setTableVisible] = useState(false);
  const [activeBoxId, setActiveBoxId] = useState(null); 
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [users, setUsers] = useState([
    { id: 1, name: "Alice", email: "alice@example.com", password: "password123" ,},
    { id: 2, name: "Bob", email: "bob@example.com", password: "password456" },
    { id: 3, name: "Carol", email: "carol@example.com", password: "password789" },{ id: 1, name: "Alice", email: "alice@example.com", password: "password123" ,},
    { id: 2, name: "Bob", email: "bob@example.com", password: "password456" },
    { id: 3, name: "Carol", email: "carol@example.com", password: "password789" },
    { id: 1, name: "Alice", email: "alice@example.com", password: "password123" ,},
    { id: 2, name: "Bob", email: "bob@example.com", password: "password456" },
    { id: 3, name: "Carol", email: "carol@example.com", password: "password789" },
    { id: 1, name: "Alice", email: "alice@example.com", password: "password123" ,},
    { id: 2, name: "Bob", email: "bob@example.com", password: "password456" },
    { id: 3, name: "Carol", email: "carol@example.com", password: "password789" },
    { id: 1, name: "Alice", email: "alice@example.com", password: "password123" ,},
    { id: 2, name: "Bob", email: "bob@example.com", password: "password456" },
    { id: 3, name: "Carol", email: "carol@example.com", password: "password789" },
    { id: 1, name: "Alice", email: "alice@example.com", password: "password123" ,},
    { id: 2, name: "Bob", email: "bob@example.com", password: "password456" },
    { id: 3, name: "Carol", email: "carol@example.com", password: "password789" },
    { id: 1, name: "Alice", email: "alice@example.com", password: "password123" ,},
    { id: 2, name: "Bob", email: "bob@example.com", password: "password456" },
    { id: 3, name: "Carol", email: "carol@example.com", password: "password789" },
    { id: 1, name: "Alice", email: "alice@example.com", password: "password123" ,},
    { id: 2, name: "Bob", email: "bob@example.com", password: "password456" },
    { id: 3, name: "Carol", email: "carol@example.com", password: "password789" }
   ]);

    const handleBoxClick = (boxId) => {
    setActiveBoxId(boxId);  // Sets the active box ID

    if (boxId === 'create') {
        setTableVisible(false);
        setFormVisible(true);  // Shows the form when a box is clicked
    } else if (boxId === 'manage') {
        setFormVisible(false);
        setTableVisible(true);  // Assumes there is a similar hook for table visibility
    }
    // No need for an else block if there are no other actions to perform
    };

    const handleItemsPerPageChange = (e) => {
        setItemsPerPage(parseInt(e.target.value)); // Convertir la valeur en nombre entier
      };



  return (
    <div className="GestionCompte">
      <div className={`container ${formVisible ? "smaller" : ""}`}>
        <div className={`box add ${activeBoxId === 'create' ? 'active' : ''} ${activeBoxId !== null ? 'active-top' : ''}`} onClick={() => handleBoxClick('create')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 24 24"><path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 10h3m3 0h-3m0 0V7m0 3v3M1 20v-1a7 7 0 0 1 7-7v0a7 7 0 0 1 7 7v1m-7-8a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></path></svg>           
            <div>Créer un utilisateur</div>
        </div>
        <div className={`box management ${activeBoxId === 'manage' ? 'active' : ''} ${activeBoxId !== null ? 'active-top' : ''}`} onClick={() => handleBoxClick('manage')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="5em" viewBox="0 0 2048 2048"><path fill="white" d="M1148 1152q-83-62-179-95t-201-33q-88 0-170 23t-153 64t-129 100t-100 130t-65 153t-23 170H0q0-120 35-231t101-205t156-167t204-115q-56-35-100-82t-76-104t-47-119t-17-129q0-106 40-199t110-162T569 41T768 0t199 40t162 110t110 163t41 199q0 66-16 129t-48 119t-76 103t-101 83q60 23 113 54v152zM384 512q0 80 30 149t82 122t122 83t150 30q79 0 149-30t122-82t83-122t30-150q0-79-30-149t-82-122t-123-83t-149-30q-80 0-149 30t-122 82t-83 123t-30 149m1664 768v768H1024v-768h256v-256h512v256zm-640 0h256v-128h-256zm512 384h-128v128h-128v-128h-256v128h-128v-128h-128v256h768zm0-256h-768v128h768z"></path></svg>  
            <div>Editer les comptes</div>
        </div>

      </div>
      
      {formVisible && (
        <form className="form form-add-user">
            <div className="form-add-row">
                <div className="form-group">
                    <label htmlFor="nom">Nom</label>
                    <input id="nom" type="text" placeholder="Nom" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Adresse Email</label>
                    <input id="email" type="email" placeholder="Adresse Email" required />
                </div>
            </div>
            <div className="form-add-row">
                <div className="form-group">
                    <label htmlFor="password1">Mot de passe</label>
                    <input id="password1" type="password" placeholder="Mot de passe" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password2">Confirmer le mot de passe</label>
                    <input id="password2" type="password" placeholder="Mot de passe" required />
                </div>
            </div>
            <button type="submit">Enregistrer</button>
        </form>
      )}

      {TableVisible && (
        <div>
            <select
            id="itemsPerPageSelect"
            onChange={(e) => handleItemsPerPageChange(e)}
            title="Nombre de colonnes"
            >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
            </select>
            <TableUsers data={users} itemsPerPage={itemsPerPage} />
        </div>
        
      )}
    </div>
  );
}

export default GestionCompte;