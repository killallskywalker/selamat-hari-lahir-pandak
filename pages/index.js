import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Selamat Hari Lahir Pandak!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <div>
            <img src="giphy.gif"/>
          </div>
          <a style={{color:" #ff6666"}}> Selamat Hari Lahir Pandak </a><a style={{color:"#ff6699"}}> Semoga Diberikan Kesihatan Yang Baik </a><a style={{color:" #cc99ff"}}> Dan Dimurahkan Rezeki </a>
        </h1>
      </main>
      <footer className={styles.footer}>
        <a>
          Powered by Ablong Labib
        </a>
      </footer>
    </div>
  )
}
