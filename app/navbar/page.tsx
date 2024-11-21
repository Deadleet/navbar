import React from 'react'
import styles from './styles.module.css'
import Navbar from '../UI/navbar'
import Count from '../UI/count'
import Twotime from '../UI/twotime'

const page = () => {
  return (
    <>
      <Navbar />
      <p className={styles.p}>Je suis le roi du monde</p>
      <Count />
      <Twotime />
    </>
  )
}

export default page
