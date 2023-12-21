import Container from "../Container/Container";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container>
      <div className="animate_animated animate__backInRight">
        <footer className="footer footer-center p-4 lg:p-10 bg-[#050505] text-primary-content">
          <aside className="text-center lg:text-left">
            <Link to={"/"}>
              <img
                className="w-[230px] lg:text-5xl text-3xl text-white"
                src="https://svgshare.com/i/118G.svg"
                alt=""
              />
            </Link>
            <p className="font-bold text-lg lg:text-xl text-white">
            TaskPetal is a task management website designed to streamline and organize your daily activities.
            </p>
            <p className="text-lg lg:text-2xl text-medium text-white">
              Copyright © 2023 - All right reserved
            </p>
          </aside>
          <nav className="text-center lg:text-left mt-4 lg:mt-0">
            <div className="grid grid-flow-col lg:grid-flow-col gap-4">
              <a href="https://www.linkedin.com/in/md-rahin-islam-86a511141/">
                <FaLinkedin className="text-3xl lg:text-5xl text-bold text-white" />
              </a>
              <a href="https://www.facebook.com/rahinislam2/">
                <FaFacebookSquare className="text-3xl lg:text-5xl text-bold text-white" />
              </a>
              <a href="https://www.instagram.com/rahin_islam/">
                <FaSquareInstagram className="text-3xl lg:text-5xl text-bold text-white" />
              </a>
              <a href="https://github.com/rahin100">
                <FaGithubSquare className="text-3xl lg:text-5xl text-bold text-white" />
              </a>
            </div>
          </nav>
        </footer>
      </div>
    </Container>
  );
};

export default Footer;
