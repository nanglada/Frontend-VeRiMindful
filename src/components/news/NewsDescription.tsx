import { useEffect, useState } from "react"
import axios from 'axios'
import Navbar from "../page/Navbar"
import Popup from 'reactjs-popup';
import IMAGEn from "../../assets/fondo1.jpeg"

interface Props {
    course: any,
    index: number
}
export default function CourseDescription({ course, index }: Props){

    return (
        <div className="w-5/6 mb-8 bg-offwhite rounded flex border-2" key={index}>
            <img className="w-1/4" src={IMAGEn}></img>
            <div className="m-8">
            <h3 className="text-2xl mb-4 text-left font-logo font-semibold">{course.title} - Formato {course.format}</h3>
            <p className="mb-2 text-left"><span className="font-semibold text-orange">Fechas:</span> {course.dates}</p>
            <p className="mb-2 text-left"><span className="font-semibold text-orange">Horario:</span> {course.hour}</p>
            <p className="text-justify">Curso de {course.sessions} sesiones</p>
            </div>
        </div>
    )
}