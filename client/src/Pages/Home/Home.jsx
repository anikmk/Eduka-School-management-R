import HomeSlider from "./Hero/HomeSlider";
import AboutUs from "./HomeSections/AboutUs/AboutUs";
import Counter from "./HomeSections/Counter/Counter";
import Facilities from "./HomeSections/FacilitiesSection/Facilities";
import LatestNews from "./HomeSections/LatestNews/LatestNews";
import OurCourse from "./HomeSections/OurCourse/OurCourse";
import OurTeam from "./HomeSections/OurTeam/OurTeam";

const Home = () => {

    return (

        <div className="">
            <HomeSlider />
            <Facilities />
            <AboutUs />
            <Counter />
            <OurCourse />
            <LatestNews />
            <OurTeam />
         </div>
    );
};

export default Home;