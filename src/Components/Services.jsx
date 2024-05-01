import React from "react";
import "../scss/Services.css";
import { GiTeacher } from "react-icons/gi";
import { IoIosBusiness } from "react-icons/io";
import { BsTools } from "react-icons/bs";
import { VscProject } from "react-icons/vsc";
import { CgWebsite } from "react-icons/cg";

const Services = ({ theme }) => {
  return (
    <>
      <div className="services" id="services">
        <div className="container">
          <h1>Services I Render</h1>
          <p className="s-header">
            I am ready at all time to render my services in all these.{" "}
          </p>

          <div className="services-content">
            <div className="Row">
              <div className="card">
                <GiTeacher size={"3rem"} style={{ color: "#2351dc" }} />
                <h3>Training/Teaching</h3>
                <p>
                  I offer training/teaching services as a teacher and tutor,
                  tutoring people on skill aquisation and even encouraging them
                  on path to take.
                </p>
              </div>
              <div className="card">
                <CgWebsite size={"3rem"} color={"#2351dc"} />

                <h3>Responsive web design</h3>
                <p>
                  I help develope mobile friendly website that suits users
                  needs, to scale businesses of business owners and make users
                  experience get better.
                </p>
              </div>
              <div className="card">
                <VscProject size={"3rem"} color={"#2351dc"} />
                <h3>Product Management</h3>
                <p>
                  I help a product reach its potentials from stage of conception
                  till its stage of maturity with the help of agile method.
                </p>
              </div>
            </div>
            <div className="Row">
              <div className="card">
                <IoIosBusiness size={"3rem"} style={{ color: "#2351dc" }} />
                <h3>Agro Business Management</h3>
                <p>
                  I offer training services in Agro-business
                  {"(Poutry Farming)"}, I help in the training of Potential
                  farmers. Telling them how they can add value to their product.
                </p>
              </div>
              <div className="card">
                <BsTools size={"3rem"} color={"#2351dc"} />
                <h3>Machine{"(Computer)"} Maintainance</h3>
                <p>
                  I provide the service of system repair, so I can provide
                  service of fixing system to an extent
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
