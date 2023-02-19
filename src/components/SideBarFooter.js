import React from "react";
import HeaderPic from "../icons/headerPic.png"
import { faInstagramSquare, faTelegram, faVk} from "@fortawesome/free-brands-svg-icons";
import IconButton from '@mui/material/IconButton';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function SideBarFooter(){
    return(
        <div>
            <div style={{height:"12vh", display:"flex", width:"100%", alignItems:"center"}}>
                <div style={{width:"auto", marginLeft:"auto", marginRight:"auto", display:"flex", alignItems:"center"}}>
                    <IconButton aria-label="VKontakte" color="primary">
                        <FontAwesomeIcon icon={faVk}
                            style={{fontSize:"200%"}}
                        />
                    </IconButton>
                    <IconButton aria-label="Telegram" color="primary" style={{marginLeft:"0%", marginRight:"0%"}}>
                        <FontAwesomeIcon icon={faTelegram}
                            style={{fontSize:"200%"}}
                        />
                    </IconButton>
                    <IconButton aria-label="Instagram" color="primary">
                        <FontAwesomeIcon icon={faInstagramSquare}
                            style={{fontSize:"200%"}}
                        />
                    </IconButton>
                </div>
            </div>
            <div><img src={HeaderPic}/></div>
        </div>
    )
}