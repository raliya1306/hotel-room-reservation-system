import styles from './Rooms.module.css'

const Rooms = () => {
  return (
    <>
      <h1 className={styles.title}>ROOMS</h1>
      <div className={styles.roomsList}>
        <div className={styles.roomsListItem}>
          <img src='point3d-commercial-imaging-ltd-oxeCZrodz78-unsplash.jpg' />
          <h1>Single Room</h1>
          <span className={styles.desc}>An elegant solution for two, where you can enjoy an experience of comfort and refinement. The attention to detail is reflected in the chosen furnishings, characterized by natural materials to create a fresh.</span>
          <button className={styles.bookBtn}>BOOK NOW</button>
        </div>
        <div className={styles.roomsListItem}>
          <img src='point3d-commercial-imaging-ltd-oxeCZrodz78-unsplash.jpg' />
          <h1>Duluxe Room</h1>
          <span className={styles.desc}>An elegant solution for two, where you can enjoy an experience of comfort and refinement. The attention to detail is reflected in the chosen furnishings, characterized by natural materials to create a fresh.</span>
          <button className={styles.bookBtn}>BOOK NOW</button>
        </div>
        <div className={styles.roomsListItem}>
          <img src='point3d-commercial-imaging-ltd-oxeCZrodz78-unsplash.jpg' />
          <h1>Family Room</h1>
          <span className={styles.desc}>An elegant solution for two, where you can enjoy an experience of comfort and refinement. The attention to detail is reflected in the chosen furnishings, characterized by natural materials to create a fresh.</span>
          <button className={styles.bookBtn}>BOOK NOW</button>
        </div>
      </div>
    </>
  )
}

export default Rooms