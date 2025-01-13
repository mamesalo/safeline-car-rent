import Image from "next/image";
import Link from "next/link";

import CustomButton from "@/components/CustomButton";
import { FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => (
  <footer className="z-20 bg-white max-w-[1440px] mx-auto">
    <div className="max-w-[1440px] mx-auto pt-14 lg:pt-24 px-10 mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-14 ">
        {/* Logo */}
        <div className="flex flex-col flex-1 gap-y-8  ">
          <Link href="/" className="flex justify-center items-center">
            <Image
              src="/logo.webp"
              alt="logo"
              width={70}
              height={15}
              className="object-contain"
            />
          </Link>
          <p className="text-secondary text-center md:text-start">
            Luxury car rental in Dubai, competitive rates.
          </p>
          <div className="flex flex-col gap-y-4 font-semibold text-center items-center md:items-start ">
            <div className="flex items-center  gap-x-[10px]">
              <FaLocationDot />
              <Link href={""} className="font-medium hover:text-blue-500">
                28 Street 8, Port Saeed, Dubai, UAE{" "}
              </Link>
            </div>
            <div className="flex items-center gap-x-[10px]">
              <FaPhone />
              <Link href={""} className="font-medium hover:text-blue-500">
                +971 50 951 7174
              </Link>
            </div>
            <div className="flex items-center gap-x-[10px]">
              <FaEnvelope />
              <Link href={""} className="font-medium hover:text-blue-500">
                safeline.rc@gmail.com
              </Link>
            </div>
          </div>
        </div>
        {/* Links */}
        <div className="flex-1 flex flex-col lg:items-center">
          <div>
            <h3 className="text-xl font-bold mb-8 text-center md:text-start">
              Company
            </h3>
            <ul className="flex flex-col gap-y-4 font-semibold text-center text-sm md:text-start">
              <li>
                <Link
                  href={""}
                  className="hover:text-blue-500 underline underline-offset-4 transition-all"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="hover:text-blue-500 underline underline-offset-4 transition-all"
                >
                  Cars
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="hover:text-blue-500 underline underline-offset-4 transition-all"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* program */}
        <div className="flex-1 text-nowrap ">
          <h3 className="text-xl font-bold mb-8 text-center md:text-start">
            Working Hourse
          </h3>
          <div className="flex flex-col gap-y-4 items-center md:items-start">
            <div className="flex gap-x-2">
              <p className="text-secondary">Mon-Fri:</p>
              <p className="font-semibold">09:00AM - 09:00PM:</p>
            </div>
            <div className="flex gap-x-2">
              <p className="text-secondary">Sat:</p>
              <p className="font-semibold">09:00AM - 07:00PM:</p>
            </div>
            <div className="flex gap-x-2">
              <p className="text-secondary">Sun:</p>
              <p className="font-semibold">ِClosed</p>
            </div>
          </div>
        </div>
        {/* new letter */}
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-8  text-center md:text-start">
            Question
          </h3>
          <div className="flex gap-x-4 items-center text-4xl justify-center md:justify-start mb-4">
            <Link href={""} className="text-green-600">
              <IoLogoWhatsapp />
            </Link>
            <Link href={""}>
              <IoLogoFacebook className="text-blue-600" />
            </Link>
            <Link href={""}>
              <AiFillInstagram className="text-[#DD2A7B]" />
            </Link>
          </div>
          {/* form */}
          <form className="flex flex-col gap-y-5 ">
            <input
              type="text"
              required
              placeholder="Your phone number"
              className="outline-none bg-white h-14 rounded-lg pl-4 border-2 border-gray-500 focus:border-primary-blue"
            />
            <input
              type="text"
              required
              placeholder="Comment"
              className="outline-none bg-white h-14 rounded-lg pl-4 border-2 border-gray-500 focus:border-primary-blue"
            />
            <CustomButton
              title="Contact Us"
              btnType="submit"
              containerStyles="bg-primary-blue text-white shadow font-semibold rounded-full  hover:bg-primary-blue-100 transition-all"
            />
          </form>
        </div>
      </div>
    </div>
    {/* copy right */}
    <div className="text-center py-3 border-t text-sm">
      Copyright &copy; Safeline 2025. All rights reserved
    </div>
  </footer>
);

export default Footer;
