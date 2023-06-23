import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-slate-600 drop-shadow-xl p-5 top-0 sticky z-10">
      <div className=" prose prose-xl mx-auto flex justify-between flex-col sm:flex-row items-center gap-2 ">
        <Link
          href={"/"}
          className="text-white/80 no-underline hover:text-white duration-100 text-2xl"
        >
          Pyaesone Khant{" "}
        </Link>
        <div className=" flex items-center gap-5 text-2xl ">
          <Link
            className="text-white/80 hover:text-white duration-100"
            href={"https://www.facebook.com"}
          >
            {" "}
            <FaFacebook />{" "}
          </Link>
          <Link
            className="text-white/80 hover:text-white duration-100"
            href={"https://www.instagram.com"}
          >
            {" "}
            <FaInstagram />{" "}
          </Link>
          <Link
            className="text-white/80 hover:text-white duration-100"
            href={"https://www.twitter.com"}
          >
            {" "}
            <FaTwitter />{" "}
          </Link>
          <Link
            className="text-white/80 hover:text-white duration-100"
            href={"https://www.linkedin.com"}
          >
            {" "}
            <FaLinkedin />{" "}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
