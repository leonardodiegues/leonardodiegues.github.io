import { useState } from "react";

import ProjectImage from "../ProjectImage/ProjectImage";
import ProjectInfo from "../ProjectInfo/ProjectInfo";

import styles from "./Portfolio.module.css";


export default function Portfolio({ projects }) {
  const [hover, setHover] = useState(false);
  const [currentId, setCurrentId] = useState(projects[0].id);

  function toggleCurrentIdOnHover(id) {
    setCurrentId(id);
    toggleHover();
    console.log(id);
  }

  function toggleHover() {
    setHover(!hover);
  }

  return (
    <>
      <div className={styles.portfolio}>
        <div className={styles.grid}>
          {projects.map((project) => {
            return(
              <ProjectImage
                project={project}
                onMouseEnterCallback={() => toggleCurrentIdOnHover(project.id)}
                onMouseLeaveCallback={toggleHover}
              />
            )
          })}
        </div>
        <ProjectInfo projectsArray={projects} id={currentId}/>
      </div>
    </>
  )
}
