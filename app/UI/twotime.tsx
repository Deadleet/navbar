'use client';
import React, { useState } from 'react';
import styles from './twotime.module.css';

const MultiplicationForm: React.FC = () => {
  // Déclare l'état pour stocker la valeur du champ (string) et le résultat (number ou null)
  const [number, setNumber] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);

  // Fonction pour mettre à jour l'état avec la valeur saisie
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
  };

  // Fonction pour calculer la multiplication par 2
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Empêche le rechargement de la page
    const num = parseFloat(number); // Convertit la chaîne en nombre
    if (!isNaN(num)) {
      setResult(num * 2); // Multiplie le nombre par 2 et met à jour le résultat
    } else {
      setResult(null); // Si ce n'est pas un nombre valide, remet le résultat à null
    }
  };

  return (
    <div>
      <h1 className={styles.colorText}>Multiplier un nombre par 2</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={number}
          onChange={handleChange}
          placeholder="Entrez un chiffre"
        />
        <button type="submit">Calculer</button>
      </form>

      {result !== null && (
        <p className={styles.colorText}>Le résultat de {number} multiplié par 2 est : {result}</p>
      )}
    </div>
  );
};

export default MultiplicationForm;
