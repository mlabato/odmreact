import Navbar from "./Navbar"
import Slider from "./Slider"
import MainWrapper from "./MainWrapper";
import Maintext from "./Maintext";
import Bottomtext from "./Bottomtext";
import Footer from "./Footer";
import DiscountWrapper from "./DiscountWrapper";


function Home (){
    return(
    <div classname="font-serif">
        <Navbar />
        <Slider/>
        <Maintext />
        <MainWrapper />
        <Bottomtext />
        <DiscountWrapper />
        <Footer />
    </div>
    )
}

export default Home;