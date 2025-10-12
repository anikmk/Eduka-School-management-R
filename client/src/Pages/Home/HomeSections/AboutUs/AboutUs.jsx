import { FaBookOpenReader, FaQuoteRight, FaArrowRightLong, FaHeadset } from "react-icons/fa6";
import aboutImg1 from '../../../../assets/img/about/01.jpg'
import aboutImg2 from '../../../../assets/img/about/02.jpg'
import aboutImg3 from '../../../../assets/img/about/03.jpg'
import exchance_idea from '../../../../assets/img/icon/exchange-idea.svg'
import open_book from '../../../../assets/img/icon/open-book.svg'
import global_education from '../../../../assets/img/icon/global-education.svg'
export default function AboutUs() {
  return (
    <section className="about-area pt-64 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Images */}
          <div className="about-left">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <img
                  src={aboutImg1}
                  alt="About"
                  className="rounded-t-[80px] rounded-bl-[80px] w-full h-auto object-cover"
                />
                <div className="mt-6 flex items-center gap-3 bg-secondary p-5 rounded-t-[60px] rounded-br-[50px] shadow-sm">
                  <div className="bg-white p-3 rounded-full shadow-md">
                    <img
                      src={exchance_idea}
                      alt="Experience"
                      className="w-16 h-16"
                    />
                  </div>
                  <b className="text-accent text-lg leading-tight">
                    30 Years Of <br /> Quality Service
                  </b>
                </div>
              </div>
              <div>
             <img
                src={aboutImg2}
                alt="About"
                className="w-72 h-72 rounded-full object-cover border-[3px] border-dashed border-secondary p-2"
                />
                <img
                  src={aboutImg3}
                  alt="About"
                  className="rounded-b-[80px] rounded-tr-[80px] w-full h-auto object-cover mt-4"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="about-right">
            {/* Section Heading */}
            <div className="">
              <div className="flex items-center gap-2 text-secondary font-semibold uppercase underline text-xl">
                <div><FaBookOpenReader /></div>
                <span>About Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 my-6">
                Our <span className="text-secondary">Education System</span> Inspires You More.
              </h2>
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-8">
              There are many variations of passages available, but the majority have suffered alteration in some form by injected humour or randomised words which do not look even slightly believable. If you are going to use a passage, make sure it looks natural.
            </p>

            {/* Features + Quote */}
            <div className="grid md:grid-cols-2 gap-7 mb-16">
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <img
                    src={open_book}
                    alt="Service"
                    className="w-16 h-16 bg-secondary p-2 rounded-full"
                  />
                  <div>
                    <h5 className="font-semibold text-gray-800 text-lg">
                      Education Services
                    </h5>
                    <p className="text-gray-600 text-sm">
                      It is a long established fact that a reader will be distracted by readable content.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <img
                    src={global_education}
                    alt="Global"
                    className="w-16 h-16 bg-secondary p-2 rounded-full"
                  />
                  <div>
                    <h5 className="font-semibold text-gray-800 text-lg">
                      International Hubs
                    </h5>
                    <p className="text-gray-600 text-sm">
                      It is a long established fact that a reader will be distracted by readable content.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border-l-4 border-yellow-400 p-4 rounded-lg relative">
                <p className="text-gray-700 text-sm leading-relaxed">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
                <FaQuoteRight className="absolute bottom-3 right-3 text-yellow-500 text-2xl opacity-60" />
              </div>
            </div>

            {/* Bottom Buttons */}
            <div className="">
                <div className="flex flex-wrap items-center gap-6">
              <a
                href="/about"
                className="inline-flex items-center gap-2 bg-secondary hover:bg-yellow-600 text-white px-6 py-3 rounded-full transition-all duration-300"
              >
                Discover More <FaArrowRightLong />
              </a>

              <div className="flex items-center gap-3">
                <div className="bg-neutral p-3 rounded-full">
                  <FaHeadset className="text-accent text-2xl" />
                </div>
                <div>
                  <span className=" text-secondary">Call Now</span>
                  <h6 className="text-lg font-semibold text-gray-800">
                    <a href="tel:+21236547898" className="text-neutral">
                      +2 123 654 7898
                    </a>
                  </h6>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
