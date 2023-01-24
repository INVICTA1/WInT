import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HouseIcon from '@mui/icons-material/House';
import MonitorIcon from '@mui/icons-material/Monitor';
import SideBar from "./SideBar"

export default function Header(){
    return(
        <div style={{width:"100%", display:"flex", alignItems:"center", height:"10vh", backgroundColor:"#49df85"}}>
            <SideBar/>
            <HouseIcon
                title="Домой"
                style={{width:"auto",height:"100%","padding":"15px"}}
                onClick={() => {window.location.href = "/"}}
            />
            <div style={{fontWeight:"bolder",fontSize:"40px", marginLeft:"auto", marginRight:"auto", paddingLeft:"200px"}}>
                WORK IN TOUCH
            </div>
            <div style={{width:"auto", height:"100%",display:"flex", alignItems:"center",marginLeft:"auto"}}>
                <MonitorIcon
                    title="На главную"
                    style={{width:"auto",height:"100%","padding":"15px"}}
                    onClick={() => {window.location.href = "/main"}}
                />
                <AccountCircleIcon
                    title="Профиль"
                    style={{width:"auto",height:"100%","padding":"15px"}}
                    onClick={() => {window.location.href = "/profile"}}
                />
            </div>
        </div>
    )
}