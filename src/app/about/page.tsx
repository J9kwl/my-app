import Link from "next/link";
import cssStyle from "./about.module.css"

console.log(cssStyle, "CSS-Style");

function Aboutpage () {
  return <h1 className={cssStyle.green}> This  is my about  page</h1>;
}

export default Aboutpage;