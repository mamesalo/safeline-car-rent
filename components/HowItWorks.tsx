import Link from "next/link";
import { FaCar } from "react-icons/fa";

const HowItWorks = () => {
  return (
    <section className="bg-white relative max-w-[1440px]  lg:h-screen lg:max-h-[760px] mx-auto text-black-200 p-8 md:p-16">
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat blur-sm "
        style={{
          backgroundImage: `url('/car-3.webp')`, // Replace with your image path
        }}
      ></div>

      <div className="relative z-10">
        <h1 className="text-4xl font-bold mb-6">
          Rent a car just <span className="text-primary-blue">with</span>{" "}
          <span className="text-primary-blue">3 steps</span>
        </h1>

        <Link
          href={""}
          className="flex gap-x-3 items-center w-fit px-5 py-3 bg-primary-blue text-white shadow font-semibold rounded mt-10 hover:bg-primary-blue-100 transition-all space-x-2 mb-12 "
        >
          Rent a car
          <FaCar />
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              number: "1",
              title: "Choose a car",
              description:
                "Browse our exclusive fleet. Explore a wide selection of premium vehicles including luxury sedans, sports cars, SUVs and convertibles.",
            },
            {
              number: "2",
              title: "Pick-up date",
              description:
                "Submit your rental request. Once you have selected a vehicle, please complete our simple online request form. Our team will contact you promptly to confirm the details.",
            },
            {
              number: "3",
              title: "Get your car",
              description:
                "Choose a convenient pickup option. You can pick up the car from the showroom or we will deliver it to you.",
            },
          ].map((step, index) => (
            <div
              key={index}
              className="relative bg-white text-black p-6 rounded-lg shadow-lg"
            >
              <div className="absolute -top-4 -left-4 bg-primary-blue-100 text-white rounded-full h-12 w-12 flex items-center justify-center font-bold text-lg">
                {step.number}
              </div>
              <h2 className="font-bold text-xl mb-2">{step.title}</h2>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
