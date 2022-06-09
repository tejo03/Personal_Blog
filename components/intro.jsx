import styles from "../styles/intro.module.css"
import Image from "next/image";
import Circle from "./circle";
const Intro = () => {
    return (
        <div className={styles.container}>
            <Circle backgroundColor="skyblue" top="10vh" left="0vh"></Circle>
            <Circle backgroundColor="skyblue" top="25vh" right="40vh"></Circle>
            <Circle backgroundColor="skyblue" top="75vh" right="75vh"></Circle>
            <Circle backgroundColor="skyblue" top="40vh" left="60vh"></Circle>
            <Circle backgroundColor="skyblue" top="80vh" left="15vh"></Circle>
            <Circle backgroundColor="skyblue" top="0vh" right="100vh"></Circle>
            <Circle backgroundColor="skyblue" top="60vh" right="0vh"></Circle>
            
            <div className={styles.area}>
                <h1 className={styles.title}>The One Where I started a</h1>
                <h1 className={styles.blog}>BLOG</h1>
                <p className={styles.caption}>Want to know more about me...</p>
                <button className={styles.button}>discover</button>
            </div>
            <div className={styles.area}>
            <Image src="/images/hello.jpg" alt="" width="200%" height="100%" layout="fill" ></Image>
            </div>
        </div>
    )
}
export default Intro;