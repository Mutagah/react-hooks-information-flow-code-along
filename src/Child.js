 import React from "react";
 import { getRandomColor } from "./randomColorGenerator.js";

function Child({color,onChangeColor}){
  const newColor = getRandomColor()
  console.log(onChangeColor)
return(
  <div className="child" 
  onClick={()=> onChangeColor(newColor)} 
  style={{backgroundColor:color}}>
  </div>
)
}
export default Child;
