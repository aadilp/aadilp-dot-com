import React from "react";
import "./Main.css";
import About from "./About";
import Feed from "./Feed";
import Parser from "rss-parser";

const parser = new Parser();
const CORS_PROXY = "https://aadilp-cors.herokuapp.com/fetch/";
const RSS_FEED = "https://blog.aadilp.com/rss.xml";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  fetchLatestPosts = () => {
    (async () => {
      const feed = await parser.parseURL(CORS_PROXY + RSS_FEED);
      let posts = [];
      feed.items
        .slice(0, 5)
        .forEach((item) =>
          posts.push({ title: item.title, link: item.link, date: item.pubDate })
        );
      this.setState({
        posts: posts,
      });
    })();
  };

  componentDidMount() {
    this.fetchLatestPosts();
  }

  render() {
    const { posts } = this.state;

    return (
      <main className="Main">
        <About />
        <Feed posts={posts} />
      </main>
    );
  }
}

export default Main;
