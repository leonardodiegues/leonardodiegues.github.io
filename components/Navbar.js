import Image from 'next/image';

import styles from "./Navbar.module.css"

const Social = [
  {
    title: "LinkedIn",
    logo: "/linkedin-logo.png",
    url: "url"
  },
  {
    title: "Twitter",
    logo: "/twitter-logo.png",
    url: "https://twitter.com/leonardodiegues"
  },
  {
    title: "Github",
    logo: "/github-logo.png",
    url: "https://github.com/leonardodiegues"
  },
]

export default function Navbar({ children }) {
  return (
    <>
      <nav>
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <h1 className={styles.title}>leonardo diegues</h1>
            <p className={styles.bio}>data/visual journalist. programming enthusiast.<br />a social scientist currently working at <a className="" href="https://folha.com.br" target="_blank">@folha</a></p>
          </div>
          <ul className={styles.menu}>
            {Social.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.url}>
                    <Image
                      className="social-logo"
                      src={item.logo}
                      alt={item.title}
                      width="32px"
                      height="32px"
                    />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </>
  )
}
