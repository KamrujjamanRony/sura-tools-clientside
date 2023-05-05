import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-base-300 text-base-content">
      <footer className="footer p-10 max-w-7xl container mx-auto">
        <div>
          <span className="footer-title">Services</span>
          <Link to="/" className="link link-hover">
            Branding
          </Link>
          <Link to="/" className="link link-hover">
            Design
          </Link>
          <Link to="/" className="link link-hover">
            Marketing
          </Link>
          <Link to="/" className="link link-hover">
            Advertisement
          </Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link to="/" className="link link-hover">
            About us
          </Link>
          <Link to="/" className="link link-hover">
            Contact
          </Link>
          <Link to="/" className="link link-hover">
            Jobs
          </Link>
          <Link to="/" className="link link-hover">
            Press kit
          </Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link to="/" className="link link-hover">
            Terms of use
          </Link>
          <Link to="/" className="link link-hover">
            Privacy policy
          </Link>
          <Link to="/" className="link link-hover">
            Cookie policy
          </Link>
        </div>
      </footer>
      <footer className="footer py-4 flex items-center justify-center bg-black text-white">
          <p className="">
            Sura Tools Industries Ltd. Providing reliable service since 1978.
          </p>
      </footer>
    </div>
  );
};

export default Footer;
