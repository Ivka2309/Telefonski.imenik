import React, { useState, useEffect } from 'react';
import './imenik.css';

const Imenik = ({ kontakti }) => {
  const [prikazaniKontakti, setPrikazaniKontakti] = useState([]);

  useEffect(() => {
    try {
      const sacuvaniKontakti = JSON.parse(localStorage.getItem('kontakti')) || [];
      console.log('Učitani kontakti prilikom inicijalizacije:', sacuvaniKontakti);
      setPrikazaniKontakti(sacuvaniKontakti);
    } catch (error) {
      console.error('Greška pri učitavanju kontakata iz localStorage-a:', error);
    }
  }, []); // Prilikom prvog rendera

  const sacuvajKontakteULocalStorage = (noviKontakti) => {
    try {
      localStorage.setItem('kontakti', JSON.stringify(noviKontakti));
    } catch (error) {
      console.error('Greška pri čuvanju kontakata u localStorage:', error);
    }
  };

  const obrisiKontakt = (index) => {
    const noviKontakti = [...prikazaniKontakti];
    noviKontakti.splice(index, 1);
    setPrikazaniKontakti(noviKontakti);
    
    // Save the updated contacts to local storage
    sacuvajKontakteULocalStorage(noviKontakti);
  };

  return (
    <div className="imenik-container">
      <h1>Imenik</h1>
      <ul>
        {prikazaniKontakti.map((kontakt, index) => (
          <li key={index}>
            {kontakt.ime} - {kontakt.broj}
            <button onClick={() => obrisiKontakt(index)}>Obriši</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Imenik;
