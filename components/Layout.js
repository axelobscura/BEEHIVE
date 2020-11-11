import React, {Component} from 'react';
import Link from 'next/link'
import Head from 'next/head'

import styles from '../styles/Home.module.css'

class Layout extends Component {
  componentDidMount() {
    console.log('mount');
  }
  componentWillUnmount() {
    console.log('unmount');
  }
  render() {
    const { children, title = 'BEEHIVE WORKS | OUTSTANDING TECH' } = this.props;
    return (
      <div>
        <Head>
          <title>{ title }</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;400;900&display=swap" rel="stylesheet"></link>
        </Head>
        <header className={styles.header}>
          <nav className={styles.nav}>
            <Link href='/' className={styles.menux}><a>INICIO</a></Link>
            <Link href='/quienes-somos'><a className={styles.menux}>QUIÉNES SOMOS</a></Link>
            <Link href='/contacto'><a className={styles.menux}>CONTACTO</a></Link>
          </nav>
        </header>
            <div className={styles.container}>
                { children }
            </div>
        <footer className={styles.footer}>
          <p>© 2020 BEEHIVE WORKS | OUTSTANDING TECH. Todos Los Derechos Reservados.</p>
        </footer>
      </div>
    );
  }
}

export default Layout;