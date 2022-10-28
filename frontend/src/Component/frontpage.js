import React from "react";
import {Link} from "react-router-dom";

const Frontpage = () =>{

    return(
        <>
        <div className="container">
            <div className="content">
                <img src="ninja.PNG" alt="Ninja"/>
                <h1>Tru.Ninja</h1>
                <Link to="Signup"><button className="btn">Login / SignUp</button></Link>
            </div>
        </div>
        </>
    )

}
export default Frontpage