import { FaAward, FaChalkboardTeacher, FaGlobe, FaHandHoldingUsd } from "react-icons/fa";

export default function Facilities() {
  const facilities_Data = [
    {
      id: 1,
      icon: <FaHandHoldingUsd className="text-3xl text-white" />,
      number: "01",
      title: "Scholarship Facility",
      description: "It is a long established fact that a reader will be distracted.",
    },
    {
      id: 2,
      icon: <FaAward className="text-3xl text-white" />,
      number: "02",
      title: "Certified Courses",
      description: "We provide globally recognized certifications for every course.",
    },
    {
      id: 3,
      icon: <FaChalkboardTeacher className="text-3xl text-white" />,
      number: "03",
      title: "Expert Instructors",
      description: "Learn from experienced teachers who guide you step by step.",
    },
    {
      id: 4,
      icon: <FaGlobe className="text-3xl text-white" />,
      number: "04",
      title: "Global Community",
      description: "Join thousands of learners and professionals from all over the world.",
    },
  ];

  return (
    <div className="relative">
      <div className="flex flex-wrap items-center justify-end absolute -bottom-32 right-0 gap-6 px-8 z-10">
        {facilities_Data.map((facility) => (
          <div
            key={facility.id}
            className="bg-white text-[#012758] p-6 rounded-3xl w-64 h-72 shadow-lg hover:-translate-y-2 duration-300 group"
          >
            {/* === Top Icon + Number === */}
            <div className="flex items-center justify-between mb-6">
              <div className="bg-[#012758] w-14 h-14 rounded-full flex items-center justify-center shadow-md group-hover:rotate-180">
                <div>{facility.icon}</div>
              </div>
              <div className="text-3xl font-bold border-2 border-[#012758] rounded-md px-3 py-1 leading-none">
                {facility.number}
              </div>
            </div>

            {/* === Title & Description === */}
            <h1 className="text-lg font-semibold mb-2">{facility.title}</h1>
            <p className="text-sm opacity-80 leading-relaxed">{facility.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
