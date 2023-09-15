import React from "react";
import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="flex flex-wrap flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/car2go-logo.png"
            alt="car2go logo"
            width={115}
            height={18}
            className="object-contain"
            layout="fixed"
          />
          <p>
            Car2Go <br /> All Rights Reserved &copy;
          </p>
        </div>

        <div className="footer_links flex flex-wrap gap-20">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              <ul>
                {link.links.map((item) => (
                  <li key={item.title}>
                    <Link href={item.url} className="text-gray-500">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <div className="footer__copyrights-link">
          <p>
            @2023 Car2Go. All Rights Reserved | Developed by Yasuko Miyazawa
          </p>
          <Link href="/" className="text-gray-500">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
