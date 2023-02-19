import React from 'react';
import '../styles/Project.css';

const Project = () => {
  return (
    <>
      <div className='project'>
        <div className='container'>
          <h1>Milestones of Projects</h1>
          <p className='para'>
            Here are a few projects I have worked on and people I have partnered
            with
          </p>
          <div className='project-content'>
            <div className='grid-item item1'>
              <a href=''>Exqure</a>
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
              <a href=''>Project Management {'(Portfolio)'}</a>
            </div>
            <div className='grid-item item3'>
              <a href=''>My Portfolio</a>
            </div>
            <div className='grid-item item4'>
              <a href=''>Request Management System</a>
            </div>
            <div className='grid-item item5'>Project 5</div>
            <div className='grid-item item6'>
              <a href=''>Task Tracker</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
