import Layout from '../components/Layout';
import Link from 'next/link';
import Image from 'next/image';

import styles from '../styles/Home.module.css'

export default function Somos() {
  return (
    <Layout>
      <Link href='/'>
        <Image
          src="/images/logo.png"
          alt="BEEHIVE WORKS | OUTSTANDING TECH | MÉXICO"
          width={500}
          height={142}
          className={styles.shaker}
        />
      </Link>
      <h2 className={styles.titulo}>QUIÉNES SOMOS</h2>
      <h2 className={styles.titulo}>OTRO LINK</h2>
    </Layout>
  )
}
