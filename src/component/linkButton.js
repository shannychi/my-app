import React from "react";
import{Button} from `reactstrap`

const linkButton = props => {
  const{
name,
title,
link
  } = props

    return(
   
        <div>
            <h3>{title}</h3>
            <Button color="danger" outline>{link}</Button>
        </div>
    )
}

export default linkButton