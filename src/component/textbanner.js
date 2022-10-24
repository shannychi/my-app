import React from "react";

const Textbanner = props => {
  const{
  title,
  text
  } = props

  const hStyle =({
    title:{
        fontfamily: "Monaco",
        fontWeight: "bold",
        margin: "20px",
        fontSize: "19px",
        color: "black",

    },
     
    headline: {
        fontFamily: "Monaco",
        margin: "20px",
        fontSize: "15px",
        color: "black"
    },
    box: {
        marginBottom: "35px",
    }
  })

    return(

 <div  style={hStyle.box}>
    <h1 style={hStyle.title}>{title}</h1>
    <p style={hStyle.headline}>{text}</p>
 </div>

    )
}

export default Textbanner