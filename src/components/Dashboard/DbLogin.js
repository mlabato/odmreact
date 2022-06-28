import React, { useState, useRef } from "react";
import DbNavbar from "./DbNavbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function DbLogin() {
  //HOOKS
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  //ENVIO DE FORM Y RUTEO
  const navigate = useNavigate();

  const postData = async (e) => {
    e.preventDefault();
    /*
    const form = new FormData();

    form.append("password", password);
    form.append("email", email);
    */
    try {
      const response = await axios({
        url: "http://localhost:3000/login",
        method: "POST",
        data: { password: password, email: email },
      });

      if (response.status === 201) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //VALIDACIONES FRONT END
  const emailRef = useRef();
  const passwordRef = useRef();

  const [emailError, setEmailError] = useState(false);
  const emailValidatingHandler = () => {
    const array = [...emailRef.current.value]
    const arrayControl = array.includes("@");
    if (
      emailRef.current.value.length === 0 ||
      !arrayControl 
    ) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  return (
    <section>
      <DbNavbar />
      <form
        method="POST"
        action="http://google.com"
        onSubmit={postData}
        className="flex flex-col justify-center p-4"
      >
        {/*---------------EMAIL------------------ */}
        <label for="email" className="text-red-700 mt-2 text-center">
          {" "}
          E-mail{" "}
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="ej. example@example.com"
          className="bg-gray-50 w-1/4 border mx-auto border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 
                                dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
          onChange={(e) => {
            setEmail(e.target.value);
            emailValidatingHandler()
          }}
          onBlur={(e) =>{emailValidatingHandler()}}
          ref={emailRef}
        />

        {emailError === true ? (
          <p className="text-red-500 mt-2 text-sm text-center">
            Debe ingresar un email válido
          </p>
        ) : (
          ""
        )}

        {/*---------------PASSWORD------------------ */}
        <label for="password" className="text-red-700 mt-2 text-center">
          {" "}
          Password{" "}
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="bg-gray-50 w-1/4 border mx-auto border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 
                        dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          ref={passwordRef}
        />

        <button className="text-white bg-red-700 p-4 w-1/4 opacity-70 my-4 mx-auto rounded-lg">
          {" "}
          Loguearse{" "}
        </button>
      </form>
    </section>
  );
}

export default DbLogin;
