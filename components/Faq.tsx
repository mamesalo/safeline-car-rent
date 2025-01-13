import { faq } from "@/constants";

const Faq = () => {
  return (
    <section className="py-4 max-w-[1440px] mx-auto ">
      <div className="text-center mb-16">
        <h3 className="text-3xl mt-4 sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
          Frequently Asked <span className="text-primary-blue">Questions</span>
        </h3>
      </div>

      <div className="px-2 sm:px-16 w-full">
        {faq.map((item, index) => (
          <div key={index} className="flex items-start my-8">
            <div className="flex items-center justify-center p-3 mr-3 rounded-full bg-primary-blue text-xl font-semibold">
              <svg
                width="24px"
                fill="white"
                height="24px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g data-name="Layer 2">
                  <g data-name="menu-arrow">
                    <rect
                      width="24"
                      height="24"
                      transform="rotate(180 12 12)"
                      opacity="0"
                    ></rect>
                    <path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"></path>
                    <circle cx="12" cy="19" r="1"></circle>
                  </g>
                </g>
              </svg>
            </div>
            <div className="text-md">
              <h1 className="text-gray-900 font-semibold mb-2">
                {item.question}
              </h1>
              <p className="text-gray-500 text-sm">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
