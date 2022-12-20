import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { axiosPost } from "../helpers/axiosInstance";
import AuthContext from "../context/AuthContext";
import Button from "../components/Button";
import user4 from "../helpers/user";
import { TYPES } from "../actions/auth.actions";

const Login = () => {
  const [userFocus, setUserFocus] = useState(false);
  const [passFocus, setPassFocus] = useState(false);
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const [loginError, setLoginError] = useState({
    errors: false,
    errorsList: [],
  });

  const submitedForm = async (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    try {
      const res = await axiosPost("/auth/login", {
        username: email.value,
        password: password.value,
      });
      await dispatch({
        type: TYPES.LOGGED_IN,
        payload: {
          success: true,
          user: user4,
        },
      });
      localStorage.setItem("token", res.token);
      navigate("/");
    } catch (error) {
      console.log(error);
      setLoginError({
        errors: true,
        desc: error.data,
      });
    }
  };

  return (
    <main className="flex justify-center w-full">
      <form
        className="flex flex-col gap-2 bg-white w-5/6 lg:w-1/4 p-20 my-20 rounded-md items-center"
        onSubmit={submitedForm}
      >
        <h1 className="text-2xl font-semibold text-center">
          ¡Hola! Ingresa tu teléfono, e‑mail o usuario
        </h1>
        <p className="text-center text-xs">
          Teléfono, e-mail o usuario y contraseña
        </p>
        <input
          name="email"
          type="text"
          className={`rounded-lg text-lg p-2 w-5/6 ${
            userFocus
              ? "outline outline-2 outline-blue-500"
              : "border border-gray-300"
          }`}
          onSelect={() => {
            setUserFocus(!userFocus);
          }}
        />
        <input
          type="password"
          name="password"
          className={`rounded-lg text-lg p-2 w-5/6 ${
            passFocus
              ? "outline outline-2 outline-blue-500"
              : "border border-gray-300"
          }`}
          onSelect={() => {
            setPassFocus(!passFocus);
          }}
        />
        <Button text="Continuar" />
        <Link to="/signup" className="w-full text-center">
          <Button
            text="Crear cuenta"
            textColor="text-blue-500"
            bgColor="bg-white"
          />
        </Link>
        {loginError.errors ? (
          <Button
            text={loginError.desc}
            bgColor="bg-red-200"
            textColor="text-red-600"
          />
        ) : (
          <></>
        )}
      </form>
    </main>
  );
};

export default Login;
