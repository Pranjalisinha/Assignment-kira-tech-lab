import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Details = () => {
    const Navigate = useNavigate();
    const getNumber = localStorage.getItem("number");
    const getName = localStorage.getItem("name");
    const [email, setEmail] = useState({ "email": "" });
    const [website, setWebsite] = useState({ "website": "" });
    const [linked, setLinkedin] = useState({ "linkedin": "" });
    const [twitter, setTwitter] = useState({ "twitter": "" });
    const [facebook, setFacebook] = useState({ "facebook": "" });
    const [insta, setInsta] = useState({ "insta": "" });
    const [youtube, setYoutube] = useState({ "youtube": "" });
    const saveUrl = (e) =>{
        e.preventDefault()
        if(email === ""){
            alert("Eneter Email")
        } else {
            localStorage.setItem("email", email)
        }
        if(website === ""){
            alert("Enter Website")
        } else {
            localStorage.setItem("website", website) 
        }
        if(linked === ""){
            alert("Enter LinkedIn url")
        } else {
            localStorage.setItem("linked", linked) 
        }
        if(twitter === ""){
            alert("Enter Twitter url")
        } else {
            localStorage.setItem("twitter", twitter) 
        }
        if(facebook === ""){
            alert("Enter Facebook url")
        } else {
            localStorage.setItem("facebook", facebook) 
        }
        if(insta === ""){
            alert("Enter Instagram url")
        } else {
            localStorage.setItem("insta", insta) 
        }
        if(youtube === ""){
            alert("Enter youtube url")
        } else {
            localStorage.setItem("youtube", youtube) 
        }
        Navigate("/Dashboard")

    }
    const cancle = (e) => {
        e.preventDefault();
        localStorage.setItem("website", "")
        localStorage.setItem("linked", "")
        localStorage.setItem("twitter", "")
        localStorage.setItem("facebook", "")
        localStorage.setItem("insta", "")
        localStorage.setItem("youtube", "")
    }
   
    return (
        <>

            <div className="container">
                <div className="share">
                    <span class="material-symbols-outlined">
                        share
                    </span>
                </div>
                <div className="content">
                    <div className="upImage">
                        <span class="material-symbols-outlined">
                            file_upload
                        </span>
                        <h4>Upload</h4>
                    </div>
                    <h1>{getName}</h1>
                    <p>Description</p>
                    <div className="dis">
                        <span class="material-symbols-outlined">
                            call
                        </span>
                        <p className="getN">{getNumber}</p>
                    </div>
                    <div className="dis">
                        <span class="material-symbols-outlined">
                            mail
                        </span>
                        <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
                    </div>
                    <div className="dis">
                        <span class="material-symbols-outlined">
                            language
                        </span>
                        <input type="email" onChange={(e) => { setWebsite(e.target.value) }} placeholder="Website" className="data" />
                    </div>
                    <div className="dis">
                        <span className="logo">
                            <img src="linkedin.png" alt="linkedin" width={20} height={20} />
                        </span>
                        <input type="email" onChange={(e) => { setLinkedin(e.target.value) }} placeholder="Link Profile" className="data" />
                    </div>
                    <div className="dis">
                        <span className="logo">
                            <img src="twitter.png" alt="linkedin" width={20} height={20} />
                        </span>
                        <input type="email" onChange={(e) => { setTwitter(e.target.value) }} placeholder="Link Profile" className="data" />
                    </div>
                    <div className="dis">
                        <span className="logo">
                            <img src="facebook.png" alt="Facebook" width={20} height={20} />
                        </span>
                        <input type="email" onChange={(e) => { setFacebook(e.target.value) }} placeholder="Link Profile" className="data" />
                    </div>
                    <div className="dis">
                        <span className="logo">
                            <img src="instagram.png" alt="Insta" width={20} height={20} />
                        </span>
                        <input type="email" onChange={(e) => { setInsta(e.target.value) }} placeholder="Link Profile" className="data" />
                    </div>
                    <div className="dis">
                        <span className="logo">
                            <img src="youtube.png" alt="Youtube" width={20} height={20} />
                        </span>
                        <input type="email" onChange={(e) => { setYoutube(e.target.value) }} placeholder="Link Profile" className="data" />
                    </div>
                    <div className="btn_flx">
                    <button className="btn" onClick={(e)=>{saveUrl(e)}}> Save </button>
                    <button className="btn2" onClick={(e) => {cancle(e)}}> Cancle </button>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Details;
