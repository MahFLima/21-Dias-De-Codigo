import { Quest } from './components/Quest'
import './index.css'
import data from './data'

function App() {

  return (
    <>
      <header className="w-full border-b p-6">
        <h1 className="font-medium text-3xl">Quiz</h1>
      </header>
      <div className="w-full flex flex-col my-16 gap-10">
        {data.map((item, index) => {
          return(
            <Quest 
              key={index} 
              id={item.id}
              quest={item.quest} 
              option1={item.option1.title}
              option2={item.option2.title}
              option3={item.option3.title}
              option4={item.option4.title}
              qOpt1={item.option1.idOpt}
              qOpt2={item.option2.idOpt}
              qOpt3={item.option3.idOpt}
              qOpt4={item.option4.idOpt}
              onChange={() => {console.log(item.option1)}}
            />
          )
        })}
        <button className="bg-green-500 text-white px-6 py-3 hover:opacity-70 w-52 ml-14">Finish</button>
      </div>
    </>

  )
}

export default App
