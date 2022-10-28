import React from "react";

const Dashboard = () =>{
    const getName = localStorage.getItem("name");
    return(
        <>
        <div className="container">
        <div className="share">
        <span class="material-symbols-outlined">
edit
</span>
                    </div>
            <div className="content">
            <img src="ninja.PNG" alt="profile"/>
            <h1>{getName}</h1>
            <p>Rockstar</p>
            </div>
            <div className="dis2">
            <span class="material-symbols-outlined">
                            language
                        </span>
                        <img src="linkedin.png" alt="linkedin" width={20} height={20} className="icon"/>
                        <img src="twitter.png" alt="twitter" width={20} height={20} className="icon"/>
            </div>
            <div className="dis2">
            <img src="facebook.png" alt="facebook" width={20} height={20} className="icon"/>
                        <img src="instagram.png" alt="instagram" width={20} height={20} className="icon"/>
                        <img src="youtube.png" alt="youtube" width={20} height={20} className="icon" />
            </div>
        </div>
        </>
    )
}
export default Dashboard