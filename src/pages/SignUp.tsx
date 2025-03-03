import { Link } from "react-router";
import { FiArrowLeftCircle } from "react-icons/fi";
import Footer from "../components/Footer";
import SignUpForm from "../components/forms/SignUpForm";
import AOS from "aos";
import { useEffect } from "react";

function SignUp() {
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
          <p>Already have an account?</p>
          <Link to={"/signIn"}>
            <button className="btn btn-primary btn-text rounded-full">
              Sign In
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
          <h2 className="h2-font text-center">Create an account</h2>
          <SignUpForm />
        </div>
      </main>
      <Footer bgColor="bg-[#000000]" />
    </div>
  );
}

export default SignUp;
