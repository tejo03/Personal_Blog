import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import Intro from '../components/intro'
import Socialmedia from '../components/socialmedia'
export default function Home() {
  return (
    <div>
      <Head>
        <title>She B.L.O.G.S</title>
        <meta name="description" content="A Developer" />
        <link rel="icon" href="/favicon1.ico/"></link>
      </Head>
     <Navbar/>
     <Intro/>
     <Socialmedia/>
     
     <Footer/>
     
    </div>
  );
}
