import style from "../../styles/Experience.module.css";

const Experience = () => {
  return (
    <div className={style.experience_outer}>
      <div className={style.experience_inner}>
        <section className={style.experience_main_section}>
          <span className={style.main_header}> Work Experience</span>
          <span className={style.main_sub}>
            You can also download my resume{" "}
            <a
              href="/KorbinSchulz_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className={style.resume_link}
            >
              here!
            </a>
          </span>
        </section>

        <section className={style.experience_subsection}>
          <span className={style.sub_header}>Lumina</span>
          <span className={style.supporting_label}>
            Frontend Developer | Jun 2023 - Present
          </span>
        </section>
        <section className={style.experience_subsection}>
          <span className={style.sub_header}>Textron</span>
          <span className={style.supporting_label}>
            Infrastructure Intern | May 2023 - Aug 2023
          </span>
          <ul className={style.experience_list}>
            <li className={style.experience_list_element}>
              Developed PowerShell scripts to sync resources from Azure, VMware,
              and other database tables with Textron's ServiceNow's CMDB
            </li>
            <li className={style.experience_list_element}>
              Automated interactions with the ServiceNow database to efficiently
              populate it with new data, and update records that contained
              incorrect information
            </li>
            <li className={style.experience_list_element}>
              Created new forms and workflows within ServiceNow to reduce time
              spent by other employees when they're interacting with the
              database, resulting in a significant increase in both productivity
              and database health.
            </li>
          </ul>
        </section>
        <section className={style.experience_subsection}>
          <span className={style.sub_header}>Schulz Shoes LLC</span>
          <span className={style.supporting_label}>
            Owner | Oct 2020 - Dec 2022
          </span>
          <ul className={style.experience_list}>
            <li className={style.experience_list_element}>
              Managed all facets of the business, including financial tracking,
              inventory coordination, customer service, and marketing
            </li>
            <li className={style.experience_list_element}>
              Successfully handled a high volume of sales, processing and
              managing transactions totaling hundreds of thousands of dollars on
              a yearly basis
            </li>
            <li className={style.experience_list_element}>
              Managed a digital marketplace with nearly 200,000 members and
              served as an online escrow agent, ensuring smooth operations and
              providing a secure and reliable platform for customers
            </li>
          </ul>
        </section>

        <section className={style.experience_main_section}>
          <span className={style.main_header}>Projects</span>
          <span className={style.main_sub}>
            Check out some of the projects that i've been working on.
          </span>
        </section>

        <section className={style.experience_subsection}>
          <span className={style.sub_header}>Food Finder</span>
          <span className={style.supporting_label}>
            Typescript, React, Node.js, CSS, MySQL
          </span>
          <ul className={style.experience_list}>
            <li className={style.experience_list_element}>
              Developed a dynamic web application designed to help users
              discover exciting new dining options in their area
            </li>
            <li className={style.experience_list_element}>
              Utilized Yelp's API to present restuarants to users based on their
              preferences and location, delivering a unique and personalized
              experience
            </li>
            <li className={style.experience_list_element}>
              Designed a robust backend using Node.js and MySQL to store user
              restaurants, preferences, and account data
            </li>
          </ul>
        </section>
        <section className={style.experience_subsection}>
          <span className={style.sub_header}>WriteRight</span>
          <span className={style.supporting_label}>
            Javascript, React, Node.js, CSS, MongoDB
          </span>
        </section>
        <section className={style.experience_subsection}>
          <span className={style.sub_header}>Fude</span>
          <span className={style.supporting_label}>
            Javascript, React, Node.js, CSS, MongoDB
          </span>
        </section>
      </div>
    </div>
  );
};
export default Experience;
