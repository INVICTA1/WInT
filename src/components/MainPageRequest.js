import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGear} from "@fortawesome/free-solid-svg-icons";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import Paper from "@mui/material/Paper"
import HowToRegRoundedIcon from '@mui/icons-material/HowToRegRounded';
import Drawer from "@mui/material/Drawer";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import ScheduleRoundedIcon from '@mui/icons-material/ScheduleRounded';
import PaidRoundedIcon from '@mui/icons-material/PaidRounded';
import "./index.css";
import ProfilePhoto from "./ProfilePhoto.png"

export default function WorkItem({item}) {
  const [openMore, setOpenMore] = React.useState(false);
  const handleMoreOpen = () => {
    setOpenMore(true);
  };

  const handleMoreClose = () => {
    setOpenMore(false);
  };

  function MoreAbout({aData}){
    return(
      <div>
        <div style={{width:"100%", height:"70vh"}} onClick={handleMoreClose}></div>
        <div style={{width:"100%", height:"30vh", display: "flex", background:"#f4f4f4"}}>
          <div style={{width:"32%", display: "grid",paddingLeft:"20px"}}>
            <div style={{width:"100%", fontSize:"25px", fontWeight:"bolder", paddingTop:"10px"}}>{aData.theme}</div>
            <div style={{width:"100%", fontSize:"20px", paddingTop:"20px"}}>{aData.description}</div>
            <div style={{width:"100%", display: "flex", fontSize:"25px", paddingTop:"20px", alignItems:"center"}}>
              <LocationOnIcon style={{fontSize:"30px"}}/>
              <div style={{marginLeft:"10px"}}>{aData.location}</div>  
            </div>
          </div>
          <div style={{width:"33%", display: "grid"}}>
            <div style={{width:"100%", display: "flex"}}>
              <div style={{marginLeft:"auto", marginRight:"auto", marginTop:"-40px"}}><img src={ProfilePhoto} style={{height:"160px"}}/></div>
            </div>
            <div style={{width:"100%", display: "flex"}}>
              <div style={{marginLeft:"auto", marginRight:"auto", fontSize:"30px"}}>{aData.customer.name}</div>
            </div>
            <div style={{width:"100%", display: "flex"}}>
              <div style={{marginLeft:"auto", marginRight:"auto", display:"flex"}}>
                <div><StarBorderIcon style={{fontSize:"30px"}}/></div>
                <div style={{fontSize:"22px"}}>{aData.customer.rating}</div>
              </div>
            </div>
          </div>
          <div style={{width:"25%", display:"grid"}}>
            <div style={{display:"flex"}}>
              <div style={{display: "grid"}}>
                <div style={{width:"100%", fontSize:"20px", fontWeight:"bolder", paddingTop:"10px"}}>Начало:</div>
                <div style={{ display:"flex"}}>
                  <CalendarMonthRoundedIcon/>
                  <div style={{marginLeft:"8px"}}>{aData.wstartdate}</div>
                </div>
                <div style={{ display:"flex"}}>
                  <ScheduleRoundedIcon/>
                  <div style={{marginLeft:"8px"}}>{aData.wstarttime}</div>
                </div>
              </div>
              <div style={{display: "grid", marginLeft:"auto",marginRight:"auto"}}>
                <div style={{width:"100%", fontSize:"20px", fontWeight:"bolder", paddingTop:"10px"}}>Оплата:</div>
                <div style={{ display:"flex"}}>
                  <PaidRoundedIcon style={{fontSize:"50px"}}/>
                  <div style={{marginLeft:"8px", fontSize:"25px", marginTop:"5px"}}>7 BYN/час</div>
                </div>
              </div>
            </div>
            <div style={{display:"flex", alignItems:"center"}}>
              <button style={{width:"50%", height:"50%", marginLeft:"auto", marginRight:"auto"}}>Откликнуться</button>
            </div>
          </div>
          <CloseRoundedIcon onClick={handleMoreClose} style={{height:"30px", width:"auto", marginLeft: "auto", padding:"10px"}}/>
        </div>
      </div>
    )
  }

  return (
    <div style={{height:"auto", width:"100%", display:"flex", alignItems:"center"}}>
      <div style={{ width:"50%"}}>
        <div style={{display:"flex"}}>
            <tm style={{fontWeight:"bolder"}}>{item.theme}</tm>
            <i style={{marginLeft:"1%"}}><FontAwesomeIcon icon={faGear}/></i>
        </div>
        <div  style={{display:"flex", alignItems:"center"}}>
            <i><LocationOnIcon/></i>
            <tm>{item.location}</tm>
        </div>
        <div style={{display:"flex"}}>
            <tm>Создана </tm>
            <tm>{item.createdate}</tm>
        </div>
      </div>
      <div style={{display:"flex", alignItems:"center",marginLeft:"auto", marginRight:"auto", width:"20%"}}>
        <tm>Начало {item.wstartdate} в {item.wstarttime}</tm>
      </div>
      <div style={{ width:"15%",marginLeft:"auto",marginRight:"auto", display:"grid"}}>
        <Paper title="Подробнее" style={{width:"auto", borderRadius:"2px", display:"flex", alignItems:"center",marginBottom:"4px", padding:"3px", backgroundColor:"#d9d7d7"}} 
          onClick = {handleMoreOpen}>
          Подробнее
        </Paper>
        <div style={{display:"flex", alignItems:"center"}}>
          <div style={{display:"flex", alignItems:"center"}}>
            <i><PeopleAltOutlinedIcon/></i>
            <tm>{item.peopneed}</tm>
          </div>
          <Paper title="Откликнуться" style={{display:"flex", alignItems:"center", marginLeft:"15%", color:"green", backgroundColor:"#d9d7d7"}}>
            <i><HowToRegRoundedIcon/></i>
          </Paper>
        </div>
      </div>
      <Drawer
        sx={{
          width: "100%",
          height:"100vh",
          flexShrink: 0,
          opacity:5,
          "& .MuiDrawer-paper": {
            width: "100%",
            height:"100vh",
            boxSizing: "border-box",
            boxShadow:"none",
            background: "none"
          }
        }}
        variant="temporary"
        anchor="bottom"
        open={openMore}
      >
        <MoreAbout aData={item}/>
      </Drawer>
    </div>
  );
};