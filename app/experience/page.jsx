import style from "../../styles/Experience.module.css";

export const metadata = {
  title: "Experience - Korbin S",
  description: "Korbin Schulz's experience page",
};

const Experience = () => {
  return (
    <div className={style.experience_outer}>
      <div className={style.experience_inner}>
        <section className={style.experience_main_section}>
          <span className={style.main_header}>Work Experience</span>
          <span className={style.main_sub}>
            You can also learn download my resume{" "}
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
          <ul className={style.experience_list}>
            <li className={style.experience_list_element}>
              Working with a team of developers to create a web interface for
              Lumina, which is a ticketing platform monitoring service designed
              to help ticket "scalpers" acquire the best tickets to maximize
              their profits
            </li>
            <li className={style.experience_list_element}>
              Developed and designed a comprehensive web interface using
              Next.JS, React, Figma, and CSS to create a responsive and visually
              appealing user experience
            </li>
          </ul>
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
      </div>
    </div>
  );
};
export default Experience;
