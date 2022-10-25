import React from "react";

const Profile =props => {
const {
Picture,
alt,
id
} = props

const hStyle = ({
    pic: {
        maxHeight: "185px",
        borderRadius: "200px",
         margin: "15px"
    }
})

    return(
        <div>
    <img style={hStyle.pic} alt={alt} src={Picture} id={id}/>
    </div>
    )
}

export default Profile