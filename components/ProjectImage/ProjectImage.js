import Image from "next/image";

import styles from "./ProjectImage.module.css"


export default function ProjectImage({ project, onMouseEnterCallback, onMouseLeaveCallback }) {
  const { id, image, title } = project;
  return (
    <>
      <div className={styles.image} key={id}>
        <Image
          src={image}
          alt={title}
          key={id}
          width={230}
          height={165}
          onMouseEnter={() => onMouseEnterCallback(id)}
          onMouseLeave={onMouseLeaveCallback}
        />
      </div>
    </>
  )
}