import PropTypes from "prop-types";
import "./Feed.css";
import { MONTHS } from "./constants";

const formatDate = (dateString) => {
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
        {formatDate(post.date)}
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
