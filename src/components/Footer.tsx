import { RiTwitterXLine } from "react-icons/ri";
import { SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";

function Footer({ bgColor }: { bgColor: string }) {
  return (
    <footer
      className={`w-full h-60 flex flex-row justify-between px-[5%] py-[2%] text-white ${bgColor}`}
    >
      <div className="w-1/3 h-full flex flex-col justify-end items-start">
        <figure className="w-37 h-37">
          <img
            className="w-full h-full object-fit"
            src="/logos/logo-transparent-1.png"
            alt="healthadvice"
          />
        </figure>
        <p>© healthadvice Ltd 2025. All rights reserved.</p>
      </div>

      <div className="w-1/3 h-full flex justify-center items-center">
        <button className="btn btn-neutral btn-text w-50 h-14 btn-circle">
          Support Us
        </button>
      </div>

      <div className="w-1/3 h-full flex flex-row justify-end items-end gap-3">
        <SiInstagram size={24} />
        <SiFacebook size={24} />
        <RiTwitterXLine size={24} />
        <SiLinkedin size={24} />
      </div>
    </footer>
  );
}

export default Footer;
