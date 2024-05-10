import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faSquareInstagram,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <footer className="w-full min-h-96 py-4 bg-[#222222] ">
        <div className="conatainer flex justify-center items-center flex-wrap  px-2  ">
          <div className="h-52 w-96   py-5">
            <h1 className='text-slate-200 text-2xl font-["gilroy"] font-bold'>
              ColourWinner
            </h1>
            <p className="text-slate-300 font-normal text-left leading-5 text-sm mt-2">
              Welcome to Colourwinner.fun, where dreams come true and fortunes
              are won! We offer an exciting array of lottery games with amazing
              prizes waiting to be claimed by lucky winners like you.
            </p>
            <h3 className='text-slate-200 text-lg font-semibold mt-3 font-["Gilroy"] '>
              Follow Us:
            </h3>
            <div className="Social absolute w-full h-8 items-center flex gap-5 ">
              <a href="https/www.facebook.com">
                <FontAwesomeIcon
                  className="text-xl text-blue-900"
                  icon={faFacebookF}
                />
              </a>
              <a href="#">
                <FontAwesomeIcon
                  className="text-xl text-pink-900"
                  icon={faSquareInstagram}
                />
              </a>
              <a href="#">
                <FontAwesomeIcon className="text-xl" icon={faSquareXTwitter} />
              </a>
            </div>
          </div>
          <div className="h-48 w-64  flex flex-col gap-2 items-center  py-4">
            <h2 className='text-xl font-["Gilroy"] font-semibold  text-slate-200 mb-2 '>
              Usefull Links
            </h2>
            <a
              className='text-base text-slate-200 font-bold font-["Gilroy"]'
              href="#"
            >
              Home
            </a>
            <a
              className='text-base text-slate-200 font-bold font-["Gilroy"]'
              href="#"
            >
              About
            </a>
            <a
              className='text-base text-slate-200 font-bold font-["Gilroy"]'
              href="#"
            >
              Contact
            </a>
          </div>
          <div className="w-96 h-52 flex flex-col items-start gap-2 text-slate-200 py-4">
            <h2 className='text-3xl font-["Gilroy"] font-semibold  text-slate-200 mb-1 '>
              {" "}
              Support
            </h2>
            <a className='font-Semibold font-["Gilroy"]' href="#">
              {" "}
              <FontAwesomeIcon icon="fa-solid fa-phone" /> +91 0123456789{" "}
            </a>
            <a className='font-Semibold font-["Gilroy"]' href="#">
              {" "}
              <FontAwesomeIcon icon="fa-solid fa-envelope" /> support@gmail.com{" "}
            </a>
            <a className='font-Semibold font-["Gilroy"]' href="#">
              {" "}
              <FontAwesomeIcon icon="fa-solid fa-location-dot" /> H.No 100
              ,city, state{" "}
            </a>
          </div>
        </div>
        <div className="">
          <p className='text-slate-50  font-["Gilroy"] text-center tracking-tight'>
            &copy; {currentYear} Colour Winner. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
