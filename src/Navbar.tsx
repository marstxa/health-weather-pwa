import { useState } from "react";
import { Link } from "react-router";
import "./btnStyles.css";
import { useAuth } from "./components/CustomHooks/useAuth";
import { toast } from "react-toastify";
import { FaCaretDown, FaTimes } from "react-icons/fa";

function Navbar() {
  const { currentUser, signOut } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleSignOut = async () => {
    const toastId = toast.loading("Signing Out...");
    try {
      await signOut();
      toast.update(toastId, {
        render: "Signed Out",
        type: "success",
        autoClose: 1000,
      });
    } catch (err) {
      console.error(err);
      toast(`Error signing out: ${err}`, {
        type: "error",
        autoClose: 4000,
        position: "top-center",
      });
    }
  };

  return (
    <>
      <header className="flex flex-row rounded-full bg-white w-16 h-16 md:w-3/4 md:h-18 md:rounded-3xl shadow-xl my-[2.5%] fixed z-10 left-10 top-0 md:left-1/2 md:top-0 md:-translate-x-1/2 items-center justify-center md:justify-between px-[5%]">
        <div className="hidden md:block">
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
        <div className="hidden flex-row items-center gap-4 md:flex">
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
        <div className="hidden md:block">
          {!currentUser ? (
            <Link to={"/signIn"}>
              <button className="btn-style509 btn-circle btn-text w-22 h-12">
                Sign In
              </button>
            </Link>
          ) : (
            <button
              className="btn-style510 btn-circle btn-text w-22 h-12"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          )}
        </div>
        <div className="block md:hidden">
          <button
            className="btn btn-ghost btn-circle text-neutral"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <FaTimes size={40} /> : <FaCaretDown size={40} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu with animation */}
      <div
        className={`fixed inset-0 bg-white z-20 transform transition-transform duration-500 ease-in-out ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        } md:hidden flex flex-col items-center justify-center`}
      >
        <div className="flex flex-col items-center gap-8 w-full px-8">
          <Link to={"/"} onClick={() => setMobileMenuOpen(false)}>
            <figure className="w-48 mb-8">
              <img
                className="w-full h-full object-fit"
                src="/logos/logo-transparent.png"
                alt="healthadvice"
              />
            </figure>
          </Link>

          <Link
            to={"/user-health"}
            onClick={() => setMobileMenuOpen(false)}
            className="w-full"
          >
            <button className="btn-circle btn-style btn-text w-full py-4">
              Health
            </button>
          </Link>

          <Link
            to={"/dashboard"}
            onClick={() => setMobileMenuOpen(false)}
            className="w-full"
          >
            <button className="btn-circle btn-style btn-text w-full py-4">
              Dashboard
            </button>
          </Link>

          <Link
            to={"#"}
            onClick={() => setMobileMenuOpen(false)}
            className="w-full"
          >
            <button className="btn-circle btn-style btn-text w-full py-4">
              About Us
            </button>
          </Link>

          <Link
            to={"/info"}
            onClick={() => setMobileMenuOpen(false)}
            className="w-full"
          >
            <button className="btn-circle btn-style btn-text w-full py-4">
              Information
            </button>
          </Link>

          <div className="mt-8 w-full">
            {!currentUser ? (
              <Link to={"/signIn"} onClick={() => setMobileMenuOpen(false)}>
                <button className="btn-style509 btn-circle btn-text w-full py-4">
                  Sign In
                </button>
              </Link>
            ) : (
              <button
                className="btn-style510 btn-circle btn-text w-full py-4"
                onClick={() => {
                  handleSignOut();
                  setMobileMenuOpen(false);
                }}
              >
                Sign Out
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
