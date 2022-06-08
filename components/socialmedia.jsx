import styles from "../styles/socialmedia.module.css"
import Circle from "./circle";
import App from '../components/data'
const Socialmedia = () => {
    return (
        <div className={styles.container}>
            <Circle backgroundColor="skyblue" bottom="40vh" right="0vh"></Circle>
            <Circle backgroundColor="skyblue" top="40vh" left="30vh"></Circle>
            <h1 className={styles.title}>Social Media</h1>
            <App/>
            <div className={styles.parent}>
                <div className={styles.child}>The One Where I started watching series</div>
                <div className={styles.child}>The One Where I wanted to be a member</div>
                <div className={styles.child}>One of my favourite animator insipiration</div>
                <div className={styles.child}>My favourite Song</div>
            </div>
        </div>
    )
}
export default Socialmedia;