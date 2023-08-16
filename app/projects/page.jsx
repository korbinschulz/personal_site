import ProjectCard from "@/components/ProjectCard";
import style from "@/styles/Projects.module.css";

export const metadata = {
  title: "Projects - Korbin S",
  description: "Korbin Schulz's Website",
};

const Projects = () => {
  return (
    <div className={style.projects_outer}>
      <div className={style.projects_inner}>
        <section className={style.projects_main_section}>
          <span className={style.main_header}>Projects</span>
          <span className={style.main_sub}>
            You can also check out my GitHub&nbsp;
            <a
              href="https://github.com/korbinschulz"
              target="_blank"
              rel="noopener noreferrer"
              className={style.resume_link}
            >
              here!
            </a>
          </span>
        </section>
        <section className={style.projects_subsection}>
          <ProjectCard
            name="Food Finder"
            tech="React, Typescript, CSS, Node.js, MySQL"
            bullet1="Developed a dynamic web application designed to help users discover exciting dining options"
            bullet2="Utilized Yelp's API to display restaurants to users based off of their preferences and physical location"
            bullet3="Implemented a Node.JS backend to handle API requests, and used a MySQL database to store users restaurant preferences and account data"
          />

          <ProjectCard
            name="WriteRight"
            tech="React, Javascript, CSS, Node.js, MongoDB"
            bullet1="Worked with a team to develop a full-stack web application designed to help streamline creative writing processes"
            bullet2="Collaborated with a cross-functional team to design and develop an intuitive user interface using React, Javascript, and vanilla CSS"
            bullet3="Implemented a Node.JS/Express backend with Mongoose as the ORM to handle API requests, and used a MongoDB database to store users worksheets, projects, and account data"
          />

          <ProjectCard
            name="Fude"
            tech="React, Javascript, CSS, Node.js, MongoDB"
            bullet1="Designed and developed a full-stack web application that generates free food coupons for users to popular fast food restaurants"
            bullet2="Reverse engineered undocumented APIs using Burp Suite to find API endpoints that I could use to generate coupons for users"
            bullet3="Developed a custom API to organize external API calls, and used MongoDB to store users' coupon and account data"
          />
        </section>
      </div>
    </div>
  );
};
export default Projects;
