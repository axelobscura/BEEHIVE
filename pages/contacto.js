import Layout from '../components/Layout';
import Link from 'next/link';
import Image from 'next/image';

import styles from '../styles/Home.module.css'

export default function Contacto() {
  return (
    <Layout>
      <Link href='/'>
        <Image
          src="/images/logo.png"
          alt="BEEHIVE WORKS | OUTSTANDING TECH"
          width={500}
          height={142}
        />
      </Link>
      <h2 className={styles.titulo}>CONTACTO</h2>
    </Layout>
  )
}
