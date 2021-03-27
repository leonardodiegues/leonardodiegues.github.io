import Head from 'next/head'

import Navbar from '../components/Navbar/Navbar';
import Portfolio from '../components/Portfolio/Portfolio';

import { projects } from "../public/data/projects.json"


export default function Home() {
  return (
    <div className="container">

      <Head>
        <title>leonardo diegues</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <Portfolio projects={projects}/>
      </main>

    </div>
  )
}
