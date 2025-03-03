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
              <p data-aos="fade-down" className="px-[20%]">
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

          <section className="flex flex-row justify-between items-center w-full min-h-screen">
            <div
              data-aos="fade-right"
              className="w-1/2 flex flex-col items-start justify-center gap-8"
            >
              <h2 className="h2-font">Who we are</h2>
              <p className="pr-30">
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
              className="w-1/2 bg-secondary min-h-screen rounded-full relative left-50 flex flex-col items-start justify-center"
            >
              <img
                className="w-125 h-125 object-cover rounded-full"
                src="/images/female-doctor.jpg"
                alt="female-doctor"
              />
            </figure>
          </section>
          <section className="flex flex-row justify-between items-center w-full min-h-screen">
            <figure
              data-aos="zoom-out-top-right"
              className="w-1/2 bg-secondary min-h-screen rounded-full relative right-50 flex flex-col items-end justify-center"
            >
              <img
                className="w-125 h-125 object-cover rounded-full"
                src="/images/meteorology.jpg"
                alt="meteorogoly"
              />
            </figure>
            <div
              data-aos="fade-left"
              className="w-1/2 flex flex-col items-end justify-center gap-8 text-end"
            >
              <h2 className="h2-font">
                How weather affects <br /> your health
              </h2>
              <p className="pl-30">
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
            className="bg-primary w-full text-white px-[5%] py-[2.5%] rounded-lg mt-30"
          >
            <h3 className="h3-font">Results</h3>
            <div className="p-[2.5%] flex flex-row justify-evenly w-full items-center">
              <div className="flex flex-col max-w-80 items-start justify-center gap-4">
                <h1 className="text-7xl font-extrabold font-[Rubik]">92%</h1>
                <p>
                  Lorem ipsum odor amet, consectetuer adipiscing elit. Potenti
                  semper elit felis; fermetis.
                </p>
              </div>
              <div className="flex flex-col max-w-80 items-start justify-center gap-4">
                <h1 className="text-7xl font-extrabold font-[Rubik]">16%</h1>
                <p>
                  Lorem ipsum odor amet, consectetuer adipiscing elit. Potenti
                  semper elit felis; fermetis.
                </p>
              </div>
              <div className="flex flex-col max-w-80 items-start justify-center gap-4">
                <h1 className="text-7xl font-extrabold font-[Rubik]">57%</h1>
                <p>
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
          <div data-aos="fade-down" className="grid grid-cols-4 gap-24">
            <SiStarbucks size={60} />
            <SiUber size={60} />
            <SiDiscord size={60} />
            <SiAirbnb size={60} />
            <SiTesla size={60} />
            <SiGoogle size={60} />
            <SiUnitednations size={60} />
            <SiNike size={60} />
          </div>
        </section>
      </main>
      <Footer bgColor={"bg-secondary"} />
    </div>
  );
}

export default Index;
