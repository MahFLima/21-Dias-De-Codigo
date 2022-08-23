import { Cloud, ThermometerSimple, Wind } from "phosphor-react"
import icon from "../assets/sun.svg"

type Props = {
  temp: number;
  description: string;
  wind: string;
  cloud: string;
}

export function Card({temp, description, wind, cloud}: Props ) {
  return (
    <main className="flex flex-col p-10 rounded-xl w-80">
      <div className="flex justify-between items-center gap-6">
        <img src={icon} className="w-24 h-24"/>
        <span className="flex flex-col text-base">
          <strong className="text-6xl">{temp}°</strong>
          {description}
        </span>
      </div>
      <div className="flex justify-between mt-11">
        <span className="text-xs">
          <Wind size={18} />
          {wind} MPH
        </span>
        <span className="text-xs">
          <Cloud size={18} />
          {cloud}%
        </span>
      </div>
    </main>
  )
}