"use client";
import React, { useState } from 'react';
import styles from './count.module.css';

const Counter = () => {
  // Déclare une variable d'état avec useState
  const [count, setCount] = useState(0);

  // Fonction pour incrémenter le compteur
  const increment = () => {
    setCount(count + 1);
  };

  // Fonction pour décrémenter le compteur
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1 className={styles.h1}>Compteur : {count}</h1>
      <button onClick={increment}>Incrémenter</button>
      <button onClick={decrement}>Décrémenter</button>
    </div>
  );
};

export default Counter;
