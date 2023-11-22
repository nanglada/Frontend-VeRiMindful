import Navbar from "../page/Navbar";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import useTokenAuth from "../../auth/useTokenAuth";


export default function NewCourse() {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const token:any = useTokenAuth();
    // const navigate = useNavigate();

    const onSubmit = async () => {
        try {
            let res = await axios.post("/posts", register, { 
                headers: {"authorization" : `Bearer ${token.currentUser}`}
              });
            console.log("funcionó!")
            // await toast.success("Usuario registrado con éxito", {
            //     position: toast.POSITION.TOP_CENTER
            // });
            //navigate('/');
        } catch (err) {
            // await toast.error("Ocurrió un error", {
            //     position: toast.POSITION.TOP_CENTER
            // });
        }     
    }
    return (
        <>
        <Navbar/>
        <div className="grid place-items-center mt-8">
            <h1 className="text-2xl text-orange1">Agregar nuevo curso</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='w-3/5'>
                
                <div className='pt-6 grid place-items-center'>
                <label className='text-sm'>Título del curso</label>
                
                    <input type="text"
                        {...register("title", { required: true })}
                        aria-invalid={errors.title ? "true" : "false"}
                        className="text-black border border-black mb-2 px-2 py-1 w-full"
                    />
                    {errors.title?.type === 'required' && <p role="alert" className="text-xs text-black">Este campo es obligatorio.</p>}
                </div>
                
                <div className='pt-6 grid place-items-center'>
                <label className='text-sm'>Descripción del curso</label>
                
                    <textarea rows={8}
                        {...register("description", { required: true })}
                        aria-invalid={errors.description ? "true" : "false"}
                        className="text-black border border-black mb-2 px-2 py-1 w-full"
                    />
                    {errors.description?.type === 'required' && <p role="alert" className="text-xs text-black">Este campo es obligatorio.</p>}
                </div>

                <div className='pt-6 grid place-items-center'>
                <label className='text-sm'>Imagen del curso</label>
                
                    <input type="file" accept="image/*"
                        {...register("image", { required: true })}
                        aria-invalid={errors.image ? "true" : "false"}
                        className="text-black border border-black mb-2 px-2 py-1 w-full"
                    />
                    {errors.image?.type === 'required' && <p role="alert" className="text-xs text-black">Este campo es obligatorio.</p>}
                </div>

                <div className="grid grid-cols-2">
                <div className='pt-6 grid place-items-center mr-2'>
                <label className='text-sm'>Formato del curso</label>

                    <select id="format"
                        {...register("format", { required: true })}
                        aria-invalid={errors.format ? "true" : "false"}
                        className="text-black border border-black mb-2 px-2 py-1 w-full"
                    >
                        <option value="online">Online</option>
                        <option value="presencial">Presencial</option>
                    </select>
                    {errors.format?.type === 'required' && <p role="alert" className="text-xs text-black">Este campo es obligatorio.</p>}
                </div>
                <div className='pt-6 grid place-items-center'>
                <label className='text-sm'>Cantidad de sesiones</label>
                
                    <input type="number" min={1}
                        {...register("sessions", { required: true })}
                        aria-invalid={errors.sessions ? "true" : "false"}
                        className="text-black border border-black mb-2 px-2 py-1 w-full"
                    />
                    {errors.sessions?.type === 'required' && <p role="alert" className="text-xs text-black">Este campo es obligatorio.</p>}
                </div>
                </div>
                <div className='pt-6 grid place-items-center'>
                <label className='text-sm'>Correo electrónico de contacto</label>
                
                    <input type="text"
                        {...register("email", { required: true })}
                        aria-invalid={errors.email ? "true" : "false"}
                        className="text-black border border-black mb-2 px-2 py-1 w-full"
                    />
                    {errors.email?.type === 'required' && <p role="alert" className="text-xs text-black">Este campo es obligatorio.</p>}
                </div>
               
               <div className="grid grid-cols-2">
                <div className='pt-6 grid place-items-center mr-2'>
                <label className='text-sm'>Fechas del curso</label>
                
                    <input type="text"
                        {...register("dates", { required: true })}
                        aria-invalid={errors.dates ? "true" : "false"}
                        className="text-black border border-black mb-2 px-2 py-1 w-full"
                    />
                    {errors.dates?.type === 'required' && <p role="alert" className="text-xs text-black">Este campo es obligatorio.</p>}
                </div>
                <div className='pt-6 grid place-items-center'>
                <label className='text-sm'>Horario del curso</label>
                
                    <input type="text"
                        {...register("hour", { required: true })}
                        aria-invalid={errors.hour ? "true" : "false"}
                        className="text-black border border-black mb-2 px-2 py-1 w-full"
                    />
                    {errors.hour?.type === 'required' && <p role="alert" className="text-xs text-black">Este campo es obligatorio.</p>}
                </div>
                </div>
                <p>* Se asume que, por default, un taller siendo creado está válido (no ha pasado). </p>
                <div className='grid place-items-center mt-8'>
                    <button className="bg-transparent grid place-items-start border border-black py-2 px-4 mb-8 transition ease-in-out delay-100 hover:bg-black hover:text-white">
                        <p className='font-title font-normal'>INGRESAR</p>
                    </button>
                </div>
            </form>
        </div>
        
        </>
    )
}