import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>

      <video
        autoPlay
        muted
        loop
        playsInline
        className={styles.video}
      >
        <source src="/smoke.mp4" type="video/mp4" />
      </video>

      <div className={styles.overlay} />

      <div className={styles.hero}>

        <img
          src="/logo.png"
          alt="logo"
          className={styles.logo}
        />

        <h1>STARRY MOBILE SPACE</h1>

        <p>
          Shop • Earn • Track
        </p>

      </div>

    </div>
  )
}
