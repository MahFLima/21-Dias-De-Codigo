import './index.css'
import { Medieval } from './components/Medieval'
import { Castle } from './components/Castle'
import { useState } from 'react'
import classNames from "classnames"

function App() {
  const [isActive, setIsActive] = useState(false)

  function handleActive() {
    isActive ? setIsActive(false) : setIsActive(true)
  }

  return (
    <main className={classNames("w-full h-screen flex justify-center items-center transition-colors duration-1000", { "bg-red-300": isActive }, { "bg-orange-200": !isActive })}>
      <button onClick={handleActive} className="flex justify-between items-center relative bg-gray-400 p-9 rounded-[100px] w-96">
        <Medieval />
        <Castle />
        <div className={classNames("absolute w-32 h-32 rounded-full transition-colors duration-1000", { "right-6": isActive }, { "bg-red-600": isActive }, { "left-6": !isActive }, { "bg-orange-400": !isActive })}></div>
      </button>
    </main>
  )
}

export default App
