import Home from "./Home";
import Products from "./Products";
import Mates from "./Mates";
import Materas from "./Materas";
import Bombillas from "./Bombillas";
import Termos from "./Termos";
import Ofertas from "./Ofertas";
import Details from "./Details";

import DbLogin from "./Dashboard/DbLogin";
import Dashboard from "./Dashboard/Dashboard";
import DbCreate from "./Dashboard/DbCreate";
import DbEdit from "./Dashboard/DbEdit";
import DbAdminRegister from "./Dashboard/DbAdminRegister";
import DbAdmin from "./Dashboard/DbAdmin";
import DbAdminEdit from "./Dashboard/DbAdminEdit";

import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  //HOOKS
  const [data, setData] = useState({ products: [] });

  useEffect(() => {
    fetch("/products")
      .then((response) => {
        return response.json();
      })
      .then((products) => setData(products))
      .catch((errors) => {
        console.log(errors);
      });
  }, []);

  return (
    <div className="font-league">
      <Routes>
        <Route path="/ofertas" element={<Ofertas />} />
        <Route
          path="/productos"
          element={<Products products={data?.products} />}
        />
        <Route path="/productos/:id" element={<Details />} />
        <Route path="/mates" element={<Mates />} />
        <Route path="/materas" element={<Materas />} />
        <Route path="/bombillas" element={<Bombillas />} />
        <Route path="/termos" element={<Termos />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<DbLogin />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/dashboard/admin" element={<DbAdmin />} />

        <Route path="/dashboard/admin/newadmin" element={<DbAdminRegister />} />

        <Route path="/dashboard/create" element={<DbCreate />} />

        <Route path="/dashboard/edit/:id" element={<DbEdit />} />

        <Route path="/dashboard/editadmin/:id" element={<DbAdminEdit />} />
      </Routes>
    </div>
  );
}

export default App;
