import Image from "next/image";
import { FaKey, FaCarSide, FaHandsHelping } from "react-icons/fa";

const UnmatchedExcellence = () => {
  return (
    <section className="text-center bg-white p-8 max-w-[1440px] lg:h-screen lg:max-h-[760px] mx-auto">
      <h2 className="text-3xl font-bold mb-4">
        Unmatched excellence and customer satisfaction
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-8">
        Our dedication to providing exceptional services sets us apart from the
        competition. From the moment you engage with us, we strive to exceed
        your expectations in every interaction.
      </p>

      <div className="hero__image-container ">
        <div className="w-[90%] h-[180px] xs:h-[150px]  md:h-[200px] lg:h-[250px] z-0">
          <Image src="/car-2.webp" alt="hero" fill className="object-contain" />
        </div>
      </div>
      {/* Service icons and text */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
        <div className="flex flex-col items-center text-sm">
          <FaKey className="text-red-500 text-4xl mb-4" />
          <h3 className="font-semibold text-lg mb-2">
            Rent simply and quickly
          </h3>
          <p className="text-gray-600">
            We prioritize your needs and go above and beyond to ensure your
            experience with us is nothing short of outstanding.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <FaCarSide className="text-red-500 text-4xl mb-4" />
          <h3 className="font-semibold text-lg mb-2">
            Modern & well-maintained vehicles
          </h3>
          <p className="text-gray-600">
            Our fleet includes a wide selection of luxury cars, SUVs, and more,
            all meticulously maintained for your comfort and safety.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <FaHandsHelping className="text-red-500 text-4xl mb-4" />
          <h3 className="font-semibold text-lg mb-2">
            Prompt and flexible services
          </h3>
          <p className="text-gray-600">
            We ensure a seamless process with flexible pickup and delivery
            options tailored to your convenience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UnmatchedExcellence;
