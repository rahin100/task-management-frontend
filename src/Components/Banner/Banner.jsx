import { Link } from "react-router-dom";
import Container from "../Container/Container";

const Banner = () => {
  return (
    <Container>
      <div className="mb-[100px] animate__animated animate__backInDown">
        <div className="carousel w-full h-[90vh]">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://img.freepik.com/free-photo/millennial-asia-businessmen-businesswomen-meeting-brainstorming-ideas-about-new-paperwork-project-colleagues-working-together-planning-success-strategy-enjoy-teamwork-small-modern-night-office_7861-2386.jpg?w=1060&t=st=1703167636~exp=1703168236~hmac=a1b494a2b27e77b9b4c4de43de03d5ffb04cec7cd84e7a95b78d260a041ceec5"
              className="w-full"
            />
            <div className="absolute lg:left-[190px] left-[70px]   lg:top-[30%] md:top-[20%] top-[10%]">
              <h3 className="text-[#EDEADE] lg:text-6xl text-[18px] mb-3 font-semibold">
                Task Management
              </h3>
              <h2 className="text-[#EDEADE] lg:text-3xl text-[18px] mb-3 font-semibold">
                A task management website streamlines
                <br />
                productivity by enabling users to create
                <br />
                assign, and track tasks with ease
              </h2>
              <Link to="/dashboard">
                <button className="btn btn-warning text-white border-none hover:bg-black hover:text-white mr-2 mt-2">
                  Lets Explore
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
