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
            
            <div className={`p-12 text-center ${white ? 'text-white' : 'text-black'}`}>
                <h1 className="font-bold text-4xl py-2 font-logo">{title}</h1>
                <p className="text-2xl py-4 text-center p-40">{description}</p>
                <button onClick={() => navigate(`${redirect}`)} 
                className={`${!white ? 'hover:bg-white hover:text-black hover:border-white border-black bg-black text-white' : 'hover:bg-black border-white hover:text-white hover:border-black bg-white text-black'} py-2 px-4 border-2`}>SABER MÁS</button>
            </div>
        </div>
    );
}