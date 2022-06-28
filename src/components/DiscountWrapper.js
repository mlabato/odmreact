import { useState, useEffect } from "react";

function DiscountWrapper() {
  //HOOKS
  const [data, setData] = useState({ onSale: [] });

  useEffect(() => {
    fetch("/onsale")
      .then((response) => {
        return response.json();
      })
      .then((products) => setData(products))
      .catch((errors) => {
        console.log(errors);
      });
  }, []);

  //SWITCH PARA MOSTRAR CATEGORÍA EN TARJETA DE PRODUCTO
  function renderSwitch(category) {
    switch (category) {
      case 1:
        return "Mate";
      case 2:
        return "Matera";
      case 3:
        return "Bombilla";
      case 4:
        return "Termo";
      default:
        return "foo";
    }
  }

  return (
    <div>
      {data.onSale !== undefined ? (
        <section className="relative w-full flex flex-col md:flex-row mx-auto justify-center p-2 ">
          {data?.onSale?.map((product, i) => {
           if (i < 3){
            return (
              //PRODUCT CARD
              <article
                key={"article" + i}
                className="group flex sm:w-full md:w-full w-1/4 flex-col mx-auto  rounded-lg hover:drop-shadow-md"
              >
                {/* Image */}
                <img
                  key={"img" + i}
                  src={
                    "http://localhost:3000/images/productImages/" +
                    product.image
                  }
                  alt=""
                  className="h-1/4 w-full sm:h-full sm:w-full object-cover mx-auto "
                />


                {/* Model title*/}
                <div
                  key={"model" + i}
                  className="text-sm md:text-lg  lg:text-2xl text-center mt-2 p-2 text-red-900 font-extralight hover:text-gray-500 "
                >
                  <a href="/id">
                    {" "}
                    {renderSwitch(product.category_id)} - {product.model}{" "}
                  </a>
                </div>

                {/* Price title (with or whithout discount) */}

                <div className="flex flex-row justify-center ">
                  <div
                    key={"price" + i}
                    className="text-sm md:text-lg  lg:text-2xl   p-2 font-bold line-through text-red-900 "
                  >
                    {" "}
                    {"$" + product.price}{" "}
                  </div>
                  <div
                    key={"price" + i}
                    className="text-sm md:text-lg  lg:text-2xl   p-2 font-bold text-green-600"
                  >
                    {" "}
                    {"$" +
                      (product.price - product.price / product.discount)}{" "}
                  </div>
                  <div
                    key={"discount" + i}
                    className="text-sm md:text-lg  lg:text-2xl   p-2 text-green-600"
                  >
                    {" "}
                    {product.discount + "%"}{" "}
                  </div>
                </div>

                {/* Detail / Whatsapp button */}
                <div className=" sm:hidden md:hidden lg:block relative bottom-16-z-50 bottom-[40px] flex  group-hover:z-10 group-hover:bottom-0  duration-500 flex-row mx-auto justify-between p-4 w-1/3 opacity-0 group-hover:opacity-100">
                  <button className="bg-transparent hover:bg-red-900  text-red-900  font-semibold hover:text-white mr-3 py-2 px-4 border  border-red-900 hover:border-transparent rounded">
                    <a href={"/productos/" + product.id}> Ver más</a>
                  </button>
                </div>

                <div className="sm:block md:block lg:hidden text-center text-red-900 font-bold">
                  <a href={"/productos/" + product.id}> Ver más</a>
                </div>
              </article>
            )};
          })}
        </section>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
}

export default DiscountWrapper;
