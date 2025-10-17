import { FaBookQuran } from "react-icons/fa6";
import Container from "../../../../Componnents/Shared/Container/Container";
import latest_vedio_img from "../../../../assets/img/video/01.jpg";
import { FaPlayCircle } from "react-icons/fa";
export default function LatestNews() {
  return (
    <div className="py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Text Content */}
          <div className="lg:col-span-4">
            <div className="mb-3">
              <span className="text-xl font-semibold flex items-center gap-2 text-secondary underline">
                <FaBookQuran /> Latest Video
              </span>
              <h2 className="text-5xl font-bold mt-2">
                Lets Check Our <span className="text-secondary">Latest</span> Video
              </h2>
            </div>
            <p className="text-gray-600 mt-4">
              There are many variations of passages available but the majority have suffered
              alteration in some form by injected humour look even slightly believable.
            </p>
            <button
              className="inline-flex items-center gap-2 mt-6 px-5 py-3 bg-secondary text-accent rounded-t-3xl rounded-br-3xl transition">
              Learn More <i className="fas fa-arrow-right-long"></i>
            </button>
          </div>

          {/* Video Content */}
          <div className="lg:col-span-8 relative">
            <div className="rounded-t-[20%] rounded-br-[20%] overflow-hidden relative">
              <img
                src={latest_vedio_img}
                alt="Latest Video"
                className=" object-center"
              />
              <a
                href="https://www.youtube.com/watch?v=ckHzmP1evNU"
                className="absolute inset-0 flex justify-center items-center bg-black/30 hover:bg-black/50 transition"
              >
               <div className="text-7xl text-secondary animate-pulse"> <FaPlayCircle /></div>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
