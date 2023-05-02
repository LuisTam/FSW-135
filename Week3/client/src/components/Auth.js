import React, {useState, useContext} from "react";
import AuthForm from './AuthForm'
import { UserContext } from '../context/UserProvider'

const initInputs = { username: "", password: ""}

export default function Auth(){
    const [inputs, setInputs] = useState(initInputs)
    const [toggle, setToggle] = useState(false)

    const { signup, login } = useContext(UserContext)

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSignup(e){
        e.preventDefault()
        signup(inputs)
    }

    function handleLogin(e){
        e.preventDefault()
        login(inputs)
    }

    return(
        <div className="auth-container">
            <h1>Climate Action</h1>
            { !toggle ?
            <>
            <AuthForm
            handleChange={handleChange}
            handleSumbit={handleSignup}
            inputs={inputs}
            btnText= "Join The Cause"
            />
            <p onClick={() => setToggle(prev => !prev)}>Already Helping The Cause?</p>
            </>
            :
            <>
            <AuthForm
            handleChange={handleChange}
            handleSumbit={handleLogin}
            inputs={inputs}
            btnText="Login"
            />
            <p onClick={() => setToggle(prev => !prev)}>Start Helping</p>
            </>
            }
        </div>
    )


























}