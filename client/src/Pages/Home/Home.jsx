import HomeSlider from "./Hero/HomeSlider";
import AboutUs from "./HomeSections/AboutUs/AboutUs";
import ChoiceUs from "./HomeSections/ChoiceUs/ChoiceUs";
import Counter from "./HomeSections/Counter/Counter";
import Facilities from "./HomeSections/FacilitiesSection/Facilities";
import LatestNews from "./HomeSections/LatestNews/LatestNews";
import OurBlogs from "./HomeSections/OurBlogs/OurBlogs";
import OurCourse from "./HomeSections/OurCourse/OurCourse";
import OurSkill from "./HomeSections/OurSkill/OurSkill";
import OurTeam from "./HomeSections/OurTeam/OurTeam";
import UpComingEvents from "./HomeSections/UpComingEvents/UpComingEvents";
import Department from "./HomeSections/Department/Department"
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
            <ChoiceUs />
            <UpComingEvents />
            <OurSkill />
            <Department />
            <OurBlogs />
         </div>
    );
};

export default Home;