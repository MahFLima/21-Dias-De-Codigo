import { MagnifyingGlass } from "phosphor-react";
import { useState } from "react";
import { Card } from "../components/Card";
import axios from 'axios'

export function Weather() {
  const [data, setData] = useState<Object>({})
  const [location, setLocation] = useState("")
  const [temp, setTemp] = useState(0)
  const [description, setDescription] = useState("")
  const [cloud, setCloud] = useState("")
  const [wind, setWind] = useState("")

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=02fc1c808acb8fd07d2e555a955b9cab&lang=pt_br`

  async function searchLocation() {
    await axios.get(url).then((response) => {
      setDescription(response.data.weather[0].description)
      setCloud(response.data.clouds.all)
      setWind(response.data.wind.speed)
      const celsius = parseFloat(response.data.main.temp)
      setTemp(Math.round((celsius - 32) * 5/9))
    })
  }

  //(celsius  − 32) * (5/9) = 0 °C

  return (
    <div className="w-full flex flex-col items-center justify-center mt-10">
      <div className="flex mb-10 w-96">
        <input className="w-full px-4 py-2" type="text" placeholder="digite o nome da cidade" onChange={(e) => { setLocation(e.target.value) }} />
        <button className="bg-green-500 p-6 hover:opacity-70" onClick={searchLocation}><MagnifyingGlass size={18} /></button>
      </div>
      {temp ? <Card description={description} temp={temp} cloud={cloud} wind={wind}/> : <Card description="nublado" temp={20} cloud="50" wind="18"/>}
      
    </div>
  )
}