import { FaHome } from "react-icons/fa";
 
function DbNavbar(){
    return(
    <section className = " w-full flex flex-col justify-center" > 

                <article className="flex flex-col ">
                    <div className=" md:h-[120px] md:w-[120px] h-[50px] w-[50px] mx-auto ">
                        <img src="/images/logo.png" alt="" className= " "/>
                    </div>
                    <div className=" my-auto text-red-700 text-4xl text-center">
                        DASHBOARD
                    </div>
                </article>
                <article className="absolute text-red-700 text-4xl p-4 left-0 -top-100">
                    <a href="/dashboard"> <FaHome /> </a>
                    </article>

    </section>
    )
}

export default DbNavbar; 