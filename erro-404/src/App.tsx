import './index.css'
import erroImg from './assets/erro.svg'

function App() {

  return (
    <div className="flex justify-between items-center h-full w-full px-10">
      <div className="flex flex-col items-start">
        <strong className="font-sans font-bold text-6xl ">Ooops...</strong>
        <p className="font-sans text-[56px] mb-8 text-start">Page Not Found</p>
        <p className="font-serif text-lg font-semibold text-gray-700">Sorry. the content you’re looking for doesn’t exist.<br/>
          Either it was removed, or you mistyped the link. </p>
        <button className="mt-24 w-60 font-sans text-white font-semibold text-2xl bg-purple-400 text-center py-4">Go Back</button>
      </div>
      <img src={erroImg} alt="imagem" className="w-[500px] h-[500px]" />
      <ul>
        <li className="font-mono text-[140px] text-white">4</li>
        <li className="font-mono text-[140px] text-white">0</li>
        <li className="font-mono text-[140px] text-white">4</li>
      </ul>
    </div>
  )
}

export default App
