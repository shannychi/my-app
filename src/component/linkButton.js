import React from "react";
import{ Button } from "reactstrap";

const LinkButton = props => {
  const{
name,
title,
text,
link,
id,
ref_id
  } = props
    const Hstyle = ({
      ymargin: {
        marginBottom: "20px"
      },

      btnText: {
        fontFamily: "Monaco",
        margin: "10px",
        fontSize:"15px",
        color: "black",
      },

      btn: {
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 15px 20px 0 rbga(0, 0, 0.1)",
        fontFamily: "Monaco",
        width:"15rem"
      }
    })


    return(
   
        <div style={Hstyle.ymargin}>
            <h3 style={Hstyle.btnText}>{title}</h3>
            <p  style={Hstyle.btnText}>{text}</p>
            <Button style={Hstyle.btn} color="danger" class="btn btn-danger btn-lg btn-block" href={link} id={id} ref_id={ref_id} target="blank">{name}</Button>
        </div>
    )
}

export default LinkButton