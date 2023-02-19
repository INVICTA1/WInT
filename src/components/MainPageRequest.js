import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCalendarDays, faClock, faLocationDot, faUserGroup} from "@fortawesome/free-solid-svg-icons";
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
import ProfilePhoto from "../icons/ProfilePhoto.png"
import { Button, Divider } from "@mui/material";

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
    <div style={{height:"auto", width:"100%", display:"flex", marginLeft:"10px", marginRight:"200px"}}>
      <div style={{ width:"100%", display:"block",height:"30%"}}>
        <div style={{display:"flex", alignItems:"center", marginRight:"20px", height:"100%", width:"100%"}}>
            <tm style={{fontWeight:"bolder", fontSize:"20px", width:"auto", height:"100%"}}>{item.theme}
              <Divider color="#4bde85"/>
            </tm>
            <Button sx={{textTransform:"none", height:"50%", width:"22%", marginTop:"5px",marginLeft:"auto", marginRight:"5%"}} title="Подробнее" style={{ border:"2px solid #4bde85", borderRadius:"4px", display:"flex", alignItems:"center", padding:"3px", fontSize:"100%",fontWeight:"bold", backgroundColor:"white", color:"#4bde85"}} 
              onClick = {handleMoreOpen}>
              Подробнее
            </Button>
        </div>
        <div style={{display:"flex", alignItems:"center", width:"auto", height:"auto"}}>
          <div style={{display:"block", alignItems:"center"}}>
            <div style={{display:"flex", alignItems:"center", marginTop:"0%", fontSize:"16px"}}>
                <FontAwesomeIcon icon={faLocationDot} style={{color:"#4bde85"}}/>
                <div style={{marginLeft:"5px", marginTop:"2px"}}>{item.location}</div>
            </div>
            <div style={{display:"flex", alignItems:"center", marginTop:".1%"}}>
              <div style={{display:"flex", alignItems:"center", fontSize:"16px"}}>
                <FontAwesomeIcon icon={faCalendarDays} style={{color:"#4bde85"}}/>
                <div style={{marginLeft:"5px", marginTop:"2px"}}>{item.wstartdate}</div>
              </div>
              <div style={{display:"flex", alignItems:"center", fontSize:"16px", marginLeft:"8px", marginRight:"8px"}}>
                <FontAwesomeIcon icon={faClock} style={{color:"#4bde85"}}/>
                <div style={{marginLeft:"5px", marginTop:"2px"}}>{item.wstarttime}</div>
              </div>
              <div style={{display:"flex", alignItems:"center", fontSize:"16px"}}>
                <FontAwesomeIcon icon={faUserGroup} style={{color:"#4bde85"}}/>
                <div style={{marginLeft:"5px", marginTop:"2px"}}>{item.peopneed}</div>
              </div>
            </div>
          </div>
          <div style={{height:"120%", width:"35%", marginLeft:"auto", marginRight:"5%", display:"block", marginTop:"8px"}}>
            <Button sx={{textTransform:"none", height:"35px", width:"100%"}} title="Откликнуться" style={{ borderRadius:"4px", display:"flex", alignItems:"center",marginBottom:"4px", padding:"3px", fontSize:"100%",fontWeight:"bold", backgroundColor:"#4bde85", color:"white"}} >
              Откликнуться
            </Button>
            <div style={{display:"flex", alignItems:"center"}}>
              <div style={{marginLeft:"auto", width:"auto", color:"#545454"}}>Обновлено 11.10.2022</div>
            </div>
          </div>
        </div>
      </div>
      
      <div style={{ width:"auto",marginLeft:"auto",marginRight:"auto", display:"grid"}}>
        <div style={{display:"flex", alignItems:"center"}}>
          
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