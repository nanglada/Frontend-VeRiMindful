import { useNavigate } from "react-router-dom";

interface Props {
    id: string,
    title: string,
    description: string,
    redirect: string
}

export default function CarrouselDiv({ id, title, description, redirect }: Props) {

    let navigate = useNavigate()

    return (
        <div className="carousel-div" id={id}>
            <div className="p-12 text-center text-white">
                <h1 className="font-bold text-4xl py-2 font-logo">{title}</h1>
                <p className="text-2xl py-4 text-center p-40">{description}</p>
                <button onClick={() => navigate(`${redirect}`)} className="hover:bg-white py-2 px-4 hover:text-black border-2 border-black bg-black text-white">SABER MÁS</button>
            </div>
        </div>
    );
}