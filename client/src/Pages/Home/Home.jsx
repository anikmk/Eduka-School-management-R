import HomeSlider from "./Hero/HomeSlider";
import AboutUs from "./HomeSections/AboutUs/AboutUs";
import Counter from "./HomeSections/Counter/Counter";
import Facilities from "./HomeSections/FacilitiesSection/Facilities";
import OurCourse from "./HomeSections/OurCourse/OurCourse";

const Home = () => {

    return (

        <div className="">
            <HomeSlider />
            <Facilities />
            <AboutUs />
            <Counter />
            <OurCourse />
         </div>
    );
};

export default Home;