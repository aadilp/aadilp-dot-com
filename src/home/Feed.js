import PropTypes from "prop-types";
import "./Feed.css";

const MONTHS = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December",
};

const getDate = (dateString) => {
  const date = new Date(dateString);
  return (
    date.getDate() + " " + MONTHS[date.getMonth()] + ", " + date.getFullYear()
  );
};

const Feed = ({ posts }) => (
  <div className="Feed">
    <h3>Latest Posts</h3>
    {posts.map((post) => (
      <div key={post.title.trim()}>
        <a href={post.link}>{post.title}</a>
        <br />
        {getDate(post.date)}
      </div>
    ))}
  </div>
);

Feed.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Feed;
