import { Link } from "react-router";
import { FiArrowLeftCircle } from "react-icons/fi";
import Footer from "../components/Footer";
import SignInForm from "../components/forms/SignInForm";
import AOS from "aos";
import { useEffect } from "react";

function SignIn() {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div>
      <header className="flex flex-row justify-between items-center w-full h-22 px-[5%] py-4">
        <div>
          <button className="btn btn-ghost btn-circle">
            <Link to={"/"}>
              <FiArrowLeftCircle size={32} />
            </Link>
          </button>
        </div>
        <div className="flex flex-row gap-4 justify-center items-center">
          <p>Don't have an account?</p>
          <Link to={"/signUp"}>
            <button className="btn btn-primary btn-text rounded-full">
              Sign Up
            </button>
          </Link>
        </div>
      </header>

      <main className="w-full min-h-screen flex flex-row ">
        <div className="w-1/2 bg-secondary flex flex-col justify-center items-center gap-4">
          <figure
            data-aos="zoom-out-right"
            className="w-3/5 h-auto aspect-square"
          >
            <img
              className="w-full h-full object-cover rounded-full"
              src="/images/undraw_doctor.png"
              alt="Doctor"
            />
          </figure>
          <h1 data-aos="fade-right" className="h2-font text-center text-white">
            Start to care for <br />
            yourself now!
          </h1>
        </div>

        <div
          data-aos="fade-down"
          className="w-1/2 px-[5%] pt-[3.5%] flex flex-col"
        >
          <h2 className="h2-font text-center">Login to your account</h2>
          <SignInForm />
        </div>
      </main>
      <Footer bgColor="bg-[#000000]" />
    </div>
  );
}

export default SignIn;
