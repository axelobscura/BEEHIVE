import Layout from '../components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import Particles from 'react-particles-js';

import styles from '../styles/Home.module.css'

function Home({ profiles, page, pageCount }) {
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
      <ul>
        {profiles.map((p) => (
          <li className="profile" key={p.id}>
            <Link href={`/profile?id=${p.id}`}>
              <a>
                <img src={p.avatar} />
                <span>{p.name}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
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

export async function getServerSideProps({ req, query }) {
  const protocol = req.headers['x-forwarded-proto']
  const host = req.headers['x-forwarded-host']
  const page = query.page || 1
  const limit = query.limit || 9

  const res = await fetch(
    `${protocol}://${host}/api/profiles?page=${page}&limit=${limit}`
  )
  const data = await res.json()

  return { props: data }
}

export default Home;