import Image from "next/image";

import styles from "./ProjectInfo.module.css";


export default function ProjectInfo({ projectsArray, id }) {
  const currentProject = projectsArray.filter(project => project.id == id)[0];
  const { image, title, tags, date, authors, description, tools } = currentProject;
  const strftimeOptions = {weekday: 'short', month: 'short', day: 'numeric'}

  return (
    <>
      <div className={styles.projectInfo}>
        <h1 className={styles.title}>{title.toLowerCase()}</h1>
        <p className={styles.tags}>{tags.toUpperCase()}</p>
        <p className={styles.dateAndAuthors}>{date.toLocaleString('pt-BR', strftimeOptions)}<br/>FEITO COM {authors.toUpperCase()}</p>
        <p>{description}</p>
        <p className={styles.tools}><b>FERRAMENTAS</b><br />{tools}</p>
        <br/>
        <Image src={image} alt={title} width={475} height={230}/>
      </div>
    </>
  )
}
