import styles from '../styles/Navbar.module.css'
import Link from 'next/Link'

const Navbar = () => {
    return (
        <div className={styles.container}>
            <Link href="/">She B.L.O.G.S</Link>
            <ul className={styles.list}>
                <li className={styles.listItem}>
                    <Link href="/about">About</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/skills">Skills</Link>
                </li>
                
            </ul>
            
        </div>
    )
}
export default Navbar;