import { useEffect, useState } from "react"
import Navbar from "../page/Navbar"
import Carrousel from "./Carrousel/Carrousel"
import Courses from "./Courses"
import News from "./News/News"
import axios from "axios"
import Loading from "../common/Loading"
import Fact from "./Fact"
import InstagramFeed from "./Instagram/Instagram"


let news2 = [{
      "content": "En la Región Metropolitana sólo existirá un centro electoral. Se trata del Liceo Arturo Alessandri Palma, ubicado en la calle Av. General Bustamante, 443, en la comuna de Providencia. Este local dispondrá de 108 mesas de votación, según informó Marcos Garzón, coordinador del Comité de Santiago Centro. Los inscritos podrán ir a votar desde las 09:00 hasta las 17.00 horas, momento en que cerrarán las mesas. Este centro recibirá a 53.011 electores inscritos en todo Santiago. Las mesas serán distribuidas de acuerdo con la cantidad de electores de cada sector: 89 Santiago Centro; 13 Santiago Este y 6 Santiago Oeste, añadió. Además hizo un llamado a los venezolanos inscritos para que ejerzan su derecho. Estas elecciones son autogestionadas con el apoyo organizativo de 10 partidos políticos y 16 organizaciones no gubernamentales. Será un proceso inédito ya que se realizarán simultáneamente en 80 ciudades alrededor del mundo, finalizó Garzó",
      "title": "Título de noticia 1",
      "link": "https://images.unsplash.com/photo-1593288942460-e321b92a6cde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
      "category": "Noticias"
    },
    {
      "content": "En la Región Metropolitana sólo existirá un centro electoral. Se trata del Liceo Arturo Alessandri Palma, ubicado en la calle Av. General Bustamante, 443, en la comuna de Providencia. Este local dispondrá de 108 mesas de votación, según informó Marcos Garzón, coordinador del Comité de Santiago Centro. Los inscritos podrán ir a votar desde las 09:00 hasta las 17.00 horas, momento en que cerrarán las mesas. Este centro recibirá a 53.011 electores inscritos en todo Santiago. Las mesas serán distribuidas de acuerdo con la cantidad de electores de cada sector: 89 Santiago Centro; 13 Santiago Este y 6 Santiago Oeste, añadió. Además hizo un llamado a los venezolanos inscritos para que ejerzan su derecho. Estas elecciones son autogestionadas con el apoyo organizativo de 10 partidos políticos y 16 organizaciones no gubernamentales. Será un proceso inédito ya que se realizarán simultáneamente en 80 ciudades alrededor del mundo, finalizó Garzó",
      "title": "Título de noticia 2",
      "link": "https://images.hola.com/imagenes/mascotas/20201104178485/consejos-gatos-para-principiantes/0-884-859/gatito-m.jpg?tx=w_680",
      "category": "Noticias"
    },
    {
      "content": "En la Región Metropolitana sólo existirá un centro electoral. Se trata del Liceo Arturo Alessandri Palma, ubicado en la calle Av. General Bustamante, 443, en la comuna de Providencia. Este local dispondrá de 108 mesas de votación, según informó Marcos Garzón, coordinador del Comité de Santiago Centro. Los inscritos podrán ir a votar desde las 09:00 hasta las 17.00 horas, momento en que cerrarán las mesas. Este centro recibirá a 53.011 electores inscritos en todo Santiago. Las mesas serán distribuidas de acuerdo con la cantidad de electores de cada sector: 89 Santiago Centro; 13 Santiago Este y 6 Santiago Oeste, añadió. Además hizo un llamado a los venezolanos inscritos para que ejerzan su derecho. Estas elecciones son autogestionadas con el apoyo organizativo de 10 partidos políticos y 16 organizaciones no gubernamentales. Será un proceso inédito ya que se realizarán simultáneamente en 80 ciudades alrededor del mundo, finalizó Garzó",
      "title": "Título de noticia 3",
      "link": "https://www.mascotaclubperu.com/wp-content/uploads/2019/05/shutterstock_270581891.jpg",
      "category": "Noticias"
    },
  ]
  
function Landing() {

  let [news, setNews] = useState([])
  let [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchData(){
        let res = await axios.get("/posts", { params: { category: 'Noticias', skip: 0, take: 3 } })
        setNews(res.data)
        console.log(res.data)
        setLoading(false)
    }
    fetchData()
  }, [])

  return (
    <>
    <Navbar/>
    {
      (!loading) ? (
        <>
        <Carrousel/>
        <Courses/>
        <News news={news2}/>
        <InstagramFeed/>
        <Fact/>
        </>
      ) : (
        <Loading/>
      )
    }
    
    </>
  )
}

export default Landing
