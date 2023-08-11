import style from "../styles/ProjectCard.module.css";

const ProjectCard = ({ name, tech, bullet1, bullet2, bullet3 }) => {
  return (
    <div className={style.card_outer}>
      <div className={style.project_section}>
        <span className={style.project_title}>{name}</span>
        <span className={style.project_techstack}>{tech}</span>
      </div>

      <div className={style.project_section}>
        <ul className={style.project_list}>
          <li className={style.project_bullet}>{bullet1}</li>
          <li className={style.project_bullet}>{bullet2}</li>
          <li className={style.project_bullet}>{bullet3}</li>
        </ul>
      </div>
    </div>
  );
};
export default ProjectCard;
