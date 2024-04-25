// import { BreadcrumbDemo } from "@/components/BreadcrumbComponent";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import React from "react";

// const ContactUs = () => {
//   return (
//     <div className="w-screen flex flex-col justify-center items-center">
//       <div className="relative">
//         <div className="flex flex-col gap-y-8 h-10 absolute top-10 left-10">
//           <BreadcrumbDemo
//             items={[{ href: "/contact-us", name: "Contact us" }]}
//           />
//         </div>
//         <div className="min-h-screen w-screen grid xl:grid-cols-4 py-[100px] gap-24 md:px-[100px] px-8">
//           <div className="col-span-2 xl:flex  hidden justify-center items-center">
//             <img src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?t=st=1711879534~exp=1711883134~hmac=4f5a592cecad0699f197984b18aebe928fc04189c5aaa1341365fad9d5c292c0&w=740" />
//           </div>
//           <div className="col-span-2 flex flex-col justify-center items-center">
//             <h1
//               className="sm:text-7xl text-5xl font-normal text-center"
//               style={{ fontFamily: "serif" }}
//             >
//               Contact Us
//             </h1>
//             <div className="flex md:flex-row flex-col gap-24 sm:mt-[70px] mt-[30px] xl:w-full w-[70vw] justify-center items-center">
//               <div className="space-y-6 w-[100%]">
//                 <div className="space-y-4 ">
//                   <Label htmlFor="fn">Full Name</Label>
//                   <Input
//                     placeholder="Full Name"
//                     className="border border-black h-12"
//                     id="fn"
//                   />
//                 </div>
//                 <div className="space-y-4">
//                   <Label htmlFor="em">Email</Label>
//                   <Input
//                     placeholder="E-mail"
//                     className="border border-black h-12"
//                     id="em"
//                   />
//                 </div>
//                 <div className="space-y-4 pb-[30px]">
//                   <Label htmlFor="m">Message</Label>
//                   <Input
//                     placeholder="Message"
//                     className="border border-black h-12"
//                     id="m"
//                   />
//                 </div>
//                 <Button className="rounded-full py-7 px-20 text-xl">
//                   Contact Us
//                 </Button>
//               </div>
//               <div className="md:space-y-8 self-start grid gap-12">
//                 <div className="flex justify-center items-start flex-col">
//                   <h1 className="font-semibold text-xl">Contact</h1>
//                   <p className="text-lg font-normal">hi@gmail.com</p>
//                 </div>
//                 <div className="flex justify-center items-start flex-col ">
//                   <h1 className="font-semibold text-xl">Based in</h1>
//                   <p className="text-lg font-normal">New York</p>
//                   <p className="text-lg font-normal">California, Ohio</p>
//                 </div>

//                 <div className="flex lg:gap-x-16 gap-x-8">
//                   <i className="ri-facebook-circle-line lg:text-4xl text-2xl cursor-pointer"></i>
//                   <i className="ri-instagram-line lg:text-4xl text-2xl cursor-pointer"></i>
//                   <i className="ri-twitter-x-line lg:text-4xl text-2xl cursor-pointer"></i>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         ;
//       </div>
//     </div>
//   );
// };

// export default ContactUs;
import { AccordionDemo } from "@/components/AccordionDemon";
import NavbarSearch from "@/components/Navbar";
import { TextParallaxContentExample } from "@/components/TextParalex";
import React from "react";

const page = () => {
  return (
    <div>
      <NavbarSearch type="search" />
      <section className="text-gray-600 mt-10  body-font relative">
        <div className="container px-5 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              title="map"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
            />
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  Photo booth tattooed prism, portland taiyaki hoodie neutra
                  typewriter
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-red-500 leading-relaxed">
                  example@email.com
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">123-456-7890</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                defaultValue={""}
              />
            </div>
            <button className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
              Button
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </p>
          </div>
        </div>
      </section>
      <div className="px-10 py-16 flex justify-center items-center">
        <div className="w-full max-w-2xl">
          <div className="flex flex-col items-center mb-12">
            <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">
              FAQ
            </h2>
            <p className="mt-3 text-lg text-neutral-500 md:text-xl">
              Frequenty asked questions
            </p>
          </div>
          <AccordionDemo />
        </div>
      </div>
    </div>
  );
};

export default page;
