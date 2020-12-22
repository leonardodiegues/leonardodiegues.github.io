import Link from "next/link";

import styles from "./Navbar.module.css"

const MenuItems = [
  {
    title: "Email",
    logo: "path-to-logo",
    url: "url"
  },
  {
    title: "Twitter",
    logo: "path-to-logo",
    url: "url"
  },
  {
    title: "Github",
    logo: "path-to-logo",
    url: "url"
  },
]

export default function Navbar({ children }) {
  return (
    <>
      <nav>
        <div className={styles.wrapper}>
          <h1 className="title">
            <Link href="/about">Leonardo Diegues</Link>
          </h1>
          <ul className={styles.menu}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.url}>{item.title}</a>
                </li>
              )
            })}
          </ul>
          <p>data/visual journalist. programming enthusiast.<br />a social scientist currently working at <a className="" href="https://folha.com.br" target="_blank">@folha</a></p>
        </div>
      </nav>
    </>
  )
}
