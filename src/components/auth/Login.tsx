import React from "react";
import { useForm } from "react-hook-form";
import Navbar from "../page/Navbar";
import axios from "axios";
import useTokenAuth from "../../auth/useTokenAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const token:any = useTokenAuth();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data: any) => {
    let email = data.email;
    let password = data.password;
    try {
        let res = await axios.post("/users/login", { email: email, password: password });
        token.handleTokenChange(res.data.token, 'login');
        navigate('/');
      // await toast.success("Usuario registrado con éxito", {
      //     position: toast.POSITION.TOP_CENTER
      // });
        
    } catch (err) {
      // await toast.error("Ocurrió un error", {
      //     position: toast.POSITION.TOP_CENTER
      // });
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12">
        <div className="max-w-md w-3/5">
          <div>
            <h1 className="font-logo text-3xl mb-4 text-center text-orange1 px-6">
              Iniciar sesión
            </h1>
          </div>
          <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label className="text-sm">Correo electrónico</label>
                <input
                  id="email-address"
                  type="email"
                  autoComplete="email"
                  required
                  className="text-black border border-black mb-2 px-2 py-2 w-full"
                  {...register("email", {
                    required: "Correo electrónico requerido",
                  })}
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-500" id="email-error">
                    {errors.email.message as string}
                  </p>
                )}
              </div>
              <div className="mt-4">
                <label className="text-sm">Contraseña</label>
                <input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="text-black border border-black mb-2 px-2 py-2 w-full"
                  {...register("password", {
                    required: "Contraseña es requerida",
                  })}
                />
                {errors.password && (
                  <p className="mt-2 text-sm text-red-500" id="password-error">
                    {errors.password.message as string}
                  </p>
                )}
              </div>
            </div>
            <div className="grid place-items-center mt-8">
              <button
                type="submit"
                className="bg-transparent grid place-items-start border border-black py-2 px-4 mb-8 transition ease-in-out delay-100 hover:bg-black hover:text-white"
              >
                <p className="font-title font-normal">INGRESAR</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
