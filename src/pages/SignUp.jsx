import { useState } from "react";
import SignupSVG from "../assets/img/SignupSVG";
import Button from "../components/Button";
const SignUp = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <main className="flex justify-center w-full">
      <section className="flex flex-col gap-2 bg-white w-5/6 lg:w-1/4 p-20 my-20 rounded-md items-center">
        <SignupSVG />
        <h1 className="text-xl font-semibold text-center">
          Para crear tu cuenta necesitamos validar tus datos
        </h1>
        <p>Solo te tomará unos minutos.</p>
        <div className="flex flex-row gap-2">
          <input
            type="checkbox"
            name="auth"
            id="auth"
            className="self-start mt-2"
            onClick={() => {
              setIsChecked(!isChecked);
            }}
          />{" "}
          <label for="auth">
            <p className="text-xs text-gray-400">
              Autorizo el uso de mis datos de acuerdo a la{" "}
              <span className="text-blue-400 cursor-pointer">
                Declaración de Privacidad
              </span>{" "}
              y acepto los{" "}
              <span className="text-blue-400 cursor-pointer">
                Términos y condiciones.
              </span>
            </p>
          </label>
        </div>
        <Button
          text="Continuar"
          extras={`${
            isChecked ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-500"
          }`}
        />
        <Button
          text="Crear cuenta empresa"
          bgColor="bg-blue-200"
          textColor="text-blue-600"
        />
      </section>
    </main>
  );
};

export default SignUp;
