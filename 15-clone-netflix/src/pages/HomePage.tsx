import { Bell, FileSearch, Gift, Info, MagnifyingGlass, Play } from "phosphor-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CardMovie } from "../components/CardMovie";
import data from "../data";
import { API_URL } from "../utils/api";

export function HomePage() {
  const { name } = useParams()
  const [listFilms, setListFilms] = useState([])
  const navigate = useNavigate()

  const product = data.filter(item => item.name === name)

  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        response
          .json()
          .then((data) => {
            setListFilms(data.results)
            console.log(data.results)
          }
          );
      })
      .catch((e) => console.log(e.message));
  }, [])

  return (
    <div className="w-full flex flex-col">
      <header className="flex py-8 px-14 justify-between items-center">
        <div className="flex gap-12 items-center">
          <h1 className="text-3xl text-red-400 font-bold">NETFILMES</h1>
          <ul className="flex gap-8">
            <li><a href="#">Jhokhi</a></li>
            <li><a href="#">Jhokhi</a></li>
            <li><a href="#">Jhokhi</a></li>
            <li><a href="#">Jhokhi</a></li>
            <li><a href="#">Jhokhi</a></li>
          </ul>
        </div>
        <div className="flex gap-8 items-center">
          <MagnifyingGlass size={32} />
          <a href="#" >{product[0].name}</a>
          <Gift size={32} />
          <Bell size={32} />
          <a className="hover:border hover:border-white cursor-pointer" onClick={() => { navigate("/") }}><img className="w-8 h-8" src={product[0].imgSrc} /></a>
        </div>
      </header>

      <div className="w-full h-full relative">
        <img className="w-full h-[500px] object-cover" src="https://images.unsplash.com/photo-1542401886-65d6c61db217?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
        <div className="flex flex-col absolute bottom-14 left-14 gap-8">
          <h1 className="text-6xl font-bold">YANIMDA</h1>
          <p className="text-xl">
            Küçük yaşta başının çaresine bakmayı öğrenen ve çok çalışarak iş<br />
            dünyasında önemli bir konuma gelen Emir, bir gün sokak şarkıcısı<br />
            bir kızla karşılaşır ve hayatı değişir.
          </p>
          <div className="flex gap-4">
            <button className="flex items-center gap-5 py-3 px-6 bg-white text-black font-semibold text-xl rounded hover:bg-black hover:text-white"><Play size={24} />Play</button>
            <button className="flex items-center gap-5 py-3 px-6 rounded bg-gray-200 hover:bg-gray-300">
              <Info size={24} />
              Info
            </button>
          </div>
        </div>
      </div>

      <div className="w-full px-20 py-10">
        <div>
          <h1 className="text-3xl font-semibold mb-10">Populares na NetFilmes</h1>
          <div className="w-full flex flex-wrap gap-10">
            {listFilms.map((item, index) => {
              return(
                <CardMovie key={index} title={item.title} srcImg={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}/>
               )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}