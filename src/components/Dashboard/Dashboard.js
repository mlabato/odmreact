import DbNavbar from "./DbNavbar";
import React, {useState, useEffect} from "react";
import DbCards from "./DbCards";
import DbList from "./DbList";

function Dashboard(){

    //HOOKS
    const [data, setData] = useState({products : []});

    useEffect (() => {
      fetch("/products")
      .then(response => {return response.json()})
      .then(products => setData(products))
      .catch(errors => {console.log(errors)})
    }, []);

    return(
        <section>
            < DbNavbar />
            < DbCards data = {data} />
            < DbList  products = {data?.products} />
        </section>
    )
};

export default Dashboard;