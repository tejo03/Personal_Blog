import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/about.module.css'
import Navbar from '../components/Navbar'
import Circle from '../components/circle'
export default function About() {
    return(
        <div className={styles.container}>
            <Head>
        <title>She B.L.O.G.S</title>
        <meta name="description" content="A Developer" />
        <link rel="icon" href="/favicon1.ico/"></link>
      </Head>
        <Navbar/>
        
        <Circle backgroundColor="grey" top="10vh" left="0vh"></Circle>
            <Circle backgroundColor="grey" top="25vh" right="40vh"></Circle>
            <Circle backgroundColor="grey" top="75vh" right="75vh"></Circle>
            <Circle backgroundColor="grey" top="40vh" left="60vh"></Circle>
            <Circle backgroundColor="grey" top="80vh" left="15vh"></Circle>
            <Circle backgroundColor="grey" top="8vh" right="100vh"></Circle>
            <Circle backgroundColor="grey" top="60vh" right="0vh"></Circle>
               
        <h1 className={styles.title}>Personal Life</h1>
        <div className={styles.area}>
            
            <div className={styles.text}>
                <p>Where do I start.... Fine I&apos;ll start with my interest of exploring new things. I always like to explore new stuff and travelling to 
                    new places which I forgot to say that I&apos;m a nature lover. One can always find a ray of peace in little things like the greenery in the
                    nature, smell of the earth just before the rain, happiness in eyes of other people when we helped them or due to any debt of gratitude, 
                    by hearing the birds chirping , the sound of waterfalls and last but not the least the loyality of animals. Though they might not talk 
                    they express their feelings with their eyes and by their actions.
                </p>
            </div>
            <div className={styles.image}>
            <Image src="/images/nature.jpg" alt="" height="750px" width="750px"></Image>
            </div>
        </div>
        <h1 className={styles.title}>Professional Life</h1>
        <div className={styles.area}>
            
            <div className={styles.text}>
                <p>I&apos;m a student of National Institute of Technology currently pursuing 2nd year Batchelors in the field of Computer Science.
                    I&apos;m a student with creative mindset. I once thought of pursuing my life on Animations as I was good at drawing but due to 
                    my fears I haven&apos;t dared enough to make it as my main career. Then started my life as a B.Tech student, with a good academic
                    record hoping for a beautiful life ahead.
                </p>
            </div>
            <div className={styles.image}>
            <Image src="/images/ambitious1.jpg" alt="" height="450px" width="550px"></Image>
            </div>
        </div>
        </div>

    )
}