import styles from "../styles/footer.module.css"
import Image from "next/image"

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.area}>
                <h1 className={styles.title}>She B.L.O.G.S</h1>
                <div className={styles.image}>
                <Image src="/images/icon.jpg" alt="" width="50" height="50"></Image>
                </div>
            </div>
            <div className={styles.area}>
                    <div className={styles.info}>
                        BLAH BLAH @TADEPALLIGUDEM <br/> ANDHRA<br/>INDIA
                    </div>
                    
             </div>
             <div className={styles.area}>
             <div className={styles.info}>
                        CONTACT@GMAIL.COM<br/> +91-XXXXXXXXXX
                    </div>
             </div>
        </div>
    )
}
export default Footer;