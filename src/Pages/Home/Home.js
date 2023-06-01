import "./Home.css";
import profile from "../../assets/images/profile.png";
import grad_img from "../../assets/images/grad.png";
import planning from "../../assets/images/planning.png";
import experience from "../../assets/images/experience.png";
import w3schools from '../../assets/images/w3schools.png'
import Facebook from '../../assets/images/facebookclone.png'
import insta from '../../assets/images/instaclone.png'
import cars from '../../assets/images/carblog.png'
import ecom from '../../assets/images/EcomwebAPP.png'
import ProjectCard from '../../Component/projectsCard/ProjectCard'
import Resume from "../../assets/resume/Gokulnath.pdf";
import { useState } from "react";
import hamBurger from "../../assets/images/hamburger.png";
import close from "../../assets/images/close.png";

export default function Home() {
  const [pageState, setPageState] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const cardData = [
    {
      img: w3schools,
      link: "https://gokulnath003.github.io/W3school-landing-page/"
  },
  {
    img:ecom,
    link:"https://gokulnath003.github.io/ecom/"
  }
//       , {
//       img: cars,
//       link: "https://gokulnath003.github.io/craze-on-cars/",
//   }, {

//       img: insta,
//       link: "https://gokulnath003.github.io/Instagram-clone/",
//   }, {

//       img: Facebook,
//       link: "https://gokulnath003.github.io/Facebook-clone/",
//   }

  ]
  return (
    <>
      <div className="Home_container">
        <div className="homeHeader d-flex justify-end ">
          <nav className=" d-flex g5 m5 ">
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/gokulnath-s-b05b9b1ab"
              target="_blank"
              className="a1"
            >
              {" "}
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              rel="noreferrer"
              href="https://github.com/GOKULNATH003"
              className="a2"
              target="_blank"
            >
              <i className="fa-brands fa-github-square"></i>
            </a>
            <a
              rel="noreferrer"
              href="mailto:gn98169@gmail.com"
              className="a3"
              target="_blank"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
            <a
              rel="noreferrer"
              href="https://twitter.com/GOCOOL_IDHAY?t=hvQsOGKHKuU7wVcankLFYg&s=08"
              className="a4"
              target="_blank"
            >
              <i className="fa-brands fa-twitter-square"></i>
            </a>
            <a
              rel="noreferrer"
              href="tel:9789697257"
              className="a5"
              target="_blank"
              title="9789697257"
            >
              <i className="fa-solid fa-phone"></i>
            </a>
          </nav>
        </div>
        <div className="nav_bar ">
          {!overlay && (
            <img
              src={hamBurger}
              className="hamburger pointer"
              onClick={() => {
                setOverlay((prev) => !prev);
              }}
              alt=""
            />
          )}
        </div>
        <div className="topContent d-flex justify-between align-center">
          <div className="topLeftContent">
            <p>Hi there!I'm </p>
            <h3 className="fs20">Gokulnath,</h3>
            <h3 className="fs20">A Frontend Developer</h3>
            <h3 className="fs20">Vellore,Tamilnadu,India</h3>
            <p>
              "Success is not final, failure is not fatal it is the courage to
              continue that counts"
            </p>
            <p className="text-end author">- Winston Churchill</p>
          </div>
          <div className="topRightContent">
            <div className="img_displayer">
              <img
                draggable="false"
                src={profile}
                className="profile_img"
                alt=""
              />
            </div>
          </div>
        </div>
        {
          <div className="btn_container">
            <button
              className="viewMoreBtn"
              onClick={(e) => {
                setPageState((prev) => !prev);
              }}
            >
              View {pageState ? "less" : "more"}
            </button>
          </div>
        }

        {pageState && (
          <div className="state_container">
            <div className="bottom_container">
              <div className="grad_details d-flex justify-between align-center">
                <div className="grad_content">
                  <p>
                    Hi! I completed my bachelors degree in
                    <b> Mechanical Engineering </b>in the year of
                    <b> 2017-2021 </b> with the CGPA of<b> 7.76 CGPA </b>
                  </p>
                </div>
                <img
                  draggable="false"
                  src={grad_img}
                  className="bottom_img"
                  alt="graduationcap"
                />
              </div>

              <div className="core_details d-flex justify-between align-center g2">
                <img
                  draggable="false"
                  src={planning}
                  className="bottom_img"
                  alt="mechanicalimg"
                />
                <div className="grad_content">
                  <p>
                    After my graduation, I joined a mechanical-based company as
                    a Graduate Engineer Trainee (GET). The company is a supplier
                    of Caterpillar Mining vehicles, manufacturing the body and
                    cabin of the mining vehicles. After three months, I left to
                    improve my skills.{" "}
                  </p>
                </div>
              </div>
              <div className="grad_details d-flex justify-between align-center">
                <div className="grad_content">
                  <p>
                    Then I completed the course for Frontend Developement at
                    Besant Technologies in Chennai.
                  </p>
                  <p style={{fontWeight:900}}>Professional Experience</p>
                  <p>Zustpe Payments Private Limited -React Js Developer Jr</p>
                  <p  style={{textAlign:"right",fontWeight:900}}>Sep 2022 - Apr 2023</p>
                  <ul className="list">
                    <li>
                      Collaborated with the design team to implement user
                      interface designs using React.
                    </li>
                    <li>
                      Worked with the backend team to integrate
                      frontendcomponents with the backend API
                    </li>
                    <li>
                      Implemented new features and enhancements such as payment
                      processing, transaction history, and user authentication,
                      using RESTful APIs.
                    </li>
                    <li>
                      Ensured the application’s compatibility with various
                      browsers and devices by performing cross browser testing
                      and optimization.
                    </li>
                    <li>Maintained secure code practices.</li>
                    <li>
                      Optimized the performance of a React JS application by
                      implementing code splitting and lazy loading.
                    </li>
                    <li>Developed one of the ecommerce product in zustpe.</li>
                    <li>Familiarity with Agile methodologies.</li>
                    <li>
                      Analyzed in troubleshooting and debugging issues related
                      to the frontend components.
                    </li>
                    <li>
                      Refactored the codebase of a React JS application to
                      improve its scalability and reduce code duplication.
                    </li>
                  </ul>
                </div>
                <img
                  draggable="false"
                  src={experience}
                  className="bottom_img"
                  alt="graduationcap"
                />
              </div>
            </div>
            <div className="personal_projects">
                            <p className='text-center fs15 text-white'>Projects</p>
                            <div className='d-flex justify-evenly flex-wrap g2'>
                                {cardData?.map((item, i) => {

                                    return <ProjectCard img={item.img} link={item.link} key={item + i.toString()} />

                                })
                                }
                            </div>
                        </div>
            <div className="d-flex justify-center my10">
              <a href={Resume} target="_blank" rel="noreferrer">
                <button className="downlod_resume">Download my Resume</button>
              </a>
            </div>
          </div>
        )}
      </div>
      {overlay && (
        <div className="overlay_cont">
          <Overlay setOverlay={setOverlay} />
        </div>
      )}
    </>
  );
}

const Overlay = ({ setOverlay }) => {
  return (
    <div className="overlay">
      <div className="d-flex fdc overlay_content ">
        <img
          src={close}
          className="hamburger1"
          onClick={() => {
            setOverlay(false);
          }}
          alt=""
        />

        <a
          rel="noreferrer"
          href="https://www.linkedin.com/in/gokulnath-s-b05b9b1ab"
          target="_blank"
        >
          Linked In
        </a>
        <a
          rel="noreferrer"
          href="https://github.com/GOKULNATH003"
          target="_blank"
        >
          Git Hub
        </a>
        <a rel="noreferrer" href="mailto:gn98169@gmail.com" target="_blank">
          E-Mail
        </a>
        <a
          rel="noreferrer"
          href="https://twitter.com/GOCOOL_IDHAY?t=hvQsOGKHKuU7wVcankLFYg&s=08"
          target="_blank"
        >
          Twitter
        </a>
        <a
          rel="noreferrer"
          href="tel:9789697257"
          class="a5"
          target="_blank"
          title="9789697257"
        >
          Contact
        </a>
      </div>
    </div>
  );
};
