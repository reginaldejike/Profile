import React from 'react';
import '../styles/Project.css';

const Project = () => {
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
            <div className='grid-item item1'>
              <a href='https://exqure16.github.io/frontend/'>Exqure</a>
              <p className='para1'>Reactjs, Bootstrap, Context API</p>
              <p className='para2'>
                Exqure is a third party app like an escrow where we provide user
                with full confidence and security. My task in exqure project was
                to develop the frontend designed by product designers of the
                project and connect it with the Api provided by the backend
                developers.
              </p>
            </div>
            <div className='grid-item item2'>
              <a href='https://exqure16.github.io/exqure-frontend/'>
                Coming soon
              </a>
              <p className='para1'>Reactjs and mailchimp</p>
              <p className='para2'>
                Coming soon is an awaiting app to anticipate the arrival of an
                app. Here I handled the subcribe part of the app, where I used
                mailchimp to allow users subcribe to our newsletters.{' '}
              </p>
            </div>
            <div className='grid-item item3'>
              <a href='https://reginaldejike.netlify.app/'>My Portfolio</a>
              <p className='para1'>Reactjs and Scss</p>
              <p className='para2'>
                I developed my portfolio using reactjs and Scss utilizing flex
                and grid system
              </p>
            </div>
            <div className='grid-item item4'>
              <a href='https://pizzii.github.io/request-managment-system/'>
                Request Management System
              </a>
              <p className='para1'>Html, css, Bootstrap and JavaScript</p>
              <p className='para2'>
                {' '}
                Request Management System is an app still at it conception
                stage, it is an idea I have nursed in my head for quite a long
                time which I hope to finish in a short while.
              </p>
            </div>
            <div className='grid-item item5'>
              <a href='https://docs.google.com/presentation/d/1ftnWESJPZpJagJXIbkrEzkQl3zd96g-3/edit?usp=sharing&ouid=105667242064346792794&rtpof=true&sd=true'>
                Project Management {'(Portfolio)'}
              </a>
              <p className='para1'>
                MVP Strategy, MSCW method, T-Shirt framework and Market research
                strategy
              </p>
              <p className='para2'>
                I took a project managment course with{' '}
                <a href='https://app.entrylevel.net/' className='in-link'>
                  entrylevel
                </a>{' '}
                where I got to add another skill and my productivity to a firm
                or team as this course gave me the ability and tech know how on
                how to handle projects and get very good reasonable feedback
                form users using usecase strategies and applying critical
                thinking to project by applying MSCW method and T-Shirt method
                to prioritise features of a project
              </p>
            </div>
            <div className='grid-item item6'>
              <a href='https://pizzii.github.io/Task-tracker/'>Task Tracker</a>
              <p className='para1'> Reactjs, Context Api, Css</p>
              <p className='para2'>
                Task tracker is an app that i built using a mock api that i
                hosted on github so I implemented the CRUD method on the Api.
                Basically the app is to keep remindal of task to be done by
                users
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
