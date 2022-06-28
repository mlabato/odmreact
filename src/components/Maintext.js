import { FaInstagram } from 'react-icons/fa';

function Maintext(){
    return(
        
            <section className= "bg-gradient-to-r from-red-900 to-red-700  w-full justify-center mx-auto   ">
                <div className=" flex flex-row p-4 md:p-8 lg:p-12 justify-center ">
                <FaInstagram className ="md:text-6xl text-4xl text-white w-1/10"/>
                    <a href="https://www.instagram.com/outletde_mates/" className= "text-white my-auto ml-4 md:text-4xl font-bold text-xl hover:text-gray-500 ">  @outletde_mates </a>
                </div>
            </section>

        
    )
};

export default Maintext;