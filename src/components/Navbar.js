import {useState} from "react"
import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { BiMenu } from "react-icons/bi";



function Navbar(){

const [showNav, setShowNav] = useState(false);


    return(

        <section className = "fixed z-50 w-full bg-red-700 opacity-80" > 
            <article className = " flex flex-row justify-between w-full mx-auto   bg-white items-center">
                
                <div className = "flex flex-row p-4" >
                    <a href="https://www.instagram.com/outletde_mates/" > <FaInstagram className =" text-2xl sm:4xl mx-auto text-red-800 mr-4 hover:text-gray-500"/></a>
                    <a href="https://api.whatsapp.com/send/?phone=5492323517210&text&app_absent=0" > <FaWhatsapp className ="text-2xl sm:4xl mx-auto text-red-800  hover:text-gray-500"/></a>
                </div>
                
                <div className=" md:h-[120px] md:w-[120px] h-[50px] w-[50px] ">
                    <img src="/images/logo.png" alt="" className= "  "/>
                </div>


                <BiMenu onClick={() => setShowNav(!showNav)} className ="text-4xl mr-10 text-red-800 hover:text-gray-500"/>
                
            </article>

            
                <article className= { (showNav ? "right-0 " : "-right-full" ) + " fixed top-15   bg-red-900  w-100 text-white space-y-5 z-20 p-2 transition-right"} >
                        <div className="p-2 font-bold"> <a href="/" className= "md:text-2xl text-base hover:text-gray-500">Home</a></div>
                        <div className="p-2 font-bold"> <a href="/productos" className= "md:text-2xl text-base hover:text-gray-500">Productos</a></div>
                        <div className="p-2 "> <a href="/mates" className= "md:text-2xl text-base ml-2 hover:text-gray-500">Mates</a></div>
                        <div className="p-2"><a href="/materas" className= "md:text-2xl text-base ml-2 hover:text-gray-500">Materas</a></div>
                        <div className="p-2 "><a href="/bombillas" className= "md:text-2xl text-base ml-2 hover:text-gray-500">Bombillas</a></div>
                        <div className="p-2 "><a href="/termos" className= "md:text-2xl text-base ml-2 hover:text-gray-500">Termos</a></div>
                        <div className="p-2 font-bold"> <a href="/ofertas" className= "md:text-2xl text-base hover:text-gray-500">Ofertas</a></div>
                        <div className="p-2 font-bold"> <a href="/contacto" className= "md:text-2xl text-base hover:text-gray-500">Contactanos</a></div>
                        <div className="p-2 font-bold"> <a href="/nosotros" className= "md:text-2xl text-base hover:text-gray-500">Sobre nosotros</a></div>

                </article>
        

        </section>
     
    )
}

export default Navbar