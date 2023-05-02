import React, { useContext } from "react";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import { UserContext } from "../context/UserProvider"

export default function Profile(){
    const{
        user:{
            username
        },
        addComment,
        comments
    }= useContext(UserContext)

    return(
        <div className="profile">
            <h1>Welcome {username}</h1>
            <h3>Add A Comment</h3>
            <CommentForm addComment={addComment}/>
            <h3>Your Comments</h3>
            <CommentList comments={comments}/>
        </div>
    )
}