import React, { useState } from 'react';
import DodajKontakt from './DodajKontakt';
import Imenik from './Imenik';
import './App.css';

function App() {
  const [trenutniEkran, setTrenutniEkran] = useState('Imenik');
  const [kontakti, setKontakti] = useState([]);

  const sacuvajULocalStorage = (noviKontakti) => {
    try {
      localStorage.setItem('kontakti', JSON.stringify(noviKontakti));
    } catch (error) {
      console.error('Greška pri čuvanju kontakata u localStorage:', error);
    }
  };

  const ucitajIzLocalStorage = () => {
    try {
      const sacuvaniKontakti = JSON.parse(localStorage.getItem('kontakti')) || [];
      setKontakti(sacuvaniKontakti);
    } catch (error) {
      console.error('Greška pri učitavanju kontakata iz localStorage-a:', error);
    }
  };

  const promeniEkran = (ekran) => {
    setTrenutniEkran(ekran);
  };

  const dodajKontakt = (noviKontakt) => {
    const noviKontakti = [...kontakti, noviKontakt];
    setKontakti(noviKontakti);
    sacuvajULocalStorage(noviKontakti);
    promeniEkran('Imenik');
  };

  const obrisiKontakt = (index) => {
    const noviKontakti = [...kontakti];
    noviKontakti.splice(index, 1);
    setKontakti(noviKontakti);
    sacuvajULocalStorage(noviKontakti);
  };

  return (
    <div className="roditelj-container">
      <div className="prozor">
        {trenutniEkran === 'Imenik' && <Imenik kontakti={kontakti} obrisiKontakt={obrisiKontakt} />}
        {trenutniEkran === 'DodajKontakt' && <DodajKontakt dodajKontakt={dodajKontakt} />}
      </div>
      <div className="dugmici-container">
        <button onClick={() => promeniEkran('DodajKontakt')}>Novi Kontakt</button>
        <button onClick={() => promeniEkran('Imenik')}>Lista</button>
      </div>
    </div>
  );
}

export default App;
