import { FunctionComponent } from "react"

type Props = React.HTMLProps<HTMLInputElement> & {
  quest: string,
  option1: string,
  option2: string,
  option3: string,
  option4: string,
  qOpt1: string,
  qOpt2: string,
  qOpt3: string,
  qOpt4: string,
  id: string,
}

export const Quest: FunctionComponent<Props> = ({ quest, option1, option2, option3, option4, qOpt1, qOpt2, qOpt3, qOpt4, id, onChange }) => {
  return (
    <div className="flex flex-col relative">
      <header className="w-full bg-yellow-500 text-white block p-20">
        <p className="text-3xl">
          {quest}
        </p>
      </header>
      <div className="w-full flex flex-col justify-center flex-wrap mt-10 px-6 gap-4">

        <button className="flex gap-2 items-center">
          <input type="radio" name={id} id={qOpt1} onChange={onChange} />
          <label className=" text-black text-lg cursor-pointer hover:opacity-70 opt1" htmlFor={qOpt1}>{option1}</label>
        </button>

        <button className="flex gap-2 items-center">
          <input type="radio" name={id} id={qOpt2} onChange={onChange} />
          <label className=" text-black text-lg cursor-pointer hover:opacity-70 opt2" htmlFor={qOpt2}>{option2}</label>
        </button>

        <button className="flex gap-2 items-center">
          <input type="radio" name={id} id={qOpt3} onChange={onChange} />
          <label className=" text-black text-lg cursor-pointer hover:opacity-70 opt3" htmlFor={qOpt3}>{option3}</label>
        </button>

        <button className="flex gap-2 items-center">
          <input type="radio" name={id} id={qOpt4} onChange={onChange}/>
          <label className="text-black text-lg cursor-pointer hover:opacity-70 opt4" htmlFor={qOpt4}>{option4}</label>
        </button>

      </div>
    </div>
  )
}