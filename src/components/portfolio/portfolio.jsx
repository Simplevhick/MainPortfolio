import React from "react";
import "./portfolio.css";
import IMG from "../../assets/IMG.jpg";

const data = [
  {
    id: 1,
    image: IMG,
    title: "Detailed Schedule of activities, chores and jobs that needs to be done",
    github: "https://github.com/Simplevhick/TodoList",
    demo: "https://calm-puppy-c96b5b.netlify.app",
  },

  {
    id: 2,
    image: IMG,
    title: "A book to show books you've read or will..(BOOKLIST)",
    github: "https://github.com",
    demo: "https://github.com",
  },

  {
    id: 3,
    image: IMG,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com",
    demo: "https://github.com",
  },

  {
    id: 4,
    image: IMG,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com",
    demo: "https://github.com",
  },

  {
    id: 5,
    image: IMG,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com",
    demo: "https://github.com",
  },

  {
    id: 6,
    image: IMG,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com",
    demo: "https://github.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5 className="portfolio_h5"> My Recent Work </h5>
      <h2> Portfolio </h2>

      <div className="container portfolio__container">
        {data.map(({id, image, title, github, demo}) => {
          return (
            <article key={id}className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
