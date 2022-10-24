import React from "react";

const textbanner = props => {
  const{
  title,
  text
  } = props

    return(

 <div>
    <h1>{title}</h1>
    <p>{text}</p>
 </div>

    )
}

export default textbanner