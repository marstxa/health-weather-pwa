import { FaInfoCircle } from "react-icons/fa";
import { RiMentalHealthFill } from "react-icons/ri";
import { TiHome } from "react-icons/ti";
import { Link } from "react-router";

function Dashboard() {
  return (
    <div className="bg-secondary w-full min-h-screen h-full">
      <div className="w-full flex flex-row">
        <div className="w-24 h-full min-h-screen fixed z-100 px-2 pt-12 bg-[#141619]">
          <figure className="w-18 h-18">
            <img
              className="w-full h-full object-fit"
              src="/logos/logo-transparent-1.png"
              alt="healthadvice"
            />
          </figure>
          <ul className="menu menu-vertical text-white gap-4">
            <li>
              <Link to={"/"}>
                <TiHome size={32} />
              </Link>
            </li>
            <li>
              <Link to={"/user-health"}>
                <RiMentalHealthFill size={32} />
              </Link>
            </li>
            <li>
              <Link to={"/info"}>
                <FaInfoCircle size={32} />
              </Link>
            </li>
          </ul>
        </div>

        {/*Content */}
        <div className="w-full px-[5%] py-[3%] ml-24">
          <label className="floating-label">
            {" "}
            <span>Location</span>
            <input
              type="text"
              className="input w-full h-16 bg-neutral border-2 border-base-300 focus:outline-0 text-white"
              placeholder="Enter location name"
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
