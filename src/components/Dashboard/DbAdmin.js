import DbNavbar from "./DbNavbar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function DbAdmin() {
  const [users, setUsers] = useState({ users: [] });

  useEffect(() => {
    fetch("/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => setUsers(users))
      .catch((errors) => {
        console.log(errors);
      });
  }, []);

  const navigate = useNavigate();

  const deleteData = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <DbNavbar />

      <form
        action="/dashboard/admin/newadmin"
        method="GET"
        className="bg-red-700 my-10 text-white text-sm w-1/4 p-2 rounded-lg mx-auto text-center"
      >
        <button type="submit"> AGREGAR ADMIN </button>
      </form>

      <table className="min-w-full table-auto">
        <thead className="justify-between">
          <tr className="bg-red-700">
            <th className="px-2 py-2">
              <span className="text-indigo-50">Username</span>
            </th>

            <th className="px-2 py-2">
              <span className="text-indigo-50">Email</span>
            </th>

            <th className="px-2 py-2">
              <span className="text-indigo-50">Accion</span>
            </th>
          </tr>
        </thead>

        {users?.users?.map((user, i) => {
          return (
            <tbody className="bg-gray-200">
              <tr className="bg-white border-4 border-gray-200 text-center">
                {/* USERNAME */}
                <td className="px-2 py-2">{user.username}</td>

                {/* EMAIL */}
                <td className="px-2 py-2">{user.email}</td>

                {/* ACCION*/}
                <td className="px-2 py-2 flex flex-row justify-center">
                  <form
                    action={"/dashboard/editadmin/" + user.id}
                    method="GET"
                    className="bg-red-700 text-white text-sm mx-2 p-2 rounded-lg"
                  >
                    <button type="submit"> Editar </button>
                  </form>
                </td>

                {/* ACCION
                <td className="px-2 py-2 flex flex-row justify-center">
                  <form
                    action={"http://localhost:3000/userdelete/" + user.id}
                    method="POST"
                    className="bg-red-700 text-sm text-white mx-2 p-2 rounded-lg"
                  >
                    <button type="submit"> Eliminar </button>
                  </form>
          </td> */}
              </tr>
            </tbody>
          );
        })}
      </table>
    </section>
  );
}

export default DbAdmin;
