import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import NavbarSections from "./NavbarSections";
import Footer from "./Footer";
import { FaWhatsapp } from 'react-icons/fa';

function Details (){

   //HOOKS
  const [product, setProduct] = useState({product : []});
  const {id} = useParams()
  const url = "/products/" + id;
  
  useEffect (() => {
    fetch(url)
    .then(response => {return response.json()})
    .then(product => setProduct(product))
    .catch(errors => {console.log(errors)})
  }, )

  //SWITCH PARA MOSTRAR CATEGORÍA EN TARJETA DE PRODUCTO
  function renderSwitch(category) {
    switch(category) {
      case 1:
        return 'Mate';
      case 2:
        return 'Matera';
      case 3:
        return 'Bombilla';
      case 4:
        return 'Termo';
      default:
        return 'foo';
    }
  }

    return(
    <section >
          <NavbarSections />
       
          {/* PRODUCT CARD */} 
          <article className= "  p-4 flex flex-col md:flex-row lg:flex-row  w-full mx-auto  hover:drop-shadow-md">
              {/* Image */}
              
                <img 
                  src={product.image}  
                  alt="" 
                  className="lg:object-contain object-scale-down w-2/3  mx-auto "/>
              

              {/* PRODUCT DESCRIPTION */}
              <div className="flex flex-col  my-auto ">
                  {/* Model title */}
                  <div className= "text-4xl text-center font-bold">
                    {renderSwitch(product.category)} - {product.model}
                  </div>

                  {/* Price title (with or whithout discount) */}
                  {product.discount > 0 ?
                  <div  className="flex flex-row justify-center ">
                      <div  className= "text-2xl  mt-2 p-2 font-bold line-through text-red-900 "> { "$" + product.price} </div>
                      <div  className= "text-4xl  mt-2 p-2 font-bold text-green-600"> {"$" + (product.price - (product.price / product.discount)) } </div>
                      <div   className= "text-xl  mt-2 p-2 text-green-600"> {  product.discount + "%" } </div>
                  </div>
                        :
                  <div className= "text-4xl text-center mt-2 p-2 font-bold  text-red-900"> {"$" + product.price} </div>                   
                  }
              
                  {/* Description */}
                  <div className = " mx-auto w-2/3 p-4 text-justify  ">
                  Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
                  dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
                  </div>

                  {/* Contact */}

                  <a href="https://api.whatsapp.com/send/?phone=5492323517210&text&app_absent=0" > 
                    <FaWhatsapp className ="text-4xl sm:8xl mx-auto text-red-800  hover:text-gray-500 w-1/10"/> 
                  </a>

            </div>
          </article>

           <Footer />
      </section>
       
    )
}

export default Details;
