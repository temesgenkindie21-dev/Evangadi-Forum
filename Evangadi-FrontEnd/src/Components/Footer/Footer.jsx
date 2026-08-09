import React from "react";
import { Link } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import footerLogo from "../../assets/evangadi-footer-logo.png";

function Footer() {
  return (
    <footer className="bg-[#3B455A]  w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo & Social Icons */}
          <div>
            <img
              src={footerLogo}
              alt="Evangadi Logo"
              className="w-[200px] mb-6"
            />

            <div className="flex items-center gap-5 text-3xl">
              <a
                href="https://www.facebook.com/evangaditech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#FE8402] transition-colors duration-300"
              >
                <i className="ri-facebook-circle-line"></i>
              </a>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#FE8402] transition-colors duration-300"
              >
                <i className="ri-youtube-fill"></i>
              </a>

              <a
                href="https://www.instagram.com/evangaditech/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#FE8402] transition-colors duration-300"
              >
                <i className="ri-instagram-line"></i>
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-5">
              Useful Links
            </h2>

            <ul className="space-y-3 text-gray-300">
              <li>
                <a
                  href="/how-it-works"
                  className="hover:text-[#FE8402] transition-colors duration-300"
                >
                  How it Works
                </a>
              </li>

              <li>
                <a
                  href="https://www.evangadi.com/legal/terms/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FE8402] transition-colors duration-300"
                >
                  Terms of Service
                </a>
              </li>

              <li>
                <a
                  href="https://www.evangadi.com/legal/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FE8402] transition-colors duration-300"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-5">
              Contact Info
            </h2>

            <ul className="space-y-3 text-gray-300">
              <li>Evangadi Networks</li>
              <li>support@evangadi.com</li>
              <li>+1-202-386-2702</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
