import React from 'react'
import styles from './styles.module.css'
import Navbar from '../UI/navbar'
import Count from '../UI/count'

const page = () => {
  return (
    <>
      <Navbar />
      <p className={styles.p}>Je suis le roi du monde</p>
      <Count/>
    </>
  )
}

export default page
