import { Link, useLocation } from "react-router-dom";

export default function DetailsBanner({ title, image }) {
  const location = useLocation();
  const pathName = location.pathname.split("/")[1]; // dynamic route name
    console.log(pathName)
  return (
    <section
      className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="absolute w-full h-full object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Text Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-2">{title}</h1>
        <p className="text-sm md:text-lg">
          <Link to="/"><span className="cursor-pointer">Home</span></Link> <span className="mx-2">&gt;&gt;</span>
          <span className="text-secondary font-semibold capitalize">
            {pathName || title}
          </span>
        </p>
      </div>
    </section>
  );
}
