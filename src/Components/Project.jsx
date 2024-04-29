import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../scss/Project.scss";

const Project = () => {
  const handleClick = (url) => {
    window.open(url, "_blank");
  };
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    dot: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dot: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // infinite: true,
          dot: true,
        },
      },
    ],
  };
  return (
    <>
      <div className="project" id="project">
        <div className="container">
          <h1>Milestones of Projects</h1>
          <p className="para">
            Here are a few projects I have worked on and people I have partnered
            with
          </p>
          <div className="project-content">
            <Slider {...settings}>
              {data.map((card) => (
                <div
                  className="project-card"
                  key={card.id}
                  onClick={() => handleClick(card.url)}
                >
                  <div>
                    <img src={card.img} alt="card-img" className="p-img" />
                  </div>
                  <div>
                    <p className="p-name">{card.name}</p>
                    <p>{card.review}</p>
                    <button
                      onClick={() => handleClick(card.url)}
                      className="seemore-btn"
                    >
                      see more....
                    </button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

const data = [
  {
    id: 1,
    name: `Exqure`,
    img: `/project/Screenshot1.png`,
    review: `   Exqure is a third party app like an escrow where we provide user
                with full confidence and security. My task in exqure project was
                to develop the frontend designed by product designers of the
                project and connect it with the Api provided by the backend
                developers.`,
    url: `https://exqure16.github.io/frontend/`,
  },
  {
    id: 2,
    name: `Task tracker`,
    img: `/project/Screenshot2.png`,
    review: `Task tracker is an app that I built using a mock api that i
                hosted on github so I implemented the CRUD method on the Api.
                Basically the app is to keep remindal of task to be done by
                users`,
    url: `https://reginaldejike.github.io/Task-tracker/`,
  },
  {
    id: 3,
    name: `Movie box`,
    img: `/project/Screenshot4.png`,
    review: `It a movie app that shows lates movies`,
    url: `https://reginaldejike.github.io/MovieBox/`,
  },
  {
    id: 4,
    name: `Portfolio`,
    img: `/project/Screenshot3.png`,
    review: `Its an app that contain details about myself and some of my achievements`,
    url: `https://reginaldejike.netlify.app/`,
  },
];
export default Project;
