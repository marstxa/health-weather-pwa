import { Link } from "react-router";
import "./btnStyles.css";

function Navbar() {
  return (
    <header className="flex flex-row bg-white w-3/4 h-18 rounded-3xl shadow-xl my-[2.5%] fixed z-100 left-1/2 top-0 -translate-x-1/2 items-center justify-between px-[5%]">
      <div>
        <Link to={"/"}>
          <figure className="w-full h-18">
            <img
              className="w-full h-full object-fit"
              src="/logos/logo-transparent.png"
              alt="healthadvice"
            />
          </figure>
        </Link>
      </div>
      <div className="flex flex-row items-center gap-4">
        <Link to={"/user-health"}>
          <button className="btn-circle btn-style btn-text w-28 h-12">
            Health
          </button>
        </Link>
        <Link to={"/dashboard"}>
          <button className="btn-circle btn-style btn-text w-28 h-12">
            Dashboard
          </button>
        </Link>
        <Link to={"#"}>
          <button className="btn-circle btn-style btn-text w-28 h-12">
            About Us
          </button>
        </Link>
        <Link to={"/info"}>
          <button className="btn-circle btn-style btn-text w-28 h-12">
            Information
          </button>
        </Link>
      </div>
      <div>
        <Link to={"/signIn"}>
          <button className="btn-style509 btn-circle btn-text w-22 h-12">
            Sign In
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
