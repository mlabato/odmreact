import React, {useState, useEffect, useRef} from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"

const sliderImages = [
    "/images/mate-slider.jpg",
    "/images/bombilla-slider.jpg",
    "/images/variedad.jpg",
];

/*
const sliderBigTexts = [
    "Mates artesanales",
    "Variedad de modelos",
    "Accesorios de calidad"
];
*/

let count = 0;

function Slider(){
//ARMADO DE HOOK
const [currentIndex, setCurrentIndex]
= useState(0)

const slideRef = useRef();

//FADE ANIMATION
const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
};

useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation)
    //startSlider()
}, []);

//FUNCIONAMIENTO SLIDE AUTOMATICO
/*
const startSlider = () => {
    setInterval(() => {
        handleOnNextClick()
    }, 3000);
}
*/

//FUNCIONAMIENTO BOTONES
const handleOnNextClick = () => {
    count = (count + 1) % sliderImages.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
}
const handleOnPrevClick = () => {
    const imagesLength = sliderImages.length;
    count = (currentIndex + imagesLength - 1) % imagesLength;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
}

return(
 <div ref = {slideRef} className="w-full group  select-none relative overflow-hidden ">
    <div className="aspect-w-16 aspect-h-9">
        <img src={sliderImages[currentIndex]} className= " mx-auto w-full group-hover:scale-125 opacity-80 duration-[4000ms]" alt=""></img> 
        {/*
        <div className="absolute inset-0 grid p-4  place-items-center content-center">
            <div 
            className=" text-4xl md:text-6xl lg:text-6xl font-extralight text-white mx-auto text-center group-hover:translate-y-10 opacity-0 group-hover:opacity-100 duration-[2000ms]">
                {sliderBigTexts[currentIndex]} 
            </div>
        </div>
        */}
    </div>
             
    <div className="absolute -inset-3 flex p-4 justify-between items-center">
        <button onClick={handleOnPrevClick} className= "text-gray-300 backdrop-opacity-15 text-lg right-10 " >< AiOutlineLeft size={40} className="opacity-30" /></button>
        <button onClick={handleOnNextClick} className= "text-gray-300 backdrop-opacity-15 text-lg">< AiOutlineRight size={40} className="opacity-30" /></button>
    </div>
    
 </div>
)          
}

export default Slider;