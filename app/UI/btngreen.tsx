'use client'
import React from 'react'
import styles from './btngreen.module.css'
import Image from "next/image";
import { useState } from 'react';

const btngreen = () => {

  // Déclaration d'un état standard
  const [btn, setBtn] = useState<string>('green'); // Exemple avec un string

  // Fonction pour gérer les mises à jour
  const handleClick = () => {
    setBtn(btn === 'green' ? 'red' : 'green'); // Alterne entre "green" et "red"
  };

  return (
    <>
<button className={styles.btn} onClick={handleClick} style={{ backgroundColor: btn }}>
<div className={styles.centerDiv}>
          <span>Survol</span>
          <span className={styles.firstChoice}>
            <Image
            className={styles.img1}
            src="/images/un.png"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
            />
          </span>
          <span className={styles.secondChoice}>
            <Image
            className={styles.img2}
            src="/images/deux.png"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
            />
          </span>
        </div>
      </button>
    </>
  )
}

export default btngreen
