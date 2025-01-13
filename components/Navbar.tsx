"use client";
import Link from "next/link";
import Image from "next/image";
import { BiMenuAltRight, BiX } from "react-icons/bi";
import { useState } from "react";

const NavBar = () => {
    const [header, setHeader] = useState(false);
    const [nav, setNav] = useState(false); 
    return (
  <header className='w-full absolute z-10'>
    <div className={`max-w-[1440px] mx-auto flex flex-col lg:flex-row lg:justify-between items-center sm:px-16 px-6 py-2  ${nav ? `shadow bg-white`:`bg-transparent`}`}>
      <div className="flex justify-between items-center w-full lg:w-fit">
      <Link href='/' className='flex justify-center items-center'>
        <Image
          src='/logo.webp'
          alt='logo'
          width={70}
          height={15}
          className='object-contain'
        />
      </Link>
      <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer lg:hidden"
          >
            {nav ? (
              <BiX className="text-4xl" />
            ) : (
              <BiMenuAltRight className="text-4xl" />
            )}
          </div>
      </div>
      <nav
          className={`${
            nav ? `max-h-max py-8 lg:px-0 ` : `max-h-0 lg:max-h-max`
          } flex flex-col  w-full px-4 bg-white gap-y-6 overflow-hidden font-bold lg:font-medium lg:flex-row lg:text-lg lg:w-max lg:gap-x-8 lg:h-max lg:bg-transparent lg:pb-0 transition-all duration-150 text-center lg:text-left uppercase text-sm lg:text-[15px] lg:normal-case`}
        >
            <Link className="cursor-pointer  border-b-2 border-transparent  lg:hover:border-primary-blue-100 hover:text-primary-blue transition-all " href="#home">
            Home
          </Link>
            <Link className="cursor-pointer   border-b-2 border-transparent  lg:hover:border-primary-blue-100 hover:text-primary-blue transition-all" href="#home">
            Cars
          </Link>
            <Link className="cursor-pointer  border-b-2 border-transparent  lg:hover:border-primary-blue-100 hover:text-primary-blue transition-all" href="#home">
            About
          </Link>
            <Link className="cursor-pointer  border-b-2 border-transparent  lg:hover:border-primary-blue-100 hover:text-primary-blue transition-all" href="#home">
            Contact us
          </Link>
         
        </nav>
    </div>
  </header>
    );
};

export default NavBar;