// DodajKontakt.js
import React, { useState } from 'react';
import './dodajKontakt.css';

const DodajKontakt = ({ dodajKontakt }) => {
  const [ime, setIme] = useState('');
  const [broj, setBroj] = useState('');

  const sacuvajKontakt = () => {
    if (ime.trim() === '' || broj.trim() === '') {
      alert('Unesite ime i broj telefona.');
      return;
    }

    const noviKontakt = {
      ime: ime,
      broj: broj,
    };

    dodajKontakt(noviKontakt);
    setIme('');
    setBroj('');
  };

  const dodajBroj = (broj) => {
    setBroj(prevBroj => prevBroj + broj);
  };

  const obrisiZadnjiBroj = () => {
    setBroj(prevBroj => prevBroj.slice(0, -1));
  };

  return (
    <div className="dodaj-kontakt-container">
      <div className="prozorDK">
        <p>Dodaj Kontakt</p>
        <form>
          <label>
            Ime:
            <input type="text" value={ime} onChange={(e) => setIme(e.target.value)} />
          </label>
          <br />
          <label>
            Broj telefona:
            <input type="text" value={broj} onChange={(e) => setBroj(e.target.value)} />
          </label>
          <div className="numericka-tastatura">
            <div>
              <button id="button" type="button" onClick={() => dodajBroj('1')}>1</button>
              <button id="button"type="button" onClick={() => dodajBroj('2')}>2</button>
              <button id="button"type="button" onClick={() => dodajBroj('3')}>3</button>
            </div>
            <div>
              <button id="button" type="button" onClick={() => dodajBroj('4')}>4</button>
              <button id="button" type="button" onClick={() => dodajBroj('5')}>5</button>
              <button id="button" type="button" onClick={() => dodajBroj('6')}>6</button>
            </div>
            <div>
              <button id="button"type="button" onClick={() => dodajBroj('7')}>7</button>
              <button id="button" type="button" onClick={() => dodajBroj('8')}>8</button>
              <button id="button"type="button" onClick={() => dodajBroj('9')}>9</button>
            </div>
            <div>
              <button id="buttonZero"type="button" onClick={() => dodajBroj('0')}>0</button>
              <button type="button" onClick={obrisiZadnjiBroj}>Del</button>
            </div>
          </div>
          <button type="button" onClick={sacuvajKontakt}>
            Sačuvaj Kontakt
          </button>
        </form>
      </div>
    </div>
  );
};

export default DodajKontakt;
