import React from "react";
import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/car2go-logo.png"
            alt="Car2Go Logo"
            width={150}
            height={18}
            className="object-contaion"
          />
        </Link>

        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyles="text-teal-800 rounder-full bg-white min-w-[130px]"
        />
      </nav>
    </header>
  );
};

export default Navbar;
