import { useNavigate } from "react-router-dom";

interface Props {
    id: string,
    title: string,
    description: string,
    redirect: string,
    white: boolean
}

export default function CarrouselDiv({ id, title, description, redirect, white }: Props) {

    let navigate = useNavigate()

    return (
        <div className="carousel-div" id={id}>
            
            <div className={`lg:p-12 text-center ${white ? 'text-white' : 'text-black'}`}>
                <h1 className="font-bold lg:text-4xl text-2xl lg:py-2 font-logo">{title}</h1>
                <p className="lg:text-2xl text-lg lg:py-4 py-2 text-center lg:p-40">{description}</p>
                <button onClick={() => navigate(`${redirect}`)} 
                className={`${!white ? 'hover:bg-white hover:text-black hover:border-white border-black bg-black text-white' : 'hover:bg-black border-white hover:text-white hover:border-black bg-white text-black'} py-2 px-4 border-2`}>SABER MÁS</button>
            </div>
        </div>
    );
}