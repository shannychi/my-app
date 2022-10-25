import React from "react";

const Slack = props => {
  const{
    name,
  id
  } = props

const myStyle = ({
    name: {
        display: "none",
        opacity: "0",
        PointerEvent: "none",
        visibility: "none",
        zIndex: "-1",
    },
    box: {
        display: "none",
        opacity: "0",
        PointerEvent: "none",
        visibility: "none",
        zIndex: "-1",
    }
})



  return(

    <div style={myStyle.box}>
       <h3 style={myStyle.name} id={id}>{name}</h3>
    </div>
   
       )
   }
   
   export default Slack