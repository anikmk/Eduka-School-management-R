import HomeSlider from "./Hero/HomeSlider";
import AboutUs from "./HomeSections/AboutUs/AboutUs";
import Facilities from "./HomeSections/FacilitiesSection/Facilities";

const Home = () => {

    return (

        <div className="">
            <HomeSlider />
            <Facilities />
            <AboutUs />
         </div>
    );
};

export default Home;