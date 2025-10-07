import sliderImage_1 from '../../../assets/img/slider/slider-1.jpg'
import sliderImage_2 from '../../../assets/img/slider/slider-2.jpg'
import sliderImage_3 from '../../../assets/img/slider/slider-3.jpg'
import { FaArrowRightLong } from "react-icons/fa6";
const slider_data = [
  {
    id: 1,
    slider_img: sliderImage_1,
    heading:"start your beautitul and bright future",
    sub_heading:"welcome to eduka",
    slider_desc: "Explore our exclusive jewelry collections crafted with precision and elegance.",
    btn_text1: "About More",
    btn_text2: "Learn More",
  },
  {
    id: 2,
    slider_img: sliderImage_2,
    heading:"heading",
    sub_heading:"sub heading",
    slider_desc: "Experience the beauty of timeless craftsmanship and modern design.",
    btn_text1: "Explore Now",
    btn_text2: "Contact Us",
  },
  {
    id: 3,
    slider_img: sliderImage_3,
    heading:"heading",
    sub_heading:"sub heading",
    slider_desc: "Your dream jewelry awaits — unique designs for every special moment.",
    btn_text1: "Shop Now",
    btn_text2: "See Details",
  },
];

export default function HomeSlider() {
  return (
    <div className="carousel w-full h-screen">
      {slider_data.map((item, index) => (
        <div
          key={item.id}
          id={`slide${index + 1}`}
          className="carousel-item relative w-full h-screen"
        >
          {/* Image */}
          <img
            src={item.slider_img}
            className="w-full h-full object-cover"
            alt={`Slider ${index + 1}`}
          />

          {/* Dark Overlay + Text */}
          <div className="absolute inset-0 bg-primary/30 flex flex-col justify-center px-10 md:px-24 text-white">
            <div className="max-w-xl space-y-5">
              <h2 className="text-lg md:text-xl font-bold leading-tight text-secondary underline upercase">
                {item?.sub_heading}
              </h2>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                {item?.heading}
              </h2>
              <p className="text-lg md:text-xl opacity-90">
                {item.slider_desc}
              </p>
              <div className="flex gap-4 mt-4">
                <button className="bg-secondary text-white px-5 py-4  rounded-r-full rounded-tl-full hover:bg-accent hover:text-secondary transition-colors duration-300 text-center">
                  {item.btn_text1} <FaArrowRightLong />
                </button>
                <button className="bg-secondary text-white px-5 py-4  rounded-r-full rounded-tl-full hover:bg-accent hover:text-secondary transition-colors duration-300 text-center">
                  {item.btn_text2} <FaArrowRightLong />
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href={`#slide${index === 0 ? slider_data.length : index}`}
              className="btn btn-circle bg-secondary text-white border-none hover:bg-white hover:text-[#012758]"
            >
              ❮
            </a>
            <a
              href={`#slide${index + 2 > slider_data.length ? 1 : index + 2}`}
              className="btn btn-circle bg-secondary text-white border-none hover:bg-white hover:text-[#012758]"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
