import React from "react";
import { useState } from "react";


const Type = () => {
    const [text, setText] = useState("")

    function print (event){
        setText(event.target.value)
    }


    return(
        <div>
            <form>
                <input type="text" placeholder="Type anything..." 
                   onChange={print}
                />
            </form>
            <p>Hello {text}!</p>
        </div>
    )
}

export default Type;