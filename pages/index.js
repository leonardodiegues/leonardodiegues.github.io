import Head from 'next/head'
import Link from 'next/link'

import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>leonardo diegues</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar></Navbar>
      </main>
    </div>
  )
}
