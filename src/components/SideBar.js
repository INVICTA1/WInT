import React from "react";
import Drawer from "@mui/material/Drawer";
import data from "./data.json";
import ProfileIcon from "../icons/profileIcon.jpeg"
import { faStar, faChevronRight, faChevronLeft, faBars } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { Divider } from "@mui/material";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider  } from '@mui/material/styles';
import "../components/index.css";
import IconButton from '@mui/material/IconButton';
import HeaderPic from "../icons/headerPic.png"
import Telegram from "../icons/sbtelegram.png"
import Instagram from "../icons/instagram.png"
import Vk from "../icons/vk.png"


const drawerWidth = Math.floor(document.documentElement.clientWidth / 4);

export default function SideBar() {
  const [openTree, setOpenTree] = React.useState(false);
  const handleTreeOpen = () => {
    setOpenTree(true);
  };
  const theme = createTheme({
    palette: {
      primary: {
        main: '#4bde85',
      },
      secondary: {
        main: '#4bde85',
      },
    },
  });

  const ptheme = createTheme({
    palette: {
      primary: {
        main: '#ffffff',
      },
      secondary: {
        main: '#ffffff',
      },
    },
  });

  const cttheme = createTheme({
    palette: {
      primary: {
        main: '#868484',
      },
      secondary: {
        main: '#e0e0e0',
      },
    },
  });

  const handleTreeClose = () => {
    setOpenTree(false);
  };

  function Tree({tdata}){
    return(
      <div style={{display:"flex", overflow:"hidden"}}>
        <div style={{width:"40vh", height:"100vh", background:"#ffffff", display: "block", position:"relative"}}>
          <div style={{height:"30%"}}>
          <ThemeProvider theme={cttheme}>
            <div style={{width:"100%", display: "flex", position:"relative"}}>
              <IconButton className="ctbut" style={{height: "50px",width: "50px",top:10, left:260, zIndex:800, position:"absolute"}} onClick={handleTreeClose}>
                <FontAwesomeIcon className={"ctbutchev"} icon={faChevronLeft}/>
              </IconButton>
            </div>
          </ThemeProvider> 
          <ThemeProvider theme={ptheme}>  
            <Button sx={{textTransform:"none"}} style={{width:"100%", display: "grid", marginTop:"8%", color:"black"}} onClick={() => {window.location.href = "/profile"}}>
              <img src={ProfileIcon}
                style={{width:"40%",height:"auto", borderRadius:"50%", marginLeft:"auto", marginRight:"auto", border:"3px solid #4bde85"}}
              />
              <tm style={{marginLeft:"auto", marginRight:"auto",width:"auto", marginTop:"-3%",height:"40%", display:"flex"}}>
                <div style={{fontSize:"160%",width:"100%",height:"auto", marginRight:"5px"}}>{tdata.userData.fname}</div>
                <div style={{fontSize:"160%",width:"100%",height:"auto"}}>{tdata.userData.lname}</div>
              </tm>  
              <div style={{width:"100%", display: "flex", marginLeft:"auto", marginRight:"auto"}}>
                <div style={{width:"auto", display: "flex", marginLeft:"auto", marginRight:"auto",alignItems:"center", marginTop:"1%"}}>
                  <FontAwesomeIcon icon={faStar}
                    style={{fontSize:"120%", color:"#4bde85"}}
                  />
                  <div style={{fontSize:"140%",width:"auto",height:"auto",paddingLeft:"4px"}}>{tdata.userData.rating}</div>
                </div>
              </div>
            </Button>
          </ThemeProvider>
          </div> 
          <div style={{marginTop:"0%", display:"block", height:"40vh"}}>
            <ThemeProvider theme={theme} style={{width:"94%",height:"20%", paddingLeft:"3%"}}>
              <Button className={"sbitem"} href="/main" sx={{textTransform: "none", color:"black",fontSize:"100%",width:"100%", display:"flex", marginTop:"2%"}}>
                <div className={"sbitemmark"}></div>
                <div style={{marginRight:"auto", marginLeft:"3%"}}>
                  Главная
                </div>
                <div style={{marginLeft:"auto", marginRight:"3%"}}>
                  <FontAwesomeIcon className={"sbitemchev"} icon={faChevronRight}
                    style={{fontSize:"100%"}}
                  />
                </div>
              </Button>
              <Divider style={{width:"94%", marginLeft:"3%", marginTop:"0%"}}/> 
            </ThemeProvider>
            <ThemeProvider theme={theme} style={{width:"94%",height:"20%", paddingLeft:"3%"}}>
              <Button className={"sbitem"} href="/myrequests" sx={{textTransform: "none", color:"black",fontSize:"100%",width:"100%", display:"flex", marginTop:"2%"}}>
                <div className={"sbitemmark"}></div>
                <div style={{marginRight:"auto", marginLeft:"3%"}}>
                  Мои заявки
                </div>
                <div style={{marginLeft:"auto", marginRight:"3%"}}>
                  <FontAwesomeIcon className={"sbitemchev"} icon={faChevronRight}
                    style={{fontSize:"100%"}}
                  />
                </div>
              </Button>
              <Divider style={{width:"94%", marginLeft:"3%", marginTop:"0%"}}/> 
            </ThemeProvider>
            <ThemeProvider theme={theme} style={{width:"94%",height:"20%", paddingLeft:"3%"}}>
              <Button className={"sbitem"} href="/myworks" sx={{textTransform: "none", color:"black",fontSize:"100%",width:"100%", display:"flex", marginTop:"2%"}}>
                <div className={"sbitemmark"}></div>
                <div style={{marginRight:"auto", marginLeft:"3%"}}>
                  Мои подработки
                </div>
                <div style={{marginLeft:"auto", marginRight:"3%"}}>
                  <FontAwesomeIcon className={"sbitemchev"} icon={faChevronRight}
                    style={{fontSize:"100%"}}
                  />
                </div>
              </Button>
              <Divider style={{width:"94%", marginLeft:"3%", marginTop:"0%"}}/> 
            </ThemeProvider>
            <ThemeProvider theme={theme} style={{width:"94%",height:"20%", paddingLeft:"3%"}}>
              <Button className={"sbitem"} href="/cards" sx={{textTransform: "none", color:"black",fontSize:"100%",width:"100%", display:"flex", marginTop:"2%"}}>
                <div className={"sbitemmark"}></div>
                <div style={{marginRight:"auto", marginLeft:"3%"}}>
                  Карточки
                </div>
                <div style={{marginLeft:"auto", marginRight:"3%"}}>
                  <FontAwesomeIcon className={"sbitemchev"} icon={faChevronRight}
                    style={{fontSize:"100%"}}
                  />
                </div>
              </Button>
              <Divider style={{width:"94%", marginLeft:"3%", marginTop:"2%", marginTop:"0%"}}/> 
            </ThemeProvider>
            <ThemeProvider theme={theme} style={{width:"94%",height:"20%", paddingLeft:"3%"}}>
              <Button className={"sbitem"} href="/main" sx={{textTransform: "none", color:"black",fontSize:"100%",width:"100%", display:"flex", marginTop:"2%"}}>
                <div className={"sbitemmark"}></div>
                <div style={{marginRight:"auto", marginLeft:"3%"}}>
                  Подсказки
                </div>
                <div style={{marginLeft:"auto", marginRight:"3%"}}>
                  <FontAwesomeIcon className={"sbitemchev"} icon={faChevronRight}
                    style={{fontSize:"100%"}}
                  />
                </div>
              </Button>
              <Divider style={{width:"94%", marginLeft:"3%", marginTop:"0%"}}/> 
            </ThemeProvider>
            <ThemeProvider theme={theme} style={{width:"94%",height:"20%", paddingLeft:"3%"}}>
              <Button className={"sbitem"} href="/main" sx={{textTransform: "none", color:"black",fontSize:"100%",width:"100%", display:"flex", marginTop:"2%"}}>
                <div className={"sbitemmark"}></div>
                <div style={{marginRight:"auto", marginLeft:"3%"}}>
                  Поддержка
                </div>
                <div style={{marginLeft:"auto", marginRight:"3%"}}>
                  <FontAwesomeIcon className={"sbitemchev"} icon={faChevronRight}
                    style={{fontSize:"100%"}}
                  />
                </div>
              </Button>
              <Divider style={{width:"94%", marginLeft:"3%", marginTop:"0%"}}/> 
            </ThemeProvider>
          </div>
          <div style={{height:"15%", width:"100%"}}></div>
          <div style={{height:"15%",width:"100%", backgroundColor:"#141414", bottom:"0px", marginTop:"auto", position:"relative"}}>
            <div style={{height:"auto%", width:"70%", display:"flex", position:"absolute", left:"15%", top:"20%"}}>
              <IconButton style={{height: "70px",width: "70px"}}>
                <img src={Vk} style={{width:"100%", height:"100%", borderRadius:"50%", border:"2px solid white"}}/>
              </IconButton>
              <IconButton style={{height: "70px",width: "70px"}}>
                <img src={Instagram} style={{width:"100%", height:"100%", borderRadius:"50%", border:"2px solid white"}}/>
              </IconButton>
              <IconButton style={{height: "70px",width: "70px"}}>
                <img src={Telegram} style={{width:"100%", height:"100%", borderRadius:"50%", border:"2px solid white"}}/>
              </IconButton>
            </div>
            <img src={HeaderPic} style={{width:"100%", height:"100%"}}/>
          </div>
        </div>
        <div style={{width:"60vh", height:"100vh"}} onClick={handleTreeClose}></div>
      </div>
    )
  }

  return (
    <div>
      <IconButton className="otbut" style={{height: "60px",width: "60px",top:"16vh", left:"1%", zIndex:800, position:"absolute"}} onClick={handleTreeOpen}>
        <FontAwesomeIcon className={"otbutmenu"} icon={faBars}/>
      </IconButton>
  <Drawer
        sx={{
          width: "100%",
          height: "100vh",
          flexShrink: 0,
          opacity: 5,
          "& .MuiDrawer-paper": {
            width: "100%",
            height:"100vh",
            boxSizing: "border-box",
            boxShadow:"none",
            background: "none"
          }
        }}
        variant="temporary"
        anchor="left"
        open={openTree}
      >
        <Tree tdata={data}/>
      </Drawer>
      </div>
  );
};