import classNames from "classnames";
import { FunctionComponent } from "react";


type Props = React.HTMLProps<HTMLButtonElement> &{
  style?: string;
}

export const Button: FunctionComponent<Props> = ({style, onClick, children}) => {
  return (
    <button onClick={onClick} className={classNames('w-[62px] h-[62px] text-3xl text-gray-200  font-medium py-1.5 text-center',style)}>
      {children}
    </button>
  );
}