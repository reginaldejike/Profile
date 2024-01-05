import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/Project.css';

const Project = () => {
  const handleClick = (url) => {
    window.open(url, '_blank');
  };
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <>
      <div className='project' id='project'>
        <div className='container'>
          <h1>Milestones of Projects</h1>
          <p className='para'>
            Here are a few projects I have worked on and people I have partnered
            with
          </p>
          <div className='project-content'>
            <Slider {...settings}>
              {data.map((d) => (
                <div
                  className='project-card'
                  key={d.id}
                  onClick={() => handleClick(d.url)}
                >
                  <div>
                    <img src={d.img} alt='' className='p-img' />
                  </div>
                  <div>
                    <p className='p-name'>{d.name}</p>
                    <p>{d.review}</p>
                    <button
                      onClick={() => handleClick(d.url)}
                      className='seemore-btn'
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
    img: `/project/Screenshot (162).png`,
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
    img: `/project/Screenshot (164).png`,
    review: `Task tracker is an app that I built using a mock api that i
                hosted on github so I implemented the CRUD method on the Api.
                Basically the app is to keep remindal of task to be done by
                users`,
    url: `https://reginaldejike.github.io/Task-tracker/`,
  },
  {
    id: 3,
    name: `Movie box`,
    img: `/project/Screenshot (165).png`,
    review: `It a movie app that shows lates movies`,
    url: `https://reginaldejike.github.io/MovieBox/`,
  },
  {
    id: 4,
    name: `Portfolio`,
    img: `/project/screenshot (167).png`,
    review: `Its an app that contain details about myself and some of my achievements`,
    url: `https://reginaldejike.netlify.app/`,
  },
];
export default Project;
