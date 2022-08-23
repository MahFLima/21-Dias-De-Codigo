import { useState } from "react";
import { Button } from "./Button";

type Operator = "/" | "*" | "+" | "-" | ""

export function Calculadora(){
  const [input, setInput] = useState("")
  const [oldNum, setOldNum] = useState(0)
  const [newNum, setNewNum] = useState(0)
  const [operator, setOperator] = useState<Operator>("")
  const [result, setResult] = useState(0)

  function handleNumber(item: string){
    setInput(input + item)
  }

  function operatorHandler(item: Operator){
    setOperator(item)
    setOldNum(parseFloat(input))
    setInput("")
  }


  function handleResult(){
    const number = parseFloat(input)
    let result = 0
    switch(operator){
      case "*":
        setNewNum(number)
        result = oldNum * number
        setInput(result.toString())
        break;
      case "+":
        setNewNum(number)
        result = oldNum + number
        setInput(result.toString())
        break;
      case "/":
        setNewNum(number)
        result = oldNum / number
        setInput(result.toString())
        break;
      case "-":
        setNewNum(number)
        result = oldNum - number
        setInput(result.toString())
        break;
    }
  }

  function handleClear(){
    setResult(0)
    setInput("")
    setNewNum(0)
    setOldNum(0)
    setOperator("")
  }

  return(
    <div className="flex flex-col bg-gray-800 p-8 max-w-[400px] w-full rounded-lg">
      
      <div className="w-full py-6 ">
        <input type="text" className="bg-gray-800 text-gray-200 border border-gray-200 text-5xl font-medium p-4 text-end w-full" value={input} onChange={(event) => setInput(event.target.value)}/>
      </div>
      <div className="grid grid-cols-4 gap-5">
        <Button style="rounded-full bg-gray-200 text-black" onClick={handleClear}>AC</Button>
        <Button style="rounded-full bg-gray-200 text-black">+/-</Button>
        <Button style="rounded-full bg-gray-200 text-black">%</Button>
        <Button style="rounded-full bg-yellow-500" onClick={() => {operatorHandler("/")}}>/</Button>
        <Button style="rounded-full bg-gray-500" onClick={() => {handleNumber("7")}}>7</Button>
        <Button style="rounded-full bg-gray-500" onClick={() => {handleNumber("8")}}>8</Button>
        <Button style="rounded-full bg-gray-500" onClick={() => {handleNumber("9")}}>9</Button>
        <Button style="rounded-full bg-yellow-500" onClick={() => {operatorHandler("*")}}>X</Button>
        <Button style="rounded-full bg-gray-500" onClick={() => {handleNumber("4")}}>4</Button>
        <Button style="rounded-full bg-gray-500" onClick={() => {handleNumber("5")}}>5</Button>
        <Button style="rounded-full bg-gray-500" onClick={() => {handleNumber("6")}}>6</Button>
        <Button style="rounded-full bg-yellow-500" onClick={() => {operatorHandler("-")}}>-</Button>
  
        <Button style="rounded-full bg-gray-500"onClick={() => {handleNumber("1")}}>1</Button>
        <Button style="rounded-full bg-gray-500"onClick={() => {handleNumber("2")}}>2</Button>
        <Button style="rounded-full bg-gray-500"onClick={() => {handleNumber("3")}}>3</Button>
        <Button style="rounded-full bg-yellow-500"onClick={() => {operatorHandler("+")}} >+</Button>

        <Button style="col-span-2 w-full rounded-3xl bg-gray-500" onClick={() => {handleNumber("0")}}>0</Button>
        
        <Button style="rounded-full bg-gray-500" onClick={() => {handleNumber(".")}}>.</Button>
        <Button style="rounded-full bg-yellow-500" onClick={handleResult}>=</Button>
      </div>
    </div>
  )
}