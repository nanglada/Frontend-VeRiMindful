import { useEffect, useState } from "react"
import Navbar from "../page/Navbar"
import Carrousel from "./Carrousel/Carrousel"
import Courses from "./Courses"
import News from "./News/News"
import axios from "axios"
import Loading from "../common/Loading"
import Fact from "./Fact"

function Landing() {

  let [news, setNews] = useState([])
  let [loading, setLoading] = useState(true)

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
        <News news={news}/>
        {/* <Fact/> */}
        </>
      ) : (
        <Loading/>
      )
    }
    
    </>
  )
}

export default Landing
