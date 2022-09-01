
type Props = {
  title: string;
  srcImg: string;
}

export function CardMovie({title, srcImg}: Props) {
  return(
    <div className="w-80 transition hover:translate-y-1 duration-300 cursor-pointer flex flex-col gap-4">
      <img  src={srcImg}/>
      <strong>{title}</strong>
    </div>
  )
}