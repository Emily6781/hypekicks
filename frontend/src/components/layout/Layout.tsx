import React, { ReactNode } from 'react'

import styles from '@/styles/Layout.module.css';
import { Navbar } from '../navbar/Navbar';
import { Footer } from '../footer/Footer';

type LayoutProps = {
  children: ReactNode;
}

export const Layout = ({children}: LayoutProps) => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}
