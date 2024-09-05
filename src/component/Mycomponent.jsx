import React, { useState } from "react";
import Header from "./Header";
import Features from "./Features";
import BasicForm from "./Basicform";

const MyComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* google font */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n    body {\n      font-family: Poppins, sans-serif;\n    }\n  ",
        }}
      />
      <div className="bg-[#f8f9ff] text-black text-[15px]">
        <Header />
        <div className="relative">
          <div className="px-4 sm:px-10">
            <div className="mt-16 max-w-4xl mx-auto text-center relative z-10">
              <h1 className="md:text-6xl text-4xl font-extrabold mb-6 md:!leading-[75px]">
                Empowering Textile Trade
              </h1>
              <p className="text-base">
                Embark on a seamless textile journey with Kavastra, connecting
                you to premium wholesalers for the best products at unbeatable
                prices. Elevate your business with trusted partnerships today.
              </p>
              <div className="mt-10">
                <a href="https://forms.gle/5rzsKcHSeJQawXxG9">
                  <button className="px-6 py-3 rounded-xl text-white bg-cyan-900 transition-all hover:bg-cyan-800">
                    Get started today
                  </button>
                </a>
              </div>
            </div>
            <hr className="my-12 border-gray-300" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
              <a href="https://www.instagram.com/kavastra_official/">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
                  className="w-28 mx-auto"
                  alt="Instagram-logo"
                />
              </a>
              <img
                src="https://readymadeui.com/facebook-logo.svg"
                className="w-28 mx-auto"
                alt="facebook-logo"
              />
              <a href="https://www.linkedin.com/company/kavastra/">
                <img
                  src="https://readymadeui.com/linkedin-logo.svg"
                  className="w-28 mx-auto"
                  alt="linkedin-logo"
                />
              </a>
              <img
                src="https://readymadeui.com/pinterest-logo.svg"
                className="w-28 mx-auto"
                alt="pinterest-logo"
              />
            </div>
          </div>
          <img
            src="https://readymadeui.com/bg-effect.svg"
            className="absolute inset-0 w-full h-full"
          />
        </div>
        <div className="px-4 sm:px-10 " id="features">
          <div className="mt-32 max-w-7xl mx-auto">
            {/* <div className="mb-16 max-w-2xl text-center mx-auto">
              <h2 className="md:text-4xl text-3xl font-extrabold mb-6">
                Our Features
              </h2>
              <p className="mt-6">
                Kavastra connects retailers directly with manufacturers and
                wholesalers, ensuring top quality and competitive pricing. Enjoy
                secure payments, transparent transactions, and efficient
                logistics—all through our user-friendly platform.
              </p>
            </div> */}
            <div
              id="features-section"
              className="bg-gray-100 py-16 px-6 md:px-12"
            >
              <Features />
              {/* <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h1 className="text-4xl font-bold mb-4">Our Features</h1>
                  <p className="text-xl text-muted-foreground mb-8">
                    Kavastra connects retailers with manufacturers and
                    wholesalers, ensuring top quality and competitive pricing.
                    Enjoy secure payments, transparent transactions, and
                    efficient logistics—all through our user-friendly platform.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="p-6 bg-white rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4">Connections</h2>
                    <p className="text-muted-foreground">
                      Retailers can connect with manufacturers and wholesalers,
                      cutting out the middlemen and ensuring better pricing and
                      quality control.
                    </p>
                  </div>

                  <div className="p-6 bg-white rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4">
                      Secure Payments
                    </h2>
                    <p className="text-muted-foreground">
                      Our platform offers secure payment gateways, ensuring that
                      all transactions are safe and transparent.
                    </p>
                  </div>

                  <div className="p-6 bg-white rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4">
                      Efficient Logistics
                    </h2>
                    <p className="text-muted-foreground">
                      We partner with reliable logistics providers to ensure
                      that your products are delivered on time, every time.
                    </p>
                  </div>
                </div>
              </div> */}
            </div>

            {/* <div className="grid lg:grid-cols-3 md:grid-cols-2 max-md:max-w-lg mx-auto gap-8">
              <div className="sm:p-6 p-4 flex bg-white rounded-md border shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-12 h-12 mr-6 bg-blue-50 p-3 rounded-md shrink-0"
                  viewBox="0 0 32 32"
                >
                  <path
                    d="M28.068 12h-.128a.934.934 0 0 1-.864-.6.924.924 0 0 1 .2-1.01l.091-.091a2.938 2.938 0 0 0 0-4.147l-1.511-1.51a2.935 2.935 0 0 0-4.146 0l-.091.091A.956.956 0 0 1 20 4.061v-.129A2.935 2.935 0 0 0 17.068 1h-2.136A2.935 2.935 0 0 0 12 3.932v.129a.956.956 0 0 1-1.614.668l-.086-.091a2.935 2.935 0 0 0-4.146 0l-1.516 1.51a2.938 2.938 0 0 0 0 4.147l.091.091a.935.935 0 0 1 .185 1.035.924.924 0 0 1-.854.579h-.128A2.935 2.935 0 0 0 1 14.932v2.136A2.935 2.935 0 0 0 3.932 20h.128a.934.934 0 0 1 .864.6.924.924 0 0 1-.2 1.01l-.091.091a2.938 2.938 0 0 0 0 4.147l1.51 1.509a2.934 2.934 0 0 0 4.147 0l.091-.091a.936.936 0 0 1 1.035-.185.922.922 0 0 1 .579.853v.129A2.935 2.935 0 0 0 14.932 31h2.136A2.935 2.935 0 0 0 20 28.068v-.129a.956.956 0 0 1 1.614-.668l.091.091a2.935 2.935 0 0 0 4.146 0l1.511-1.509a2.938 2.938 0 0 0 0-4.147l-.091-.091a.935.935 0 0 1-.185-1.035.924.924 0 0 1 .854-.58h.128A2.935 2.935 0 0 0 31 17.068v-2.136A2.935 2.935 0 0 0 28.068 12ZM29 17.068a.933.933 0 0 1-.932.932h-.128a2.956 2.956 0 0 0-2.083 5.028l.09.091a.934.934 0 0 1 0 1.319l-1.511 1.509a.932.932 0 0 1-1.318 0l-.09-.091A2.957 2.957 0 0 0 18 27.939v.129a.933.933 0 0 1-.932.932h-2.136a.933.933 0 0 1-.932-.932v-.129a2.951 2.951 0 0 0-5.028-2.082l-.091.091a.934.934 0 0 1-1.318 0l-1.51-1.509a.934.934 0 0 1 0-1.319l.091-.091A2.956 2.956 0 0 0 4.06 18h-.128A.933.933 0 0 1 3 17.068v-2.136A.933.933 0 0 1 3.932 14h.128a2.956 2.956 0 0 0 2.083-5.028l-.09-.091a.933.933 0 0 1 0-1.318l1.51-1.511a.932.932 0 0 1 1.318 0l.09.091A2.957 2.957 0 0 0 14 4.061v-.129A.933.933 0 0 1 14.932 3h2.136a.933.933 0 0 1 .932.932v.129a2.956 2.956 0 0 0 5.028 2.082l.091-.091a.932.932 0 0 1 1.318 0l1.51 1.511a.933.933 0 0 1 0 1.318l-.091.091A2.956 2.956 0 0 0 27.94 14h.128a.933.933 0 0 1 .932.932Z"
                    data-original="#000000"
                  />
                  <path
                    d="M16 9a7 7 0 1 0 7 7 7.008 7.008 0 0 0-7-7Zm0 12a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5Z"
                    data-original="#000000"
                  />
                </svg>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Customization</h3>
                  <p>
                    Tailor our product to suit your needs Tailor our product to
                    suit your needs.
                  </p>
                </div>
              </div>
              <div className="sm:p-6 p-4 flex bg-white rounded-md border">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-12 h-12 mr-6 bg-blue-50 p-3 rounded-md shrink-0"
                  viewBox="0 0 682.667 682.667"
                >
                  <defs>
                    <clipPath id="a" clipPathUnits="userSpaceOnUse">
                      <path d="M0 512h512V0H0Z" data-original="#000000" />
                    </clipPath>
                  </defs>
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit={10}
                    strokeWidth={40}
                    clipPath="url(#a)"
                    transform="matrix(1.33 0 0 -1.33 0 682.667)"
                  >
                    <path
                      d="M256 492 60 410.623v-98.925C60 183.674 137.469 68.38 256 20c118.53 48.38 196 163.674 196 291.698v98.925z"
                      data-original="#000000"
                    />
                    <path
                      d="M178 271.894 233.894 216 334 316.105"
                      data-original="#000000"
                    />
                  </g>
                </svg>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Secure Payments
                  </h3>
                  <p>
                    Your transactions are safeguarded by advanced encryption and
                    secure payment gateways, ensuring that every payment is safe
                    and protected.
                  </p>
                </div>
              </div>
              <div className="sm:p-6 p-4 flex bg-white rounded-md border">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-12 h-12 mr-6 bg-blue-50 p-3 rounded-md shrink-0"
                  viewBox="0 0 512.001 512.001"
                >
                  <path
                    d="M271.029 0c-33.091 0-61 27.909-61 61s27.909 61 61 61 60-27.909 60-61-26.909-61-60-61zm66.592 122c-16.485 18.279-40.096 30-66.592 30-26.496 0-51.107-11.721-67.592-30-14.392 15.959-23.408 36.866-23.408 60v15c0 8.291 6.709 15 15 15h151c8.291 0 15-6.709 15-15v-15c0-23.134-9.016-44.041-23.408-60zM144.946 460.404 68.505 307.149c-7.381-14.799-25.345-20.834-40.162-13.493l-19.979 9.897c-7.439 3.689-10.466 12.73-6.753 20.156l90 180c3.701 7.423 12.704 10.377 20.083 6.738l19.722-9.771c14.875-7.368 20.938-25.417 13.53-40.272zM499.73 247.7c-12.301-9-29.401-7.2-39.6 3.9l-82 100.8c-5.7 6-16.5 9.6-22.2 9.6h-69.901c-8.401 0-15-6.599-15-15s6.599-15 15-15h60c16.5 0 30-13.5 30-30s-13.5-30-30-30h-78.6c-7.476 0-11.204-4.741-17.1-9.901-23.209-20.885-57.949-30.947-93.119-22.795-19.528 4.526-32.697 12.415-46.053 22.993l-.445-.361-21.696 19.094L174.28 452h171.749c28.2 0 55.201-13.5 72.001-36l87.999-126c9.9-13.201 7.2-32.399-6.299-42.3z"
                    data-original="#000000"
                  />
                </svg>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Support</h3>
                  <p>
                    Our dedicated support team is available to assist you with
                    any questions or issues, providing timely and reliable help
                    whenever you need it.
                  </p>
                </div>
              </div>
              <div className="sm:p-6 p-4 flex bg-white rounded-md border">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-12 h-12 mr-6 bg-blue-50 p-3 rounded-md shrink-0"
                  viewBox="0 0 24 24"
                >
                  <g fillRule="evenodd" clipRule="evenodd">
                    <path
                      d="M17.03 8.97a.75.75 0 0 1 0 1.06l-4.2 4.2a.75.75 0 0 1-1.154-.114l-1.093-1.639L8.03 15.03a.75.75 0 0 1-1.06-1.06l3.2-3.2a.75.75 0 0 1 1.154.114l1.093 1.639L15.97 8.97a.75.75 0 0 1 1.06 0z"
                      data-original="#000000"
                    />
                    <path
                      d="M13.75 9.5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-1.25H14.5a.75.75 0 0 1-.75-.75z"
                      data-original="#000000"
                    />
                    <path
                      d="M3.095 3.095C4.429 1.76 6.426 1.25 9 1.25h6c2.574 0 4.57.51 5.905 1.845C22.24 4.429 22.75 6.426 22.75 9v6c0 2.574-.51 4.57-1.845 5.905C19.571 22.24 17.574 22.75 15 22.75H9c-2.574 0-4.57-.51-5.905-1.845C1.76 19.571 1.25 17.574 1.25 15V9c0-2.574.51-4.57 1.845-5.905zm1.06 1.06C3.24 5.071 2.75 6.574 2.75 9v6c0 2.426.49 3.93 1.405 4.845.916.915 2.419 1.405 4.845 1.405h6c2.426 0 3.93-.49 4.845-1.405.915-.916 1.405-2.419 1.405-4.845V9c0-2.426-.49-3.93-1.405-4.845C18.929 3.24 17.426 2.75 15 2.75H9c-2.426 0-3.93.49-4.845 1.405z"
                      data-original="#000000"
                    />
                  </g>
                </svg>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Performance</h3>
                  <p>
                    Gain valuable insights with our advanced analytics tools,
                    providing you with real-time data and performance metrics to
                    make informed decisions and optimize your business
                    operations.
                  </p>
                </div>
              </div>
              <div className="sm:p-6 p-4 flex bg-white rounded-md border">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
                  <p>
                    Tailor our product to suit your needs Expand your reach with
                    our global network.
                  </p>
                </div>
              </div>
              <div className="sm:p-6 p-4 flex bg-white rounded-md border">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-12 h-12 mr-6 bg-blue-50 p-3 rounded-md shrink-0"
                  viewBox="0 0 682.667 682.667"
                >
                  <defs>
                    <clipPath id="a" clipPathUnits="userSpaceOnUse">
                      <path d="M0 512h512V0H0Z" data-original="#000000" />
                    </clipPath>
                  </defs>
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeMiterlimit={10}
                    strokeWidth={30}
                    clipPath="url(#a)"
                    transform="matrix(1.33 0 0 -1.33 0 682.667)"
                  >
                    <path
                      d="M226 15v60c0 16.568-13.432 30-30 30H76c-16.568 0-30-13.432-30-30V15Zm-45 165c0-24.853-20.147-45-45-45s-45 20.147-45 45 20.147 45 45 45 45-20.147 45-45ZM466 15v60c0 16.568-13.432 30-30 30H316c-16.568 0-30-13.432-30-30V15Zm-45 165c0-24.853-20.147-45-45-45s-45 20.147-45 45 20.147 45 45 45 45-20.147 45-45Zm-75 167v-50.294L286 347h-60.002L166 296.706V347h-15c-41.421 0-75 33.579-75 75s33.579 75 75 75h210c41.421 0 75-33.579 75-75s-33.579-75-75-75Zm-105 75h30m-90 0h30m90 0h30"
                      data-original="#000000"
                    />
                  </g>
                </svg>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Communication</h3>
                  <p>
                    Tailor our product to suit your needs Seamless communication
                    for your team.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
          <div className="mt-32 bg-white rounded-md px-4 py-12">
            <h2 className="md:text-4xl text-3xl font-extrabold mb-6 text-center">
              Maximize Your Business Potential with Kavastra!
            </h2>
            <div className="grid md:grid-cols-2 justify-center items-center gap-10 max-w-7xl mx-auto">
              <div className="max-md:text-center">
                {/* <h2 className="md:text-4xl text-3xl font-extrabold mb-6">
                  Maximize Your Business Potential with Kavastra!
                </h2> */}
                <p>
                  <h3 className="font-bold ">For Wholsalers</h3>
                  Expand your reach and boost your sales by showcasing your
                  products to eager retailers. No middlemen, no delays—just
                  straightforward transactions that grow your business. Start
                  selling on Kavastra now and watch your profits soar!
                </p>
                {/* <button
                  type="button"
                  className="px-6 py-3 rounded-xl text-white bg-cyan-900 transition-all hover:bg-cyan-800 mt-10"
                >
                  Try it today
                </button> */}
              </div>
              <div>
                <p className="mt-8 mb-8 pt-8 pb-10">
                  <h3 className="font-bold ">For Retailers</h3>
                  Discover top-quality products at competitive prices, all from
                  trusted wholesalers. Enjoy the ease of secure payments and
                  direct communication. Enhance your product lineup today—sign
                  up with Kavastra and buy directly from the source!
                </p>
                {/* <img
                  src="https://www.faria.org/wp-content/uploads/2021/03/activity-management.png"
                  alt="Premium Benefits"
                  className="w-full mx-auto"
                /> */}
              </div>
            </div>
          </div>
          {/* <div className="mt-32">
            <div className="mb-16 text-center">
              <h2 className="md:text-4xl text-3xl font-extrabold">
                What our happy client say
              </h2>
            </div>
            <div className="grid md:grid-cols-3 md:py-16 gap-8 max-w-7xl max-md:max-w-lg mx-auto relative">
              <div className="bg-blue-100 lg:max-w-[70%] max-w-[80%] h-full w-full inset-0 mx-auto rounded-3xl absolute max-md:hidden"></div>
              <div className="h-auto lg:p-6 p-4 rounded-md mx-auto bg-white relative max-md:shadow-md">
                <div>
                  <img
                    src="https://readymadeui.com/profile_2.webp"
                    className="w-12 h-12 rounded-full"
                  />
                  <h4 className="whitespace-nowrap font-semibold mt-2">
                    John Doe
                  </h4>
                  <p className="mt-1 text-xs">Founder of Rubik</p>
                </div>
                <div className="mt-4">
                  <p>
                    The service was amazing. I never had to wait that long for
                    my food. The staff was friendly and attentive, and the
                    delivery was impressively prompt.
                  </p>
                </div>
              </div>
              <div className="h-auto lg:p-6 p-4 rounded-md mx-auto bg-white relative max-md:shadow-md">
                <div>
                  <img
                    src="https://readymadeui.com/profile_3.webp"
                    className="w-12 h-12 rounded-full"
                  />
                  <h4 className="whitespace-nowrap font-semibold mt-2">
                    Mark Adair
                  </h4>
                  <p className="mt-1 text-xs">Founder of Alpha</p>
                </div>
                <div className="mt-4">
                  <p>
                    The service was amazing. I never had to wait that long for
                    my food. The staff was friendly and attentive, and the
                    delivery was impressively prompt.
                  </p>
                </div>
              </div>
              <div className="h-auto lg:p-6 p-4 rounded-md mx-auto bg-white relative max-md:shadow-md hover:animate-fadeOut ">
                <div>
                  <img
                    src="https://readymadeui.com/profile_4.webp"
                    className="w-12 h-12 rounded-full"
                  />
                  <h4 className="whitespace-nowrap font-semibold mt-2">
                    Simon Konecki
                  </h4>
                  <p className="mt-1 text-xs">Founder of Labar</p>
                </div>
                <div className="mt-4">
                  <p>
                    The service was amazing. I never had to wait that long for
                    my food. The staff was friendly and attentive, and the
                    delivery was impressively prompt.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="mt-32 max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="md:text-4xl text-3xl font-extrabold">
                Choose a Subscription
              </h2>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-16 max-md:max-w-lg max-md:mx-auto">
              <div className="bg-white rounded sm:p-6 p-4 hover:bg-cyan-900">
                <h3 className="text-xl font-semibold">Free</h3>
                <p className="mt-2">
                  Ideal for individuals who need quick access to basic features.
                </p>
                <div className="mt-6">
                  <h2 className="text-4xl font-semibold">
                    $0
                    <span className="text-gray-500 ml-2 text-[15px]">
                      / Month
                    </span>
                  </h2>
                  <button
                    type="button"
                    className="w-full mt-6 px-6 py-3 rounded-xl text-white bg-cyan-900 transition-all hover:bg-cyan-800"
                  >
                    Get Started
                  </button>
                </div>
                <div className="mt-6">
                  <h4 className="text-base font-bold mb-4">Plan Includes</h4>
                  <ul className="space-y-5">
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        className="mr-4 fill-green-500"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                          data-original="#000000"
                        />
                      </svg>
                      50 Image generations
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        className="mr-4 fill-green-500"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                          data-original="#000000"
                        />
                      </svg>
                      500 Credits
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        className="mr-4 fill-green-500"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                          data-original="#000000"
                        />
                      </svg>
                      Monthly 100 Credits Free
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        className="mr-4 fill-green-500"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                          data-original="#000000"
                        />
                      </svg>
                      Customer Support
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        className="mr-4 fill-green-500"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                          data-original="#000000"
                        />
                      </svg>
                      Dedicated Server
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        className="mr-4 fill-green-500"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                          data-original="#000000"
                        />
                      </svg>
                      Priority Generations
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        className="mr-4 fill-green-500"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                          data-original="#000000"
                        />
                      </svg>
                      50GB Cloud Storage
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-blue-600 rounded sm:p-6 p-4 text-white shadow-lg shadow-blue-300">
                <h3 className="text-xl font-semibold">Professional</h3>
                <p className="mt-2">
                  Ideal for individuals who who need advanced features and tools
                  for client work.
                </p>
                <div className="mt-6">
                  <h2 className="text-4xl font-semibold">
                    $25
                    <span className="text-gray-200 ml-2 text-[15px]">
                      / Month
                    </span>
                  </h2>
                  <button
                    type="button"
                    className="w-full mt-6 px-6 py-3 rounded-xl text-black bg-white transition-all hover:bg-gray-100"
                  >
                    Get Started
                  </button>
                </div>
                <div className="mt-6">
                  <h4 className="text-base font-bold mb-4">Plan Includes</h4>
                  <ul className="space-y-5">
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        className="mr-4 fill-white"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                          data-original="#000000"
                        />
                      </svg>
                      500 Image generations
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        className="mr-4 fill-white"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                          data-original="#000000"
                        />
                      </svg>
                      300 Credits
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        className="mr-4 fill-white"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                          data-original="#000000"
                        />
                      </svg>
                      Monthly 1000 Credits Free
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        className="mr-4 fill-white"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                          data-original="#000000"
                        />
                      </svg>
                      Customer Support
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        className="mr-4 fill-white"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                          data-original="#000000"
                        />
                      </svg>
                      Dedicated Server
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        className="mr-4 fill-white"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                          data-original="#000000"
                        />
                      </svg>
                      Priority Generations
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        className="mr-4 fill-white"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                          data-original="#000000"
                        />
                      </svg>
                      500GB Cloud Storage
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-white rounded sm:p-6 p-4">
                <h3 className="text-xl font-semibold">Enterprise</h3>
                <p className="mt-2">
                  Ideal for businesses who need personalized services and
                  security for large teams.
                </p>
                <div className="mt-6">
                  <h2 className="text-4xl font-semibold">
                    $100
                    <span className="text-gray-500 ml-2 text-[15px]">
                      / Month
                    </span>
                  </h2>
                  <button
                    type="button"
                    className="w-full mt-6 px-6 py-3 rounded-xl text-white bg-cyan-900 transition-all hover:bg-cyan-800"
                  >
                    Get Started
                  </button>
                </div>
                <div className="mt-6">
                  <h4 className="text-base font-bold mb-4">Plan Includes</h4>
                  <ul className="space-y-5">
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        className="mr-4 fill-green-500"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                          data-original="#000000"
                        />
                      </svg>
                      5000 Image generations
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        className="mr-4 fill-green-500"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                          data-original="#000000"
                        />
                      </svg>
                      10000 Credits
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        className="mr-4 fill-green-500"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                          data-original="#000000"
                        />
                      </svg>
                      Monthly 2000 Credits Free
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        className="mr-4 fill-green-500"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                          data-original="#000000"
                        />
                      </svg>
                      Customer Support
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        className="mr-4 fill-green-500"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                          data-original="#000000"
                        />
                      </svg>
                      Dedicated Server
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        className="mr-4 fill-green-500"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                          data-original="#000000"
                        />
                      </svg>
                      Priority Generations
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        className="mr-4 fill-green-500"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                          data-original="#000000"
                        />
                      </svg>
                      1000GB Cloud Storage
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="mt-32">
            <div className="sm:max-w-7xl max-w-sm mx-auto">
              <div className="text-center">
                <h2 className="md:text-4xl text-3xl font-extrabold">
                  Meet our team
                </h2>
                <p className="mt-6">
                  Meet our team of professionals to serve you.
                </p>
              </div>
              <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-8 gap-y-20 text-center mt-32">
                <div className="bg-gray-200 relative rounded">
                  <img
                    src="https://readymadeui.com/team-1.webp"
                    className="w-32 h-32 rounded-full inline-block -mt-12"
                  />
                  <div className="py-6">
                    <h4 className="text-base font-semibold">John Doe</h4>
                    <p className="text-xs mt-1">Software Engineer</p>
                    <div className="space-x-4 mt-6">
                      <button
                        type="button"
                        className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-gray-200"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12px"
                          fill="#000"
                          viewBox="0 0 155.139 155.139"
                        >
                          <path
                            d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                            data-original="#010002"
                          />
                        </svg>
                      </button>
                      <button
                        type="button"
                        className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12px"
                          fill="#000"
                          viewBox="0 0 512 512"
                        >
                          <path
                            d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                            data-original="#03a9f4"
                          />
                        </svg>
                      </button>
                      <button
                        type="button"
                        className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14px"
                          fill="#000"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                            data-original="#0077b5"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-200 relative rounded">
                  <img
                    src="https://readymadeui.com/team-2.webp"
                    className="w-32 h-32 rounded-full inline-block -mt-12"
                  />
                  <div className="py-6">
                    <h4 className="text-base font-semibold">Mark Adair</h4>
                    <p className="text-xs mt-1">Software Engineer</p>
                    <div className="space-x-4 mt-6">
                      <button
                        type="button"
                        className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-gray-200"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12px"
                          fill="#000"
                          viewBox="0 0 155.139 155.139"
                        >
                          <path
                            d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                            data-original="#010002"
                          />
                        </svg>
                      </button>
                      <button
                        type="button"
                        className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12px"
                          fill="#000"
                          viewBox="0 0 512 512"
                        >
                          <path
                            d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                            data-original="#03a9f4"
                          />
                        </svg>
                      </button>
                      <button
                        type="button"
                        className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14px"
                          fill="#000"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                            data-original="#0077b5"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-200 relative rounded">
                  <img
                    src="https://readymadeui.com/team-3.webp"
                    className="w-32 h-32 rounded-full inline-block -mt-12"
                  />
                  <div className="py-6">
                    <h4 className="text-base font-semibold">Simon Konecki</h4>
                    <p className="text-xs mt-1">Web Designer</p>
                    <div className="space-x-4 mt-6">
                      <button
                        type="button"
                        className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-gray-200"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12px"
                          fill="#000"
                          viewBox="0 0 155.139 155.139"
                        >
                          <path
                            d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                            data-original="#010002"
                          />
                        </svg>
                      </button>
                      <button
                        type="button"
                        className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12px"
                          fill="#000"
                          viewBox="0 0 512 512"
                        >
                          <path
                            d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                            data-original="#03a9f4"
                          />
                        </svg>
                      </button>
                      <button
                        type="button"
                        className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14px"
                          fill="#000"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                            data-original="#0077b5"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-200 relative rounded">
                  <img
                    src="https://readymadeui.com/team-6.webp"
                    className="w-32 h-32 rounded-full inline-block -mt-12"
                  />
                  <div className="py-6">
                    <h4 className="text-base font-semibold">Eleanor</h4>
                    <p className="text-xs mt-1">Web Designer</p>
                    <div className="space-x-4 mt-6">
                      <button
                        type="button"
                        className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-gray-200"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12px"
                          fill="#000"
                          viewBox="0 0 155.139 155.139"
                        >
                          <path
                            d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                            data-original="#010002"
                          />
                        </svg>
                      </button>
                      <button
                        type="button"
                        className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12px"
                          fill="#000"
                          viewBox="0 0 512 512"
                        >
                          <path
                            d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                            data-original="#03a9f4"
                          />
                        </svg>
                      </button>
                      <button
                        type="button"
                        className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14px"
                          fill="#000"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                            data-original="#0077b5"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* Here the code for wholsaler component starts */}
          <div
            id="wholsalers"
            className="bg-background min-h-screen p-6 md:p-12"
          >
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">
                  Join Kavastra as a Wholesaler
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Unlock a world of opportunities and grow your business with
                  Kavastra.
                </p>
                {/* <button className="bg-primary text-white py-2 px-4 rounded-lg mr-4">
                  Join as a Wholesaler
                </button> */}
                <button className="border border-primary text-primary py-2 px-4 rounded-lg mr-28 ">
                  Explore Retailer Network
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
                  <div className="text-primary mb-3 text-4xl">👥</div>
                  <h3 className="text-lg font-semibold mb-2">
                    Direct Access to Retailers
                  </h3>
                  <p>
                    Connect directly with a network of verified retailers,
                    eliminating intermediaries and increasing profit margins.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
                  <div className="text-primary mb-3 text-4xl">📦</div>
                  <h3 className="text-lg font-semibold mb-2">
                    Product Listing & Management
                  </h3>
                  <p>
                    Easy-to-use interface for adding, updating, and managing
                    products. Bulk upload options for managing extensive
                    inventories.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
                  <div className="text-primary mb-3 text-4xl">💵</div>
                  <h3 className="text-lg font-semibold mb-2">
                    Order Management
                  </h3>
                  <p>
                    Streamlined order processing with real-time updates on
                    orders. Automated order tracking and inventory management.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
                  <div className="text-primary mb-3 text-4xl">🔒</div>
                  <h3 className="text-lg font-semibold mb-2">
                    Secure Payment Gateway
                  </h3>
                  <p>
                    Integrated, secure payment solutions to ensure hassle-free
                    transactions. Multiple payment options to cater to different
                    retailer preferences.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
                  <div className="text-primary mb-3 text-4xl">📊</div>
                  <h3 className="text-lg font-semibold mb-2">
                    Analytics & Reporting
                  </h3>
                  <p>
                    Access to detailed analytics on sales, order trends, and
                    customer behavior. Customizable reports to track performance
                    and make informed decisions.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
                  <div className="text-primary mb-3 text-4xl">🚚</div>
                  <h3 className="text-lg font-semibold mb-2">
                    Logistics Support
                  </h3>
                  <p>
                    Partnership with reliable logistics providers for efficient
                    shipping and delivery. Real-time tracking of shipments and
                    automated updates for retailers.
                  </p>
                </div>
              </div>

              {/* <div className="mt-12 text-center">
                <h2 className="text-2xl font-semibold mb-4">
                  Ready to expand your wholesale business?
                </h2>
                <button className="bg-primary text-white py-2 px-4 rounded-lg">
                  Start Listing Your Products
                </button>
              </div> */}

              {/* <div className="mt-12 bg-muted p-6 rounded-lg flex items-center justify-between">
                <div className="flex items-center">
                  <div className="text-primary text-4xl mr-4">🔒</div>
                  <div>
                    <h3 className="font-semibold">Secure & Trusted Platform</h3>
                    <p className="text-sm text-muted-foreground">
                      Your transactions and data are protected by
                      industry-leading security measures.
                    </p>
                  </div>
                </div>
                <button className="border border-primary text-primary py-2 px-4 rounded-lg">
                  Learn More
                </button>
              </div> */}
              {/* Code for retialers  */}
              <div
                id="retailers"
                className="bg-background min-h-screen p-6 md:p-12"
              >
                <div className="max-w-6xl mx-auto">
                  <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">
                      Join Kavastra as a Retailer
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8">
                      Access a wide range of quality products directly from
                      wholesalers and grow your retail business.
                    </p>
                    {/* <button className="bg-primary text-white py-2 px-4 rounded-lg mr-4">
                      Join as a Retailer
                    </button> */}
                    <button className="border border-primary text-primary py-2 px-4 rounded-lg mr-28">
                      Explore Wholesaler Network
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
                      <div className="text-primary mb-3 text-4xl">🔗</div>
                      <h3 className="text-lg font-semibold mb-2">
                        Direct Access to Wholesalers
                      </h3>
                      <p>
                        Connects with verified wholesalers, ensuring you get the
                        best products at competitive prices.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
                      <div className="text-primary mb-3 text-4xl">📦</div>
                      <h3 className="text-lg font-semibold mb-2">
                        Wide Range of Products
                      </h3>
                      <p>
                        Browse and purchase from a vast catalog of products
                        across various categories to meet your customers' needs.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
                      <div className="text-primary mb-3 text-4xl">💳</div>
                      <h3 className="text-lg font-semibold mb-2">
                        Flexible Payment Options
                      </h3>
                      <p>
                        Enjoy multiple payment methods, making your purchasing
                        process convenient and secure.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
                      <div className="text-primary mb-3 text-4xl">🚚</div>
                      <h3 className="text-lg font-semibold mb-2">
                        Reliable Delivery
                      </h3>
                      <p>
                        Get your orders delivered on time with our trusted
                        logistics partners, ensuring you never run out of stock.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
                      <div className="text-primary mb-3 text-4xl">🛡️</div>
                      <h3 className="text-lg font-semibold mb-2">
                        Secure Transactions
                      </h3>
                      <p>
                        Shop with confidence knowing that your transactions are
                        protected by industry-leading security measures.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
                      <div className="text-primary mb-3 text-4xl">📊</div>
                      <h3 className="text-lg font-semibold mb-2">
                        Insights & Analytics
                      </h3>
                      <p>
                        Access detailed insights on your purchases and track
                        your spending to make better business decisions.
                      </p>
                    </div>
                  </div>

                  {/* <div className="mt-12 text-center">
                    <h2 className="text-2xl font-semibold mb-4">
                      Ready to enhance your retail business?
                    </h2>
                    <button className="bg-primary text-white py-2 px-4 rounded-lg">
                      Start Exploring Products
                    </button>
                  </div> */}

                  {/* <div className="mt-12 bg-muted p-6 rounded-lg flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="text-primary text-4xl mr-4">🔒</div>
                      <div>
                        <h3 className="font-semibold">
                          Secure & Trusted Platform
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Your transactions and data are protected by
                          industry-leading security measures.
                        </p>
                      </div>
                    </div>
                    <button className="border border-primary text-primary py-2 px-4 rounded-lg">
                      Learn More
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white mt-32 px-4 py-12">
            <div className="grid sm:grid-cols-2 items-center gap-16 my-6 mx-auto max-w-5xl">
              <div>
                <h1 className="md:text-4xl text-3xl font-extrabold">
                  Let's Talk
                </h1>
                <p className="mt-6">
                  Have a big idea or a brand you'd love to develop? Need help
                  bringing your vision to life? We’d love to hear from you!
                  Whether you're a retailer looking to grow your business, a
                  wholesaler seeking new opportunities, or anyone with a project
                  in the textile industry, we’re here to assist.
                </p>
                <div className="mt-12">
                  <h2 className="text-xl font-semibold">Email</h2>
                  <ul className="mt-4">
                    <li className="flex items-center">
                      <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20px"
                          height="20px"
                          fill="#007bff"
                          viewBox="0 0 479.058 479.058"
                        >
                          <path
                            d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                            data-original="#000000"
                          />
                        </svg>
                      </div>
                      <a
                        href="javascript:void(0)"
                        className="text-[#007bff] ml-3"
                      >
                        <small className="block">Mail</small>
                        <strong>neelrajsg@gmail.com</strong>
                        <small className="block">Mobile</small>
                        <strong>+91 9731849325</strong>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-12">
                  <h2 className="text-xl font-semibold">Socials</h2>
                  <ul className="flex mt-4 space-x-4">
                    <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                      <a href="javascript:void(0)">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20px"
                          height="20px"
                          fill="#007bff"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M6.812 13.937H9.33v9.312c0 .414.335.75.75.75l4.007.001a.75.75 0 0 0 .75-.75v-9.312h2.387a.75.75 0 0 0 .744-.657l.498-4a.75.75 0 0 0-.744-.843h-2.885c.113-2.471-.435-3.202 1.172-3.202 1.088-.13 2.804.421 2.804-.75V.909a.75.75 0 0 0-.648-.743A26.926 26.926 0 0 0 15.071 0c-7.01 0-5.567 7.772-5.74 8.437H6.812a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75zm.75-3.999h2.518a.75.75 0 0 0 .75-.75V6.037c0-2.883 1.545-4.536 4.24-4.536.878 0 1.686.043 2.242.087v2.149c-.402.205-3.976-.884-3.976 2.697v2.755c0 .414.336.75.75.75h2.786l-.312 2.5h-2.474a.75.75 0 0 0-.75.75V22.5h-2.505v-9.312a.75.75 0 0 0-.75-.75H7.562z"
                            data-original="#000000"
                          />
                        </svg>
                      </a>
                    </li>
                    <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                      <a href="https://www.linkedin.com/company/kavastra/">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20px"
                          height="20px"
                          fill="#007bff"
                          viewBox="0 0 511 512"
                        >
                          <path
                            d="M111.898 160.664H15.5c-8.285 0-15 6.719-15 15V497c0 8.285 6.715 15 15 15h96.398c8.286 0 15-6.715 15-15V175.664c0-8.281-6.714-15-15-15zM96.898 482H30.5V190.664h66.398zM63.703 0C28.852 0 .5 28.352.5 63.195c0 34.852 28.352 63.2 63.203 63.2 34.848 0 63.195-28.352 63.195-63.2C126.898 28.352 98.551 0 63.703 0zm0 96.395c-18.308 0-33.203-14.891-33.203-33.2C30.5 44.891 45.395 30 63.703 30c18.305 0 33.195 14.89 33.195 33.195 0 18.309-14.89 33.2-33.195 33.2zm289.207 62.148c-22.8 0-45.273 5.496-65.398 15.777-.684-7.652-7.11-13.656-14.942-13.656h-96.406c-8.281 0-15 6.719-15 15V497c0 8.285 6.719 15 15 15h96.406c8.285 0 15-6.715 15-15V320.266c0-22.735 18.5-41.23 41.235-41.23 22.734 0 41.226 18.495 41.226 41.23V497c0 8.285 6.719 15 15 15h96.403c8.285 0 15-6.715 15-15V302.066c0-79.14-64.383-143.523-143.524-143.523zM466.434 482h-66.399V320.266c0-39.278-31.953-71.23-71.226-71.23-39.282 0-71.239 31.952-71.239 71.23V482h-66.402V190.664h66.402v11.082c0 5.77 3.309 11.027 8.512 13.524a15.01 15.01 0 0 0 15.875-1.82c20.313-16.294 44.852-24.907 70.953-24.907 62.598 0 113.524 50.926 113.524 113.523zm0 0"
                            data-original="#000000"
                          />
                        </svg>
                      </a>
                    </li>
                    <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                      <a href="https://www.instagram.com/kavastra_official/">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20px"
                          height="20px"
                          fill="#007bff"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 9.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm0-1.8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm5.85-.225a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM12 4.8c-2.227 0-2.59.006-3.626.052-.706.034-1.18.128-1.618.299a2.59 2.59 0 0 0-.972.633 2.601 2.601 0 0 0-.634.972c-.17.44-.265.913-.298 1.618C4.805 9.367 4.8 9.714 4.8 12c0 2.227.006 2.59.052 3.626.034.705.128 1.18.298 1.617.153.392.333.674.632.972.303.303.585.484.972.633.445.172.918.267 1.62.3.993.047 1.34.052 3.626.052 2.227 0 2.59-.006 3.626-.052.704-.034 1.178-.128 1.617-.298.39-.152.674-.333.972-.632.304-.303.485-.585.634-.972.171-.444.266-.918.299-1.62.047-.993.052-1.34.052-3.626 0-2.227-.006-2.59-.052-3.626-.034-.704-.128-1.18-.299-1.618a2.619 2.619 0 0 0-.633-.972 2.595 2.595 0 0 0-.972-.634c-.44-.17-.914-.265-1.618-.298-.993-.047-1.34-.052-3.626-.052ZM12 3c2.445 0 2.75.009 3.71.054.958.045 1.61.195 2.185.419A4.388 4.388 0 0 1 19.49 4.51c.457.45.812.994 1.038 1.595.222.573.373 1.227.418 2.185.042.96.054 1.265.054 3.71 0 2.445-.009 2.75-.054 3.71-.045.958-.196 1.61-.419 2.185a4.395 4.395 0 0 1-1.037 1.595 4.44 4.44 0 0 1-1.595 1.038c-.573.222-1.227.373-2.185.418-.96.042-1.265.054-3.71.054-2.445 0-2.75-.009-3.71-.054-.958-.045-1.61-.196-2.185-.419A4.402 4.402 0 0 1 4.51 19.49a4.414 4.414 0 0 1-1.037-1.595c-.224-.573-.374-1.227-.419-2.185C3.012 14.75 3 14.445 3 12c0-2.445.009-2.75.054-3.71s.195-1.61.419-2.185A4.392 4.392 0 0 1 4.51 4.51c.45-.458.994-.812 1.595-1.037.574-.224 1.226-.374 2.185-.419C9.25 3.012 9.555 3 12 3Z"></path>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <img src="https://png.pngtree.com/png-vector/20231015/ourmid/pngtree-connect-with-us-for-financial-assistance-torn-png-image_10215859.png" />
              </div>
              {/* <BasicForm /> */}
            </div>
          </div>

          {/* <div className="bg-blue-100 py-20 sm:px-6 px-4 rounded-md mt-32">
            <div className="max-w-4xl w-full mx-auto text-center">
              <h2 className="md:text-4xl text-3xl font-extrabold">
                Subscribe Our Newsletter
              </h2>
              <p className="mt-6">
                Stay updated with our latest news and exclusive offers. Join our
                community today!
              </p>
              <div className="mt-10 bg-white flex items-center p-2 max-w-xl mx-auto rounded-2xl border border-gray-300">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent py-4 px-2 border-none outline-none"
                />
                <button className="px-6 py-3 rounded-xl text-white bg-cyan-900 transition-all hover:bg-cyan-800">
                  Subscribe
                </button>
              </div>
            </div>
          </div> */}
        </div>
        {/* <footer className="bg-white px-4 sm:px-10 py-12 mt-32">
          <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-5 lg:gap-14 max-lg:gap-8">
            <div className="lg:col-span-2">
              <h4 className="text-xl font-semibold mb-6">About Us</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                gravida, mi eu pulvinar cursus, sem elit interdum mauris.
              </p>
              <div className="bg-[#f8f9ff] flex px-4 py-3 rounded-md text-left mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 192.904 192.904"
                  width="16px"
                  className="fill-gray-500 mr-3 rotate-90"
                >
                  <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
                </svg>
                <input
                  type="email"
                  placeholder="Search..."
                  className="w-full outline-none bg-transparent text-gray-600 text-[15px]"
                />
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-6">Services</h4>
              <ul className="space-y-5">
                <li>
                  <a href="javascript:void(0)" className="hover:text-blue-600">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="hover:text-blue-600">
                    Mobile App Development
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="hover:text-blue-600">
                    UI/UX Design
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="hover:text-blue-600">
                    Digital Marketing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-6">Resources</h4>
              <ul className="space-y-5">
                <li>
                  <a href="javascript:void(0)" className="hover:text-blue-600">
                    Webinars
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="hover:text-blue-600">
                    Ebooks
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="hover:text-blue-600">
                    Templates
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="hover:text-blue-600">
                    Tutorials
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-6">About Us</h4>
              <ul className="space-y-5">
                <li>
                  <a href="javascript:void(0)" className="hover:text-blue-600">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="hover:text-blue-600">
                    Mission and Values
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="hover:text-blue-600">
                    Team
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="hover:text-blue-600">
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="my-8" />
          <p className="text-center">
            Copyright © 2023
            <a
              href="https://readymadeui.com/"
              target="_blank"
              className="hover:underline mx-1"
            >
              ReadymadeUI
            </a>
            All Rights Reserved.
          </p>
        </footer> */}
        <div id="about-section" className="bg-white py-16 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">About Kavastra</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Connecting wholesalers and retailers in the textile industry to
                create a seamless, transparent, and efficient marketplace.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  At Kavastra, our mission is to empower both wholesalers and
                  retailers by removing intermediaries, ensuring the best
                  quality products, and providing secure transactions and
                  efficient logistics.
                </p>
              </div>
              <div>
                <img
                  src="../k.png" // Replace with an actual image URL
                  alt="Kavastra mission"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div>
                <img
                  src="../flogo.png" // Replace with an actual image URL
                  alt="Kavastra vision"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  We envision a world where every retailer can access the best
                  products directly from the source, and every wholesaler can
                  reach a vast network of retailers, ensuring growth and success
                  for all.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">
          &copy; 2024 Kavastra. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default MyComponent;
