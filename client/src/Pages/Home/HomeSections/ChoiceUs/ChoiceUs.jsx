import { FaBookOpen } from "react-icons/fa6";
import choiceUS_bg from "../../../../assets/img/choose/01.jpg";
import choice_bg_shape from "../../../../assets/img/shape/01.png";
import choice_icon1 from "../../../../assets/img/icon/acting.svg"
import choice_icon2 from "../../../../assets/img/icon/course-material.svg"
import choice_icon3 from "../../../../assets/img/icon/online-course.svg"
import choice_icon4 from "../../../../assets/img/icon/money.svg"
const chooseData = [
  {
    id: 1,
    icon: choice_icon1,
    title: "Expert Teachers",
    desc: "There are many variations of the suffered.",
  },
  {
    id: 2,
    icon: choice_icon2,
    title: "Courses Material",
    desc: "There are many variations of the suffered.",
  },
  {
    id: 3,
    icon: choice_icon3,
    title: "Online Courses",
    desc: "There are many variations of the suffered.",
  },
  {
    id: 4,
    icon: choice_icon4,
    title: "Affordable Price",
    desc: "There are many variations of the suffered.",
  },
];

export default function ChoiceUs() {
  return (
    <div className="relative bg-primary overflow-hidden py-20">
      {/* === Background Shape Layer === */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-100"
        style={{
          backgroundImage: `url(${choice_bg_shape})`,
        }}
      ></div>

      {/* === Overlay (light tint for contrast) === */}
      <div className="absolute inset-0 bg-primary/90"></div>

      {/* === Content Section === */}
      <div className="w-[75%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          {/* ===== Left Content ===== */}
          <div className="space-y-6">
            <div>
              <p
                className="text-secondary font-semibold flex items-center gap-2 uppercase tracking-wide underline"
              >
               <FaBookOpen /> Why Choose Us
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold text-white mb-3"
              >
                We Are Expert &{" "}
                <span className="text-secondary">Do Our Best</span> For Your Goal
              </h2>
              <p
                className="text-white/80 text-sm md:text-base"
              >
                It is a long established fact that a reader will be distracted
                by the readable content of a page when many desktop and web page
                editors looking at its layout.
              </p>
            </div>

            {/* Choose Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
              {chooseData.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center bg-accent rounded-t-full rounded-br-full"
                >
                  <div className="w-14 h-14 flex items-center justify-center bg-secondary text-accent rounded-t-full rounded-br-full shadow-md p-[6px]">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className=" invert brightness-0 sepia saturate-200 hue-rotate-[120deg] "
                    />
                  </div>
                  <div className="p-2">
                    <h4 className="text-lg font-semibold text-black mb-[5px]">
                      {item.title}
                    </h4>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>    
                </div>
              ))}
            </div>
          </div>

          {/* ===== Right Image ===== */}
          <div
            className="flex justify-center lg:justify-end relative"
          >
            <img
              src={choiceUS_bg}
              alt="Why Choose Us"
              className="rounded-b-[30%] rounded-tl-[30%] shadow-lg w-full max-w-md object-cover relative"
            />
            <div className="absolute border-4 border-secondary  rounded-b-[30%] rounded-tl-[30%] w-[102%] h-[102%] top-2 right-2 bottom-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
