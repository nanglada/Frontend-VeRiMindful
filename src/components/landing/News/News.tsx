import { useEffect, useState } from "react";
import NewsColumn from "./NewsColumn";

interface Props {
    news: Array<any>
}

export default function News({ news }: Props) {

    return (
        <div className="grid place-items-center bg-blue1 mt-16 py-12 px-6">
            <h1 className="font-logo text-3xl mb-6">Noticias destacadas</h1>
            <div className="grid lg:grid-cols-3">
                {
                    news.map((element: any, index: number) =>
                        <>
                        <NewsColumn 
                            title={element.title}
                            text={element.content}
                            photo={element.link}
                            index={index}
                        />
                        </>
                    )
                }
            </div>
        </div>
    
    );
}