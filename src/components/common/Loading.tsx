import './Loading.css';

export default function Loading() {
    return (
        <>
            <div className="loading">
                <div className="spin-loading"/>
                <div className='title-loading'>
                    <h4 className='font-body text-2xl'>Cargando...</h4>
                </div>
            </div>  
        </>
    );

}