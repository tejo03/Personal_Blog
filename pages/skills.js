import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/skills.module.css'
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
        {/* <Circle backgroundColor="skyblue" top="10vh" left="0vh"></Circle>
            <Circle backgroundColor="yellow" top="25vh" right="40vh"></Circle>
            <Circle backgroundColor="#0000CD" top="75vh" right="75vh"></Circle>
            <Circle backgroundColor="#F6BE00" top="40vh" left="60vh"></Circle>
            <Circle backgroundColor="red" top="80vh" left="15vh"></Circle>
            <Circle backgroundColor="orange" top="0vh" right="100vh"></Circle>
            <Circle backgroundColor="black" top="60vh" right="0vh"></Circle>
            <Circle backgroundColor="orange" top="120vh" right="100vh"></Circle>
            <Circle backgroundColor="black" top="60vh" right="0vh"></Circle>
              */}
        <div className={styles.container1}>
        <div className={styles.area}>
        <div className={styles.space}>
            <div className={styles.block}>
                <Image src="/images/c.png" height="200px" width="200px"></Image>
                <br/>
                C Programming
                <br/>
                Intermediate

            </div>
            
            </div>
            <div className={styles.space}>
            <div className={styles.block}>
                <Image src="/images/c++.png" height="200px" width="200px"></Image>
                <br/>
                C++ Programming
                <br/>
                Intermediate

            </div>
            </div>
            <div className={styles.space}>
            <div className={styles.block}>
                <Image src="/images/java.jpg" height="200px" width="175px"></Image>
                <br/>
                Java Programming
                <br/>
                Intermediate

            </div>
            </div>
            <div className={styles.space}>
            <div className={styles.block}>
                <Image src="/images/python.jpg" height="200px" width="200px"></Image>
                <br/>
                Python Programming
                <br/>
                Intermediate

            </div>
            </div>
            <div className={styles.space}>
            <div className={styles.block}>
                <Image src="/images/html.png" height="200px" width="200px"></Image>
                <br/>
                HTML
                <br/>
                Intermediate

            </div>
            </div>
            
        </div>
        <div className={styles.area}>
        <div className={styles.space}>
            <div className={styles.block}>
                <Image src="/images/css.jpg" height="200px" width="150px"></Image>
                <br/>
                CSS
                <br/>
                Intermediate

            </div>
            
            </div>
            <div className={styles.space}>
        <div className={styles.block}>
                <Image src="/images/javascript.png" height="300px" width="400px"></Image>
                <br/>
                JavaScript
                <br/>
                Intermediate

            </div>
            </div>
            <div className={styles.space}>
            <div className={styles.block}>
                <Image src="/images/bootstrap.png" height="200px" width="200px"></Image>
                <br/>
                Bootstrap
                <br/>
                Intermediate

            </div>
            </div>
            <div className={styles.space}>
            <div className={styles.block}>
                <Image src="/images/react.png" height="200px" width="200px"></Image>
                <br/>
                React
                <br/>
                Intermediate

            </div>
            </div>
            <div className={styles.space}>
            <div className={styles.block}>
                <Image src="/images/nextjs.png" height="200px" width="200px"></Image>
                <br/>
                NextJs
                <br/>
                Intermediate

            </div>
            </div>
           
            
        </div>
        <div className={styles.area}>
        <div className={styles.space}>
            <div className={styles.block}>
                <Image src="/images/linux.jpg" height="200px" width="200px"></Image>
                <br/>
                Linux
                <br/>
                Beginner- Just working of terminals

            </div>
            </div>
            <div className={styles.space}>
            <div className={styles.block}>
                <Image src="/images/nodejs.png" height="200px" width="250px"></Image>
                <br/>
                Nodejs
                <br/>
                Beginner

            </div>
            </div>
            <div className={styles.space}>
            <div className={styles.block}>
                <Image src="/images/mysql.png" height="200px" width="250px"></Image>
                <br/>
                MySQL
                <br/>
                Intermediate

            </div>
            </div>
        </div>
        </div>
    </div>
    )
}