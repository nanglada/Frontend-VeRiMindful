interface Props {
    text: string,
    updateTotal: any,
    index: number
}

export default function SelfcompassionQuiz({ text, updateTotal, index }: Props) {
    return (
        <>
        <div className="flex mb-2 ">
            <input 
                className="w-12 pl-6 mb-2" style={{"borderBottom": "2px solid black"}} 
                onChange={(e) => updateTotal(e, index)}
                type="number" 
                min={1} 
                max={5}/>
            <label className="ml-4 mt-2">{text}</label>
        </div>
        </>
    );
}