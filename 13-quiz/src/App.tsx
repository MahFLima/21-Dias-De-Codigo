import './index.css'
import data from './data'
import { useState } from 'react'

function App() {
  const [q1Result, setQ1Result] = useState<Boolean>(false)

  function valueResult(value: boolean){
    setQ1Result(value)
  }

  function handleResult(){
    q1Result ? alert("Você acertou, parabéns") : alert("Errrou, mais sorte da próximo")
  }


  return (
    <>
      <header className="w-full border-b p-6">
        <h1 className="font-medium text-3xl">Quiz</h1>
      </header>
      <div className="w-full flex flex-col my-16 gap-10">
        <div className="flex flex-col relative">
          <header className="w-full bg-yellow-500 text-white block p-20">
            <p className="text-3xl">
              {data[0].quest}
            </p>
          </header>
          <div className="w-full flex flex-col justify-center flex-wrap mt-10 px-6 gap-4">

            <div className="flex gap-2 items-center">
              <input type="radio" name="quest1" id="q1Opt1" 
                onChange={() => valueResult(false)} />
              <label 
                className=" text-black text-lg cursor-pointer hover:opacity-70" 
                htmlFor="q1Opt1"
              >
                  {data[0].options[0].title}
              </label>
            </div>

            <div className="flex gap-2 items-center">
              <input type="radio" name="quest1" id="q1Opt2" onChange={() => valueResult(true)} />
              <label 
                className=" text-black text-lg cursor-pointer hover:opacity-70" 
                htmlFor="q1Opt2"
              >
                {data[0].options[1].title}
              </label>
            </div>

            <div className="flex gap-2 items-center">
              <input type="radio" name="quest1" id="q1Opt3" onChange={() => valueResult(false)} />
              <label 
                className=" text-black text-lg cursor-pointer hover:opacity-70" 
                htmlFor="q1Opt3"
              >
                {data[0].options[2].title}
              </label>
            </div>

            <div className="flex gap-2 items-center">
              <input type="radio" name="quest1" id="q1Opt4" onChange={() => valueResult(false)} />
              <label 
                className="text-black text-lg cursor-pointer hover:opacity-70" 
                htmlFor="q1Opt4"
              >
                {data[0].options[3].title}
              </label>
            </div>

          </div>
        </div>
        <button onClick={handleResult} className="bg-green-500 text-white px-6 py-3 hover:opacity-70 w-52 ml-14">Finish</button>
      </div>
    </>

  )
}

export default App
