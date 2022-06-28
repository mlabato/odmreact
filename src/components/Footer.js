import { FaInstagram } from 'react-icons/fa';
function Footer(){
    return(
        <section className=" relative bg-gradient-to-r from-red-900 to-red-700 flex flex-col p-2 w-full  ">

            <a href="https://www.instagram.com/outletde_mates/" className="mx-auto" > <FaInstagram className =" text-2xl sm:4xl  text-white mr-4 hover:text-gray-500 "/></a>

            <article className= "text-white  flex flex-row mx-auto mb-2">
                <div className="p-2 "> <a href="/mates" className= " sm:2xl md:text-xl hover:text-gray-500 text-sm">Mates</a></div>
                <div className="p-2"><a href="/materas" className= "sm:2xl md:text-xl hover:text-gray-500 text-sm">Materas</a></div>
                <div className="p-2 "><a href="/bombillas" className= "sm:2xl md:text-xl hover:text-gray-500 text-sm">Bombillas</a></div>
                <div className="p-2 "><a href="/contacto" className= "sm:2xl md:text-xl hover:text-gray-500 text-sm">Contactanos</a></div>
            </article>

            <article className= "text-white  flex flex-col mx-auto mb-2 ">
                <div className="text-xs text-center">© Copyright Outlet de Mates - 2022</div>
                <div className="text-xs text-center">Todos los derechos reservados</div>
            </article>


        </section>
        )
};

export default Footer; 