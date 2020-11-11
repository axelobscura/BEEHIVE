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
          alt="BEEHIVE WORKS | OUTSTANDING TECH"
          width={500}
          height={142}
        />
      </Link>
      <h2 className={styles.titulo}>QUIÉNES SOMOS</h2>
      <p className={styles.textoa}>En 2015, la ONU aprobó la <b>Agenda 2030 sobre el Desarrollo Sostenible</b>, una oportunidad para que los países y sus sociedades emprendan un nuevo camino con el que mejorar la vida de todos, sin dejar a nadie atrás.<br/><br/>La Agenda cuenta con <b>17 Objetivos de Desarrollo Sostenible</b>, que incluyen desde la eliminación de la pobreza hasta el combate al cambio climático, la educación, la igualdad de la mujer, la defensa del medio ambiente o el diseño de nuestras ciudades.<br/><br/>Es aquí donde decidimos subscribirnos a esta agenda y las <b>siguientes metas</b>:</p>
    </Layout>
  )
}
