import React, { useState} from "react";
import { useNavigate } from "react-router-dom"

const SignUp = () => {
    const Navigate = useNavigate();
    const [number, setNumber] = useState({"number" : ""});
    const [name, setName] = useState({"name": ""})
    const saveNumber = (e) =>{
        console.log(number, name)
        e.preventDefault()
        if(number === "" && name === ""){
            alert("please Enter details")
        } else {
        localStorage.setItem("number", number)
        localStorage.setItem("name", name)
        Navigate("/Details")
        }
        
    }
   
    console.log(number);
    console.log(name);
    return (
        <>
            <div className="container">
                <div className="content">
                    <img src="ninja.PNG" alt="Ninja" />
                    <div className="dis">
                        <span class="material-symbols-outlined">
                            call
                        </span>
                        <input type="text" onChange={(e) => setNumber(e.target.value)} placeholder="9999999999"/>
                        </div>
                        <div className="dis">
                        <span class="material-symbols-outlined">
person
</span><input type="text" onChange={(e) => setName(e.target.value)} placeholder="Your Name"/>
                    </div>
                <button className="btn" onClick={(e) =>{saveNumber(e)}}>Get OTP</button>
                </div>
            </div>
        </>
    )
}
export default SignUp