import Image from 'next/image';

import styles from "./Navbar.module.css"

const social = [
  {
    title: "LinkedIn",
    logo: "/images/linkedin-logo.png",
    url: "url"
  },
  {
    title: "Twitter",
    logo: "/images/twitter-logo.png",
    url: "https://twitter.com/leonardodiegues"
  },
  {
    title: "Github",
    logo: "/images/github-logo.png",
    url: "https://github.com/leonardodiegues"
  },
]

export default function Navbar({ children }) {
  return (
    <>
      <nav>
        <div className={`${styles.wrapper}`}>
          <div className={styles.logo}>
            <h1 className={styles.title}>leonardo diegues</h1>
            <p className={styles.bio}>
              data/visual journalist. developer. a social scientist
              <br />currently working at <a className="" href="https://folha.com.br" target="_blank">folha de são paulo</a>
            </p>
          </div>
          <ul className={styles.menu}>
            {social.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.url} target="_blank">
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
