type Props =  React.HTMLProps<HTMLButtonElement> &{
  name: string;
  srcImg: string;
}

export function CardUser({name, srcImg, onClick}: Props){
  return(
    <button onClick={onClick} className="flex flex-col gap-5 text-center items-center w-48 h-48 text-2xl text-gray-500 transition hover:translate-y-1 duration-300">
      <img className="w-full h-full" src={srcImg}/>
      {name}
    </button>
  )
}