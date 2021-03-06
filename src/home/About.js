import "./About.css";
import { SKILLS } from "./constants";
import SkillsList from "./SkillsList";

const About = () => (
  <div className="About">
    <h3>Technologies I Work With</h3>
    <SkillsList skills={SKILLS.languages} />
    <SkillsList skills={SKILLS.frameworks} />
    <SkillsList skills={SKILLS.other} />
  </div>
);

export default About;
