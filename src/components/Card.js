import React from "react";
import Paper from "@mui/material/Paper"
import TaskAltTwoToneIcon from '@mui/icons-material/TaskAltTwoTone';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCcMastercard, faCcVisa} from "@fortawesome/free-brands-svg-icons";

function cardTypeCheck ({item}){
  if(item.type === "master"){
    return faCcMastercard
  }
  else return faCcVisa
  }

export default function MyCards({item}) {
  
  return (
    <Paper style={{width:"300px", height:"180px", borderRadius:"8px", backgroundColor:"#f7f7f7"}}>
      <div style={{display:"flex", alignItems:"center"}}>  
        {item.main && 
          <div style={{display:"flex", alignItems:"center", padding:"4px"}}>
            <TaskAltTwoToneIcon/>
            <tm style={{marginLeft:"4px"}}>Основная</tm>
          </div>}
        <CancelOutlinedIcon style={{marginLeft:"auto", padding:"4px"}}/>
      </div>
      <div style={{height:"81%", display:"grid", alignItems:"end"}}>
        <div>
          <div style={{padding:"8px"}}>{item.number}</div>
          <div style={{padding:"8px", display:"flex"}}>
            <tm>{item.cardholder}</tm>
            <tm style={{ marginLeft:"auto", marginRight:"20%"}}>{item.termdate}</tm>
          </div>
          <div style={{ display:"flex"}}>
            <FontAwesomeIcon icon={cardTypeCheck({item})} style={{width:"35px", height:"auto", marginLeft:"auto", marginRight:"5%", marginBottom:"4px"}}/>
          </div>
        </div>
      </div>
    </Paper>
  );
};