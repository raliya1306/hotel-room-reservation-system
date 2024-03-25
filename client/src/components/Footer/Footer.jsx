import styles from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedinIn, faSquareFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <>
      <hr />
      <div className={styles.footer}>
        <div className={styles.lists}>
          <div className={styles.listItem}>
            <span className={styles.text}>Follow Us</span>
            <div className={styles.icons}>
              <FontAwesomeIcon icon={faSquareFacebook} size='xl' />
              <FontAwesomeIcon icon={faInstagram} size='xl' />
              <FontAwesomeIcon icon={faTwitter} size='xl' />
              <FontAwesomeIcon icon={faLinkedinIn} size='xl' />
            </div>
          </div>
          <ul className={styles.list}>
            <li className={styles.listItem}>About Us</li>
            <li className={styles.listItem}>Blog</li>
            <li className={styles.listItem}>Careers</li>
            <li className={styles.listItem}>Contact</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Footer