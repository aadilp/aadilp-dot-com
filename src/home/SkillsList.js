import PropTypes from "prop-types";

const SkillsList = ({ skills }) => (
  <>
    <h4>{skills.title}</h4>
    <ul>
      {skills.list.map((item) => (
        <li key={item.trim()}>{item}</li>
      ))}
    </ul>
  </>
);

SkillsList.propTypes = {
  skills: PropTypes.shape({
    title: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired,
  }).isRequired,
};

export default SkillsList;
