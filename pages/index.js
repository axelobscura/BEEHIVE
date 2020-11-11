import Layout from '../components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import Particles from 'react-particles-js';

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <Particles 
        className={styles.particulas}
        params={{
          particles: {
            color: {
              value: "#E5B131"
            },
            line_linked: {
              color: {
                value: "#f2f2f2"
              }
            },
            number: {
              value: 150
            },
            size: {
              value: 3
            }
          }
        }}
      />
      <Link href='/quienes-somos'>
        <Image
          src="/images/logo.png"
          alt="BEEHIVE WORKS | OUTSTANDING TECH"
          width={500}
          height={142}
          className={styles.shaker}
        />
      </Link>
    </Layout>
  )
}
