import React, {useState} from "react";
import axios from 'axios'

export const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function UserProvider(props){
    const initState = {
        user: JSON.parse(localStorage.getItem('user')) || {},
        token:localStorage.getItem("token") || "",
        todos: []
    }

const [userState, setUserState]= useState(initState)

function signup(credentials){
    axios.post("/auth/signup", credentials)
    .then(res => {
        const {user, token} = res.data
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))
        setUserState(prevUserState => ({
            ...prevUserState,
            user,
            token
        }))
    })
    .catch(err => console.log(err.response.data.errMsg))
}

function login(credentials){
    axios.post("/auth/login", credentials)
    .then( res => {
        const {user, token} = res.data
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))
        getUserComments()
        setUserState(prevUserState => ({
            ...prevUserState,
            user,
            token
        }))
    })
    .catch(err => console.log(err.response.data.errMsg))
}

function logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setUserState({
        user: {},
        token: "",
        todos: []
    })
}

function getUserComments(){
    userAxios.get("/api/comments/user")
    .then(res => {
        setUserState(prevState => ({
            ...prevState,
            comments: res.data
        }))
    })
    .catch(err => console.log(err.response.data.errMsg))
}

function addComment(newComment){
    userAxios.post("/api/comments", newComment)
    .then(res => {
        setUserState(prevState => ({
            ...prevState,
            comments: [...prevState.comments, res.data]
        }))
    })
    .catch(err => console.log(err.response.errMsg))
}

return(
    <UserContext.Provider
    value={{
        ...userState,
        signup,
        login,
        logout,
        addComment

    }}>
        { props.children}
    </UserContext.Provider>
)
}
