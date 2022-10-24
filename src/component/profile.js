import React from "react";

const Profile =props => {
const {
Picture,
alt,
id
} = props

const hStyle = ({
    title: {
        fontFamily: "Monaco",
        fontWeight: "bold",
        marginTop: "45px",
        fontSize: "25px",
        color: "black",
    },
    pic: {
        maxHeight: "185px",
        borderRadius: "200px",
         margin: "15px"
    }
})

    return(
        <div>
            <h1 style={hStyle.title}></h1>
    <img style={hStyle.pic} alt={alt} src={Picture} id={id}/>
    </div>
    )
}

export default Profile