import React from "react";
import "../scss/About.css";
import { FaSass } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { BsMicrosoft } from "react-icons/bs";

const Skills = ({ theme }) => {
  return (
    <>
      <div className="skills">
        <div className="">
          <div className="myskill">
            <div className="container">
              <h2>My Skills</h2>
              <p className="skill-subheading">
                Here are a few skills I possess
              </p>
              <div className="myskill-content">
                <div className="first-flex">
                  <div className="skill-item">
                    <div className="logo">
                      <DiJavascript1 />
                    </div>
                    <p className={"icon-header"}>JavaScript</p>
                  </div>
                  <div className="skill-item">
                    <div className="logo">
                      <FaReact />
                    </div>
                    <p className={"icon-header"}>ReactJs</p>
                  </div>
                  <div className="skill-item">
                    <div className="logo">
                      <FaHtml5 />
                    </div>
                    <p className={"icon-header"}>Html5</p>
                  </div>
                </div>
                <div className="second-flex">
                  <div className="skill-item">
                    <div className="logo">
                      <FaBootstrap />
                    </div>
                    <p className={"icon-header"}>Bootstrap</p>
                  </div>
                  <div className="skill-item">
                    <div className="logo">
                      <FaSass />
                    </div>
                    <p className={"icon-header"}>Scss {"(Sass)"}</p>
                  </div>
                  <div className="skill-item">
                    <div className="logo">
                      <BsMicrosoft />
                    </div>
                    <p className={"icon-header"}>Microsoft Office</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
