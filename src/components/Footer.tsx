import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-gray-50 p-4 flex justify-center items-center text-gray-500">
      <div className="custom-btn btn-2 btn-active">
        <div className="flex items-center">
          <p>
            Powered by{" "}
            <a
              className="text-sm text-blue-500 dark:text-sky-300 hover:text-sky-500 cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
              href="https://mateshwari.netlify.app/"
            >
              Mateshwari
            </a>
          </p>
          <a
            href="https://www.linkedin.com/in/mateshwari-verma-a41143168/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 dark:text-sky-300 hover:text-sky-500 cursor-pointer pl-4"
          >
            <FaLinkedin size={17} />
          </a>
          <a
            href="https://www.instagram.com/_mpverma_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 dark:text-sky-300 hover:text-sky-500 cursor-pointer pl-2"
          >
            <FaInstagram size={17} />
          </a>
        </div>
        <p className="text-xs pt-2 text-center">
          &copy; {new Date().getFullYear()} SDE Kit. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
