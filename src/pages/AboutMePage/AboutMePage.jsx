import { FaLinkedin, FaLinkedinIn, FaPhone, FaTelegram } from "react-icons/fa6";
import { developerInfo } from "../../constants";
import { TbMail } from "react-icons/tb";
import { MdOutlineMail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

function AboutMePage() {
  return (
    <div className="container mx-auto 2xl:max-w-6xl min-h-screen bg-white-99">
      <div
        id="wrapper"
        className="min-h-full w-full flex items-center justify-center px-4 py-2"
      >
        <div className="flex flex-col md:flex-row md:h-[400px] items-center justify-center mt-16 md:mt-28 group bg-Buff-300 rounded-xl custome-shadow">
          <div className="md:w-1/2 rounded-xl w-full relative">
            <img
              src={developerInfo.picUrl}
              alt="developer-pic"
              className="w-full h-72 md:h-96 object-cover rounded-xl group-hover:-translate-y-4 group-hover:translate-x-2 transition-all ease-linear"
            />

            <div className="absolute bottom-2 md:-top-52 md:left-60 group-hover:invisible transition-all z-10 w-full flex justify-center items-center">
              <h1
                className={`animate-infinityType text-2xl md:text-2xl line-clamp-2 neon-title text-center overflow-hidden whitespace-nowrap`}
              >
                <span className="backdrop-blur-sm bg-opacity-50 bg-Buff-500">
                  {developerInfo.firstName}
                </span>
                <br />
                <span className="backdrop-blur-sm bg-opacity-50 bg-Buff-500">
                  {developerInfo.lastName}
                </span>
              </h1>
            </div>
          </div>

          <div className="md:w-1/2 px-4 py-2 md:px-6 md:py-4">
            <h2 className="text-2xl font-bold">About</h2>
            <p className="text-lg text-EerieBlack-600">
              {developerInfo.biography}
            </p>

            <div className="flex items-center gap-x-4 text-3xl py-2 md:justify-center">
              <a href="https://www.linkedin.com/in/mohammadarab-frontend/">
                <FaLinkedinIn className="text-3xl text-primary-100 hover:-translate-y-2 transition-transform" />
              </a>
              <a href="mailto:mohammadreactjs@gmail.com?subject=New Project&body=Please send me a copy of your new program!">
                <MdOutlineMail className="text-3xl text-primary-100 hover:-translate-y-2 transition-transform" />
              </a>
              <a href="https://t.me/oldofdesert">
                <FaTelegramPlane className="text-3xl text-primary-100 hover:-translate-y-2 transition-transform" />
              </a>
              <a href="https://github.com/its-mohammad-js">
                <FiGithub className="text-3xl text-primary-100 hover:-translate-y-2 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMePage;
