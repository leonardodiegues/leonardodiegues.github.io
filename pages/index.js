import Head from 'next/head'
import Link from 'next/link'

import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Leonardo Diegues</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar></Navbar>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>
    </div>
  )
}
