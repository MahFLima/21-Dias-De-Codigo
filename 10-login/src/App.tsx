import './index.css'
import ellipse1 from "./assets/ellipse1.svg"
import ellipse2 from "./assets/ellipse2.svg";
import rocket from "./assets/rocket.svg"
import { Login } from './components/Login';

function App() {

  return (
    <div className="w-full h-screen relative flex justify-center items-center">
      <img src={ellipse2} className="absolute bottom-0 right-10 w-52 h-52 animate-bounce" />
      <img src={ellipse1} className="absolute -top-20 -left-10 w-[500px] h-[500px]"/>
      <img src={rocket} className="hidden mobile:flex absolute top-0 left-0 w-96 h-96"/>
      <Login/>
    </div>
  )
}

export default App
