import React from "react";
import HeaderPic from "../icons/headerPic.png"
import headerName from "../icons/headerName.png"
import "./index.css";
import ProfileIcon from "../icons/profileIcon.jpeg"

export default function LoggedHeader(){
    return(
        <div className="lheader">
            <div style={{position:"absolute", height:"15vh", display:"flex", width:"100%", alignItems:"center"}}>
                <div>
                  <img src={headerName} style={{height:"auto", width:"30%", marginLeft:"5%"}} onClick={() => {window.location.href = "/home"}}/>
                </div>
                <img src={ProfileIcon}
                    style={{width:"80px",height:"auto", borderRadius:"50%", marginRight:"5%", border:"3px solid #4bde85"}}
                    onClick={() => {window.location.href = "/profile"}}
                />
            </div>
            <div><img src={HeaderPic}/></div>
        </div>
    )
}