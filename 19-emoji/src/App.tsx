import React, { useRef, useState } from 'react';
import './App.css'


export default function App() {
  const emoji = ["๐", "๐", "๐", "๐", "๐", "๐", "๐", "๐", "๐", "๐", "๐ฅฐ", "๐", "๐", "๐", "๐คช", "๐คจ", "๐ง", "๐ค", "๐", "๐คฉ", "๐ฅณ", "๐", "๐", "๐", "๐", "๐", "๐ฃ", "๐", "๐ซ", "๐ฉ", "๐ฅบ", "๐ญ", "๐ ", "๐ก", "๐คฌ", "๐คฏ", "๐ณ", "๐ฅต", "๐ฅถ", "๐จ", "๐", "๐ค", "๐ค", "๐คญ", "๐คซ", "๐คฅ", "๐ถ", "๐", "๐ฌ", "๐", "๐ฏ", "๐ฒ", "๐ฅฑ", "๐ด", "๐คค", "๐ช", "๐ต", "๐ค", "๐ฅด", "๐คข", "๐คฎ", "๐คง", "๐ท", "๐ค", "๐ค", "๐ค", "๐ค ", "๐", "๐น", "๐บ", "๐คก", "๐ฉ", "๐ป", "๐", "โ ๏ธ", "๐ฝ", "๐พ", "๐ค", "๐", "๐บ", "๐ธ", "๐น", "๐ป", "๐ผ", "๐ฝ", "๐", "๐ฟ", "๐พ"];


  function handleCopy(item: string){
    navigator.clipboard.writeText(item);
    alert(`copy: ${item}`);
  }

  return (
    <div className="container">
      <header>
        <div className="point"></div>
        <div className="point"></div>
        <div className="point"></div>
      </header>
      <div className="content">
        {emoji.map((item,index) => (<button onClick={() => {handleCopy(item)}} key={index}>{item}</button>))}
      </div>
    </div>
  )
}


