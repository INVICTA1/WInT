import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGear, faCircleXmark, faCircleCheck} from "@fortawesome/free-solid-svg-icons";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PaidIcon from '@mui/icons-material/Paid';
import RecordVoiceOverOutlinedIcon from '@mui/icons-material/RecordVoiceOverOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import Paper from "@mui/material/Paper"
import EditRequest from "./EditRequest";

function statusCheck ({item}) {
  if(item.status === "Активна"){
    return faGear
  }
  else if(item.status === "Завершена"){
    return faCircleCheck
  }
  else return faCircleXmark
}

export default function WorkRequest({item}) {
  
  return (
    <Paper style={{"margin-top":"10px","margin-left":"60px", height:"auto", width:"110%", "border-radius":"20px", display:"flex", padding:"4px", backgroundColor:"#f7f7f7"}}>
      <div style={{ width:"40%", "margin-left":"60px"}}>
        <div style={{display:"flex"}}>
            <tm style={{fontWeight:"bolder"}}>{item.theme}</tm>
            <i style={{marginLeft:"4px"}}><FontAwesomeIcon icon={statusCheck({item})}/></i>
        </div>
        <div  style={{display:"flex"}}>
            <i><LocationOnIcon/></i>
            <tm>{item.location}</tm>
        </div>
        <div style={{display:"flex"}}>
            <tm>Создана </tm>
            <tm>{item.createdate}</tm>
        </div>
        {item.status !=="Активна" && <div style={{display:"flex"}}>
          <tm>{item.status}</tm>
          <tm>{item.stopdate}</tm>
        </div>}
      </div>
      {item.status ==="Активна" && <div style={{display:"flex", alignItems:"center",marginLeft:"auto", marginRight:"auto", width:"20%"}}>
        <tm>Начало {item.wstartdate} в {item.wstarttime}</tm>
      </div>}
      <div style={{ width:"15%",marginLeft:"auto", marginRight:"60px", display:"flex", alignItems:"center"}}>
        <uy style={{ width:"auto"}}>
          {item.status === "Активна"? <button onClick={()=>{window.location.href = "/editrequest"}}> Редактировать</button> : <div style={{ display:"flex"}}>
              <i><PaidIcon/></i>
              <tm>{item.payment}</tm>
          </div>}
          <div style={{ display:"flex"}}>
              <i><PeopleAltOutlinedIcon/></i>
              <tm>{item.peopneed}</tm>
          </div>
          <div style={{ display:"flex"}}>
              <i><RecordVoiceOverOutlinedIcon/></i>
              <tm>{item.peopagreed}</tm>
          </div>
          </uy>
      </div>
    </Paper>
  );
};