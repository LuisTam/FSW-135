import React from 'react'

export default function AuthForm(props){
    const{
        handleChange,
        handleSubmit,
        btnText,
        errMsg,
        inputs: {
            username, 
            password
        }
    } = props

    return (
        <form className="login-signup" onSubmit={handleSubmit}>
            <input
               type='text'
               value={username}
               name={"username"}
               onChange={handleChange}
               placeholder='Username'
            /><br />
            <input
               type= 'text'
               value={password}
               name={"password"}
               onChange={handleChange} 
               placeholder="Password"
            /> <br />
            <button>{ btnText }</button>
            <p style={{color: "red", textAlign: "center"}}>{ errMsg }</p>   
        </form>
    )
}