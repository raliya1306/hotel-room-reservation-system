import styles from './ContactUs.module.css'

const ContactUs = () => {
  return (
    <>
      <hr />
      <h1 className={styles.title}>Contact Us</h1>
      <div className={styles.container}>
        <div className={styles.containerItem}>
          <div className={styles.details}>
            <span>TELEPHONE: +94 112345678</span>
            <span>RESERVATIONS: +94 116347679</span>
            <span>WHATSAPP: +94 772749678</span>
            <span>EMAIL: reservation@oceania.com</span>
          </div>
        </div>
        <div className={styles.containerItem}>
          <img src='bas-van-den-eijkhof-LchLjOB-XvE-unsplash.jpg' />
        </div>
      </div>
    </>
  )
}

export default ContactUs