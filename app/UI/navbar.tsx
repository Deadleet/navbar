import React from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <>
      <div className={styles.decal}></div>
      <div className={styles.centerNavbar}>
        <div className={styles.navbar}>
          <span className={styles.logo}>
          <Image
          className={styles.logos}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
          </span>
          <span className={styles.lineSeparator}>
            <div className={styles.line}></div>
          </span>
          <span className={styles.links}>
            <Link href="/" className={styles.link}>
              <span>About</span>
            </Link>
            <Link href="/" className={styles.link}>
              <span>Contact Us</span>
            </Link>
          </span>
        </div>
      </div>

    </>
  )
}

export default Navbar
