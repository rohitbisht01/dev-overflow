import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 sm:px-12 dark:shadow-none">
      <Link href={"/"} className="flex items-center gap-1">
        <Image
          src={"/assets/images/site-logo.svg"}
          width={23}
          height={23}
          alt="Dev Overflow"
        />
        <p className="h2-bold text-dark100_light900 font-spaceGrotesk  max-sm:hidden dark:text-light-900">
          Dev <span className="text-primary-500">Overflow</span>
        </p>
      </Link>
    </nav>
  );
};

export default Navbar;
