import { HashLink } from "react-router-hash-link";

interface Props {
  link: string,
  title: string,
  color: string
}

export default function IndexButton({ link, title, color }: Props) {
  let style; 
  if (color === "blue") {
    style = "text-white grid place-items-start w-30 py-2 px-4 mb-8 transition ease-in-out delay-100 bg-blue1 hover:bg-blue2 hover:text-white";
  } else {
    style = "text-black flex items-center justify-center w-48 h-12 py-8 px-4 transition ease-in-out delay-100 bg-orange1 hover:bg-orange2 hover:text-black";
  }

  return (
    <button className={style}>
      <HashLink smooth to={link}>
        {title}
      </HashLink>
    </button>
  );
}

