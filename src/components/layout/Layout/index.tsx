import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import styles from './index.module.scss';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
