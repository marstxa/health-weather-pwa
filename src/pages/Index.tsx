import {
  SiAirbnb,
  SiDiscord,
  SiGoogle,
  SiNike,
  SiStarbucks,
  SiTesla,
  SiUber,
  SiUnitednations,
} from "react-icons/si";
import Navbar from "../Navbar";
import { Link } from "react-router";
import Footer from "../components/Footer";
import AOS from "aos";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import InstallPrompt from "../components/InstallBanner";

function Index() {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div className="w-full  overflow-hidden">
      <Navbar />

      <main>
        <div className="px-[5%]">
          <section>
            <div className="w-full flex flex-col justify-center items-center gap-10 text-center mt-50">
              <h1 data-aos="fade-down" className="h1-font">
                IMPROVING PATIENTS HEALTH <br /> IT'S OUR PRIORITY
              </h1>
              <p data-aos="fade-down" className="md:px-[20%]">
                Lorem ipsum odor amet, consectetuer adipiscing elit. Potenti
                semper elit felis; fermentum facilisis quis platea. Eu rutrum
                vehicula non posuere leo nulla maximus. Consequat semper
                porttitor aliquet aptent taciti ultrices. Ridiculus facilisi
                justo penatibus quam sociosqu suspendisse mollis. Nisl maximus
                ac hendrerit turpis scelerisque. Inceptos facilisis lobortis
                facilisi habitant dui porttitor. Hac vestibulum ac cursus cursus
                vehicula erat a in. Urna efficitur nunc facilisi malesuada nunc.{" "}
              </p>
              <button
                data-aos="zoom-in"
                className="btn bg-neutral btn-circle btn-text text-white w-40 h-13"
              >
                Start Now
              </button>
            </div>
          </section>

          <section className="flex w-full min-h-screen flex-col justify-center items-center md:flex-row md:justify-between md:items-center ">
            <div
              data-aos="fade-right"
              className="flex flex-col items-center text-center md:text-start justify-center gap-8 w-full mt-20 md:w-1/2 md:items-start"
            >
              <h2 className="h2-font">Who we are</h2>
              <p className="md:pr-[15%]">
                Lorem ipsum odor amet, consectetuer adipiscing elit. Potenti
                semper elit felis; fermentum facilisis quis platea. Eu rutrum
                vehicula non posuere leo nulla maximus. Consequat semper
                porttitor aliquet aptent taciti ultrices. Ridiculus facilisi
                justo penatibus quam sociosqu suspendisse mollis. Nisl maximus
                ac hendrerit turpis scelerisque. Inceptos facilisis lobortis
                facilisi habitant dui porttitor. Hac vestibulum ac cursus cursus
                vehicula erat a in. Urna efficitur nunc facilisi malesuada nunc.
                Habitasse diam tempus penatibus justo pulvinar torquent.{" "}
              </p>
              <Link
                to="/user-health"
                className="flex w-full items-center justify-center"
              >
                <button className="btn bg-neutral btn-circle btn-text text-white w-50 h-15">
                  Monitor Your Health
                </button>
              </Link>
            </div>
            <figure
              data-aos="zoom-out-top-left"
              className="mt-20 md:mt-0 w-101 h-101 sm:w-126 sm:h-1/2 md:h-125 md:w-125 lg:w-1/2 lg:h-screen bg-secondary rounded-full md:relative md:left-50 flex flex-col items-center md:items-start justify-center"
            >
              <img
                className=" w-100 h-100 sm:w-125 sm:h-125 object-cover rounded-full"
                src="/images/female-doctor.jpg"
                alt="female-doctor"
              />
            </figure>
          </section>
          <section className="mt-20 md:mt-0 flex flex-col-reverse justify-center md:flex-row md:justify-between items-center w-full min-h-screen">
            <figure
              data-aos="zoom-out-top-right"
              className="mt-20 md:mt-0 w-101 h-101 sm:w-126 sm:h-126 md:w-125 md:h-125 lg:w-1/2 bg-secondary lg:h-screen rounded-full relative md:right-50 flex flex-col items-end justify-center"
            >
              <img
                className="w-100 h-100 sm:w-125 sm:h-125 object-cover rounded-full"
                src="/images/meteorology.jpg"
                alt="meteorogoly"
              />
            </figure>
            <div
              data-aos="fade-left"
              className="w-full md:w-1/2 flex flex-col items-center md:items-end justify-center gap-8 text-center md:text-end"
            >
              <h2 className="h2-font">
                How weather affects <br /> your health
              </h2>
              <p className="md:pl-[15%]">
                Lorem ipsum odor amet, consectetuer adipiscing elit. Potenti
                semper elit felis; fermentum facilisis quis platea. Eu rutrum
                vehicula non posuere leo nulla maximus. Consequat semper
                porttitor aliquet aptent taciti ultrices. Ridiculus facilisi
                justo penatibus quam sociosqu suspendisse mollis. Nisl maximus
                ac hendrerit turpis scelerisque. Inceptos facilisis lobortis
                facilisi habitant dui porttitor. Hac vestibulum ac cursus cursus
                vehicula erat a in. Urna efficitur nunc facilisi malesuada nunc.
                Habitasse diam tempus penatibus justo pulvinar torquent.
                Malesuada orci viverra lectus vulputate facilisis, himenaeos
                commodo ante. Dui nam dis accumsan platea habitant nulla mauris
                aliquet. Hac eget pulvinar velit netus facilisis. Lacinia
                euismod nulla, nec parturient sapien vehicula efficitur vivamus.
                Montes ad ligula faucibus leo aenean netus donec montes.
                Facilisi nibh risus sagittis quisque senectus himenaeos.
                Facilisis consequat quisque dis nisi molestie sapien.
              </p>
              <Link
                to="/dashboard"
                className="flex w-full items-center justify-center"
              >
                <button className="btn bg-neutral btn-circle btn-text text-white w-60 h-15">
                  Check Location Air Quality
                </button>
              </Link>
            </div>
          </section>
          <section
            data-aos="zoom-in"
            className="bg-primary w-full min-h-40 text-white px-[5%] py-[2.5%] rounded-lg mt-30"
          >
            <h3 className="h3-font">Results</h3>
            <div className="p-[2.5%] flex flex-row justify-evenly w-full items-center">
              <div className="flex flex-col max-w-80 items-start justify-center gap-4">
                <h1 className="text-5xl md:text-7xl font-extrabold font-[Rubik]">
                  92%
                </h1>
                <p className="hidden md:block">
                  Lorem ipsum odor amet, consectetuer adipiscing elit. Potenti
                  semper elit felis; fermetis.
                </p>
              </div>
              <div className="flex flex-col max-w-80 items-start justify-center gap-4">
                <h1 className="text-5xl md:text-7xl font-extrabold font-[Rubik]">
                  16%
                </h1>
                <p className="hidden md:block">
                  Lorem ipsum odor amet, consectetuer adipiscing elit. Potenti
                  semper elit felis; fermetis.
                </p>
              </div>
              <div className="flex flex-col max-w-80 items-start justify-center gap-4">
                <h1 className="text-5xl md:text-7xl font-extrabold font-[Rubik]">
                  57%
                </h1>
                <p className="hidden md:block">
                  Lorem ipsum odor amet, consectetuer adipiscing elit. Potenti
                  semper elit felis; fermetis.
                </p>
              </div>
            </div>
          </section>
        </div>

        <section className="w-full flex flex-col h-150 justify-center items-center relative gap-14">
          <div
            className="w-full h-150 style-gradient opacity-50 absolute"
            style={{
              clipPath: "ellipse(100% 100% at 50% 100%)",
              background:
                "linear-gradient(to top, hsla(190, 100%, 50%, 0.5) 40%, hsla(302, 100%, 40%, 0.5))", // Adjust opacity value as needed
            }}
          ></div>

          <h3 data-aos="fade-down" className="h3-font">
            Sponsors
          </h3>
          <div
            data-aos="fade-down"
            className="px-[10%] md:px-0 grid grid-cols-4 gap-14 md:gap-24"
          >
            <SiStarbucks className="w-10 h-10 md:w-15 md:h-15" />
            <SiUber className="w-10 h-10 md:w-15 md:h-15" />
            <SiDiscord className="w-10 h-10 md:w-15 md:h-15" />
            <SiAirbnb className="w-10 h-10 md:w-15 md:h-15" />
            <SiTesla className="w-10 h-10 md:w-15 md:h-15" />
            <SiGoogle className="w-10 h-10 md:w-15 md:h-15" />
            <SiUnitednations className="w-10 h-10 md:w-15 md:h-15" />
            <SiNike className="w-10 h-10 md:w-15 md:h-15" />
          </div>
        </section>
      </main>
      <InstallPrompt />
      <Footer bgColor={"bg-secondary"} />
      <ToastContainer position="top-center" />
    </div>
  );
}

export default Index;
