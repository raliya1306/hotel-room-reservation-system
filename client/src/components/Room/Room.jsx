import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import styles from './Room.module.css'

const Room = () => {
  return (
    <>
      <Navbar navbarimg='/nav.jpg' type='room' />
      <div className={styles.roomContainer}>
        <div className={styles.roomImg}>
          <img src='/minh-pham-OtXADkUh3-I-unsplash.jpg' />
          <img src='/point3d-commercial-imaging-ltd-oxeCZrodz78-unsplash.jpg' />
          <img src='/cheryl-winn-boujnida-jhDof9B6vPY-unsplash.jpg' />
          <img src='/reisetopia-B8WIgxA_PFU-unsplash.jpg' />
          <img src='/mk-s-G3-nF11X-_c-unsplash.jpg' />
        </div>
        <hr />
        <div className={styles.roomDetails}>
          <div className={styles.roomDesc}>
            An elegant solution for two/three, where you can enjoy an experience of comfort and refinement. The attention to detail is reflected in the chosen furnishings, characterized by natural materials to create a fresh. Some of them have a nice private terrace and they all overlook our patio. They offer a king size bed or 2 twin beds and can accommodate a maximum of 3 people (2 adults and 1 child ).
          </div>
          <ul className={styles.facilities}>
            <li className={styles.items}>
              Facilities
            </li>
            <li className={styles.items}>
              King size bed
            </li>
            <li className={styles.items}>
              2 - 3 guests
            </li>
            <li className={styles.items}>
              Wi-Fi
            </li>
            <li className={styles.items}>
              LED TV
            </li>
          </ul>
        </div>
        <div className={styles.priceContainer}>
          <span className={styles.text}>
            2 nights
          </span>
          <div className={styles.priceBtn}>
            <span className={styles.price}>
              LKR 12,000
            </span>
            <button className={styles.bookBtn}>
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Room