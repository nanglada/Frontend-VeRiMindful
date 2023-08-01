import Navbar from "../page/Navbar";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


export default function NewCourse() {

    const { register, formState: { errors }, handleSubmit } = useForm();

    // const navigate = useNavigate();

    const onSubmit = async () => {
        console.log("holi")
        // try {
        //     let res = await axios.post("/user", data);
        //     await toast.success("Usuario registrado con éxito", {
        //         position: toast.POSITION.TOP_CENTER
        //     });
        //     navigate('/');
        // } catch (err) {
        //     await toast.error("Ocurrió un error", {
        //         position: toast.POSITION.TOP_CENTER
        //     });
        // }     
    }
    return (
        <>
        <Navbar/>
        <div className="grid place-items-center mt-8">
            <h1 className="text-2xl text-orange1">Agregar nuevo curso</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
                <label className='text-left mx-14 text-sm'>Título del curso</label>
                <div className='grid place-items-center'>
                    <input type="text"
                        {...register("firstName", { required: true })}
                        aria-invalid={errors.firstName ? "true" : "false"}
                        className="text-black border border-black mb-2 px-2 py-1 w-4/5"
                    />
                    {errors.firstName?.type === 'required' && <p role="alert" className="text-xs text-black">Este campo es obligatorio.</p>}
                </div>
                <label className='text-left mx-14 text-sm'>Apellido</label>
                <div className='grid place-items-center'>
                    <input type="text"
                        {...register("lastName", { required: true })}
                        aria-invalid={errors.lastName ? "true" : "false"}
                        className="text-black border border-black mb-2 px-2 py-1 w-4/5"
                    />
                    {errors.lastName?.type === 'required' && <p role="alert" className="text-xs text-black">Este campo es obligatorio.</p>}
                </div>

                <label className='text-left mx-14 text-sm'>Teléfono</label>
                <div className='grid place-items-center'>
                    <input type="text"
                        {...register("phone", { required: true })}
                        aria-invalid={errors.phone ? "true" : "false"}
                        className="text-black border border-black mb-2 px-2 py-1 w-4/5"
                    />
                    {errors.last?.type === 'phone' && <p role="alert" className="text-xs text-black">Este campo es obligatorio.</p>}
                </div>

                <label className='text-left mx-14 text-sm'>Fecha de nacimiento</label>
                <div className='grid place-items-center'>
                    <input type="text"
                        {...register("birthday", { required: true })}
                        aria-invalid={errors.birthday ? "true" : "false"}
                        className="text-black border border-black mb-2 px-2 py-1 w-4/5"
                    />
                    {errors.last?.type === 'birthday' && <p role="alert" className="text-xs text-black">Este campo es obligatorio.</p>}
                </div>

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