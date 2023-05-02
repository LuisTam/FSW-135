import React from "react";

export default function Comment(props){
    const {title, description, _id} = props
    return(
        <div className="comment">
             <h1>{ title}</h1>
             <p>{ description}</p>
        </div>
    )
}