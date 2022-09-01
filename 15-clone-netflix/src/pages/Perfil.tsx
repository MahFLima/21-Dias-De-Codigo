import { useNavigate } from "react-router-dom";
import { CardUser } from "../components/CardUser";
import data from "../data"

export function Perfil(){
  const navigate = useNavigate()
  return(
    <div className="w-full h-screen flex items-center justify-center">
      <h1 className="text-3xl text-red-400 font-bold absolute top-4 left-14">NETFILMES</h1>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl">Quem está assistindo?</h1>
        <div className="flex gap-12 p-10">
          {data.map((item, index) => {
            return(
              <CardUser onClick={() => {navigate(`/home/${item.name}`)}} name={item.name} srcImg={item.imgSrc}/>
            )
          })}

        </div>
        <button className="border border-gray-500 px-7 py-2 text-gray-500 text-2xl mt-8">Gerenciar Perfil</button>
      </div>
    </div>
  )
}