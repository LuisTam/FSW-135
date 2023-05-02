import React, {useState} from "react";
const initInputs = {
    title: "",
    description: ""
}

export default function CommentForm(props){
    const [inputs, setInputs] = useState(initInputs)
    const {addComment} = props
    
    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()
        addComment(inputs)
        setInputs(initInputs)
    }

    const {title, description} = inputs
    return(
        <form onSubmit={handleSubmit}>
            <input
                type= "text"
                name="title"
                value={title}
                onChange={handleChange}
                placeholder="Title"
            />
            <input
                typeof="text"
                name="description"
                value={description}
                placeholder="Description"
            />
            <button>Add Comment</button>
        </form>
    )
}

