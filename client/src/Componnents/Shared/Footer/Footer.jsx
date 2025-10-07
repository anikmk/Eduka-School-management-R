import shape_3 from "../../../assets/img/shape/03.png";
import logo_light from "../../../assets/img/logo/logo-light.png";
import { LuPhoneCall } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { FaCaretRight } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

export default function Footer() {
  const footer_contact_data = [
    {
      id: 1,
      text: "+2 123 654 7898",
      icon: <LuPhoneCall />
    },
    {
      id: 2,
      text: "25/B Milford Road, New York",
      icon: <IoLocationOutline />
    },
    {
      id: 3,
      text: "[email protected]",
      icon: <HiOutlineMail />
    }
  ];


  const quick_links = [
                {
                  id:1,
                  text:"About Us",
                  icon: <FaCaretRight />,
                },
                  
                {
                  id:2,
                  text:"FAQ's",
                   icon: <FaCaretRight />,
                },
                  
                {
                  id:3,
                  text:"Testimonials",
                  icon: <FaCaretRight />,
                },
                  
                {
                  id:4,
                  text:"Terms Of Service",
                  icon: <FaCaretRight />,
                },
                  
                {
                  id:5,
                  text:"Privacy Policy",
                  icon: <FaCaretRight />,
                },
                  
                {
                  id:6,
                  text:"Update News",
                  icon: <FaCaretRight />,
                },
                  
              ]

  
const campus_links = [
  {
    id: 1,
    text: "Campus Safety",
    icon: <FaCaretRight />,
  },
  {
    id: 2,
    text: "Student Activities",
    icon: <FaCaretRight />,
  },
  {
    id: 3,
    text: "Academic Department",
    icon: <FaCaretRight />,
  },
  {
    id: 4,
    text: "Planning & Administration",
    icon: <FaCaretRight />,
  },
  {
    id: 5,
    text: "Office Of The Chancellor",
    icon: <FaCaretRight />,
  },
  {
    id: 6,
    text: "Facility Services",
    icon: <FaCaretRight />,
  },
]

const social_media_icon = [
  {id: 1,
    icon: <FaSquareFacebook />
  },
  {id: 2,
    icon: <FaLinkedin />
  },
  {id: 3,
    icon: <FaWhatsappSquare />
  },
  {id: 4,
    icon: <FaYoutube />
  },

]

  return (
    <footer className="relative bg-primary text-accent overflow-hidden mt-56">
     {/* Footer Shape */}
      <div className="absolute opacity-5 w-full mx-auto">
        <img src={shape_3} alt="shape" className="w-[30%] mx-auto" />
      </div>

      {/* Footer Widgets */}
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 pt-20 pb-14">
          {/* About Us */}
          <div className="transition-transform duration-500 hover:-translate-y-2">
            <a href="#" className="inline-block mb-4">
              <img
                src={logo_light}
                alt="logo"
                className="w-40 hover:scale-105 transition-transform duration-500"
              />
            </a>
            <p className="mb-4 text-sm leading-relaxed">
              We are many variations of passages available but the majority have
              suffered alteration in some form by injected humour words
              believable.
            </p>
            <ul className="space-y-2 text-sm">
              {footer_contact_data?.map(item => (
                <li key={item?.id}>
                  <a
                    href="#"
                    className="flex items-center gap-2 hover:text-white transition-colors duration-300"
                  >
                    <span className="text-accent bg-secondary p-2 rounded-r-full rounded-tl-full group-hover:text-white transition-colors duration-300">
                      {item?.icon}
                    </span>
                    {item?.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="transition-transform duration-500 hover:-translate-y-2">
            <div>
             <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
             <div className="border-b-[3px] border-gray-600 w-20 mb-5 relative">
              <div className="border-b-[3px] border-red-500 top-0 left-4 w-8 mb-5 absolute"></div>
             </div>
           </div>
            <ul className="space-y-2">
              {quick_links?.map((item) => (
                <li key={item?.id}>
                  <div
                    className="flex items-center gap-2 hover:text-blue-400 transition-all duration-300 cursor-pointer"
                  >
                    <div className="text-secondary">{item?.icon} </div>{item?.text}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Campus */}
          <div className="transition-transform duration-500 hover:-translate-y-2">
           <div>
             <h4 className="text-lg font-semibold mb-4">Our Campus</h4>
             <div className="border-b-[3px] border-gray-600 w-20 mb-5 relative">
              <div className="border-b-[3px] border-red-500 top-0 left-4 w-8 mb-5 absolute"></div>
             </div>
           </div>
            <ul className="space-y-2">
              {
              campus_links?.map((campusItem) => (
                <li key={campusItem?.id}>
                  <div
                    className="flex items-center gap-2 hover:text-blue-400 transition-all duration-300 cursor-pointer"
                  >
                    <div className="text-secondary">{campusItem?.icon}</div>{campusItem?.text}
                  </div>
                </li>
              ))
              }
            </ul>
          </div>

          {/* Newsletter */}
          <div className="">
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-sm mb-4">
              Subscribe Our Newsletter To Get Latest Update And News
            </p>
            <form className=" space-y-5">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-md text-gray-900"
              />
              <button
                type="submit"
                className="bg-secondary text-white px-5 py-4  rounded-r-full rounded-tl-full hover:bg-accent hover:text-secondary transition-colors duration-300 w-full text-center"
              >
                Subscribe Now <i className="far fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p className="hover:text-blue-400 transition-colors duration-300">
            &copy; <span>{new Date().getFullYear()}</span>{" "}
            <a href="#" className="text-blue-400 hover:underline">
              Eduka
            </a>{" "}
            All Rights Reserved.
          </p>
         <div className="flex item-center gap-4">
          {social_media_icon?.map(icon => <i className="text-3xl cursor-pointer" key={icon?.id}>{icon?.icon}</i>)}
         </div>
        </div>
      </div>
    </footer>
  );
}
