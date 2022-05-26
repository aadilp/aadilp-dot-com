// Main
const CORS_PROXY = "https://aadilp-cors.herokuapp.com/fetch/";
const RSS_FEED = "https://blog.aadilp.com/rss.xml";

// About
const SKILLS = {
  languages: {
    title: "Languages",
    list: ["Kotlin", "Java", "Python", "PHP", "JavaScript", "TypeScript"],
  },
  frameworks: {
    title: "Frameworks/Libraries",
    list: ["Spring Boot", "Symfony", "React", "Django", "Flask"],
  },
  other: {
    title: "Everything Else",
    list: ["GraphQL", "Docker", "Kafka", "Relational Databases"],
  },
};

// Feed
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

export { CORS_PROXY, RSS_FEED, SKILLS, MONTHS };
