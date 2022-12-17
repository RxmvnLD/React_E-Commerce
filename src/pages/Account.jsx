import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import user from "../assets/img/user.png";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { TYPES } from "../actions/auth.actions";

const Account = () => {
  const navigate = useNavigate();
  const { state } = useContext(AuthContext);
  const { dispatch } = useContext(AuthContext);

  const logout = () => {
    dispatch({
      type: TYPES.LOGOUT,
      payload: {
        success: false,
        user: null,
      },
    });
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <main className="flex flex-col items-center justify-center w-full">
      <section className="flex flex-row gap-2 bg-white w-5/6 lg:w-2/6 p-5 my-10 rounded-md items-center cursor-pointer">
        <div className="w-2/12 h-full">
          <img src={user} alt="userImg" className="rounded-full " />
        </div>
        <div className="w-10/12">
          <div className="text-3xl font-semibold">{`${state.user.name.firstname} ${state.user.name.lastname}`}</div>
          <div>Nivel 6 - Mercado Puntos</div>
        </div>
      </section>
      <section className="flex flex-col gap-4 bg-white w-5/6 lg:w-2/6 py-5 pl-10 rounded-md items-start">
        <div
          className="cursor-pointer"
          onClick={() => {
            logout();
          }}
        >
          <h2 className="text-lg ">Cerrar sesión</h2>
          <p className="text-sm text-gray-400">
            Termina tu sesión en este dispositivo.
          </p>
        </div>
        <div>
          <h2 className="text-lg ">Mis datos</h2>
          <p className="text-sm text-gray-400">
            Gestiona tus datos personales.
          </p>
        </div>
        <div>
          <h2 className="text-lg ">Seguridad</h2>
          <p className="text-sm text-gray-400">Seguridad configurada.</p>
        </div>
        <div>
          <h2 className="text-lg ">Mis tarjetas</h2>
          <p className="text-sm text-gray-400">Gestiona tus tarjetas.</p>
        </div>
        <div>
          <h2 className="text-lg ">Direcciones</h2>
          <p className="text-sm text-gray-400">
            Modifica tus direcciones o agrega una nueva.
          </p>
        </div>

        <div>
          <h2 className="text-lg ">Privacidad</h2>
          <p className="text-sm text-gray-400">
            Elije qué tipo de información quieres recibir.
          </p>
        </div>

        <div>
          <h2 className="text-lg ">Comunicaciones</h2>
          <p className="text-sm text-gray-400">
            Elige qué tipo de información quieres recibir.
          </p>
        </div>
        <div>
          <h2 className="text-lg ">Suscripciones</h2>
          <p className="text-sm text-gray-400">Gestiona tus suscripciones.</p>
        </div>
      </section>
    </main>
  );
};

export default Account;
