import React, { useRef, useState } from 'react';
import './App.css'


export default function App() {
  const emoji = ["😃", "😄", "😁", "😆", "😅", "😂", "😇", "🙂", "😉", "😍", "🥰", "😘", "😋", "😜", "🤪", "🤨", "🧐", "🤓", "😎", "🤩", "🥳", "😏", "😒", "😞", "😔", "😟", "😣", "😖", "😫", "😩", "🥺", "😭", "😠", "😡", "🤬", "🤯", "😳", "🥵", "🥶", "😨", "😓", "🤗", "🤔", "🤭", "🤫", "🤥", "😶", "😐", "😬", "🙄", "😯", "😲", "🥱", "😴", "🤤", "😪", "😵", "🤐", "🥴", "🤢", "🤮", "🤧", "😷", "🤒", "🤕", "🤑", "🤠", "😈", "👹", "👺", "🤡", "💩", "👻", "💀", "☠️", "👽", "👾", "🤖", "🎃", "😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾"];


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


