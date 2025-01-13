import Image from "next/image";
import Link from "next/link";
import { FaCar } from "react-icons/fa6";
const Hero = () => {
  return (
    <div className="hero max-h-screen lg:h-screen lg:max-h-[760px] pt-14 lg:pt-24 ">
      <div className="flex-1 pt-10  padding-x">
        <h1 className="hero__title ">
          Explore the Finest <span className="text-primary-blue">Dubai</span>{" "}
          <span>Offers</span>
        </h1>

        <p className="hero__subtitle ">
          Find your ideal ride for any adventure with our diverse rang of
          affordable and dependable car rentals.
        </p>
        <Link
          href={""}
          className="flex gap-x-3 items-center w-fit px-5 py-3 bg-primary-blue text-white shadow font-semibold rounded-full mt-10 hover:bg-primary-blue-100 transition-all space-x-2 mb-12 "
        >
          Explore cars
          <FaCar />
        </Link>
      </div>
      <div className="hero__image-container ">
        <Link href={"/"} className="hero__image">
          <Image src="/car-1.webp" alt="hero" fill className="object-contain" />
        </Link>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
