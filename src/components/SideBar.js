import React from "react";
import Drawer from "@mui/material/Drawer";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import data from "./data.json";


const drawerWidth = Math.floor(document.documentElement.clientWidth / 4.5);

export default function SideBar() {
  const [openTree, setOpenTree] = React.useState(false);
  const handleTreeOpen = () => {
    setOpenTree(true);
  };

  const handleTreeClose = () => {
    setOpenTree(false);
  };
  return (
    <div>
      <MenuRoundedIcon style={{height:"50px", width:"auto", paddingLeft:"10px"}} onClick={handleTreeOpen}/>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box"
          }
        }}
        variant="temporary"
        anchor="left"
        open={openTree}
      >
        <div style={{width:"100%", display: "flex"}}>
            <ChevronLeftRoundedIcon onClick={handleTreeClose} style={{height:"50px", width:"auto", marginLeft: "auto", padding:"10px"}}/>
        </div>  
        <h style={{width:"100%", display: "flex"}} onClick={() => {window.location.href = "/profile"}}>
          <AccountCircleIcon
            style={{width:"40%",height:"auto","padding-left":"15px"}}
          />
          
          <tm style={{width:"60%","padding-top":"22px",padding:"10px",height:"40%"}}>
            <div style={{width:"100%",height:"auto"}}>{data.userData.fname}</div>
            <div style={{width:"100%",height:"auto"}}>{data.userData.lname}</div>
            <h style={{width:"100%", display: "flex"}}>
              <StarBorderIcon
                style={{width:"20%",height:"auto"}}
              />
              <div style={{width:"100%",height:"auto",paddingLeft:"4px","margin-top":"0.4em"}}>{data.userData.rating}</div>
            </h>
          </tm>
        </h>
        <div>
          <div style={{width:"94%",height:"20%",paddingLeft:"15px","padding-top":"6.25px"}} onClick={() => {window.location.href = "/myrequests"}}>
            Мои заявки
          </div>
          <div style={{width:"94%",height:"20%",paddingLeft:"15px","padding-top":"6.25px"}} onClick={() => {window.location.href = "/myworks"}}>
            Мои подработки
          </div>
          <div style={{width:"94%",height:"20%",paddingLeft:"15px","padding-top":"6.25px"}} onClick={() => {window.location.href = "/cards"}}>
            Карточки
          </div>
          <div style={{width:"94%",height:"20%",paddingLeft:"15px","padding-top":"6.25px"}}>
            Подсказки
          </div>
          <div style={{width:"94%",height:"20%",paddingLeft:"15px","padding-top":"6.25px"}}>
            Поддержка
          </div>
        </div>
        <form method="LINK" action="/contactus" style={{marginTop:"auto"}}>
          <input type="submit" value="Contact Us"/>
        </form>
      </Drawer>
      </div>
  );
};