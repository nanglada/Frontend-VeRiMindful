interface Props {
    title: string,
    text: string,
    photo: string,
    index: number
}

export default function NewsColumn({ title, text, photo, index }: Props) {
    return (
        <div key={index} className="bg-white m-4 p-6 rounded">
            <img src={photo}
                className="h-48 w-full object-cover"/>
            <h1 className="text-xl my-2 text-center font-semibold">{title}</h1>
            <p className="text-justify">{text}</p>
        </div>
    
    );
}