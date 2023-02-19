import React, { useState } from "react";
import { Form} from "react-bootstrap";
import Button from "@mui/material/Button";
import { Divider, Paper } from "@mui/material";
import "../components/index.css";
import Footer from "../components/Footer";
import { createTheme, ThemeProvider  } from '@mui/material/styles';
import data from "../components/data.json";
import LoggedHeader from "../components/LoggedHeader"
import SideBar from "../components/SideBar";
import ProfileIcon from "../icons/profileIcon.jpeg"
import { faCamera, faStar } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import 'dayjs/locale/ru';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { minHeight } from "@mui/system";
import * as moment from 'moment'
import { ClickAwayListener } from "@mui/material";

export default function Profile() {

  function handleSubmit(event) {
    event.preventDefault();
 }
 
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
 const [lname, setLname] = useState(data.userData.lname);
 const [fname, setFname] = useState(data.userData.fname);
 const [bdate, setBdate] = useState(data.userData.bdate);
 const [descr, setDescr] = useState(data.userData.description);
 const [login, setLogin] = useState(data.userData.login);
 const [phone, setPhone] = useState(data.userData.phone);
 const [sex, setSex] = useState(data.userData.sex);

 const [buflname, setBufLname] = useState(lname);
 const [buffname, setBufFname] = useState(fname);
 const [buflogin, setBufLogin] = useState(login);
 const [bufphone, setBufPhone] = useState(phone);
 const [bufbdate, setBufBdate] = useState(bdate);
 const [bufsex, setBufSex] = useState(sex);
 const [bufdescr, setBufDescr] = useState(descr);

 const [ebufbdate, setEBufBdate] = useState(bdate);

 const [popUpMenu, setPopUpMenu] = React.useState(false);

 function BufDateFormatter({newBufBDate}){
  setEBufBdate(newBufBDate)
  setBufBdate(newBufBDate.format("MM.DD.YYYY"))
 }
 function DiscardChanges(){
  setBufLname(lname)
  setBufFname(fname)
  setBufLogin(login)
  setBufPhone(phone)
  setBufBdate(bdate)
  setBufSex(sex)
  setBufDescr(descr)
 }
 function SaveChanges(){
  setLname(buflname)
  setFname(buffname)
  setLogin(buflogin)
  setPhone(bufphone)
  setBdate(bufbdate)
  setSex(bufsex)
  setDescr(bufdescr)
 }

function PopUpMenu() {
  return (
    <ClickAwayListener onClickAway={()=>{setPopUpMenu(false)}}>
      <Paper className="drop-down" elevation={3} onClickAway={()=>{setPopUpMenu(false)}}>
        <li style={{borderRadius:"4px 4px 0px 0px"}}>Просмотреть</li>
        <Divider/>
        <li style={{borderRadius:"0px"}}>Редактировать</li>
        <Divider/>
        <li style={{borderRadius:"0px 0px 4px 4px"}}>Загрузить</li>
      </Paper>
    </ClickAwayListener>
  );
}

 function ProfilePhotoControl(){
  return (
    <>
      <div className="profphoto">
        <img src={ProfileIcon}
          style={{
            width:"100%",
            height:"auto", 
            borderRadius:"50%", 
            marginLeft:"auto", 
            marginRight:"auto", 
            border:"3px solid #4bde85"}}
        />
        <div className="photoshadow" onClick={() => setPopUpMenu(!popUpMenu)}>
            <div style={{marginLeft:"auto", marginRight:"auto", width:"auto"}}>
                <FontAwesomeIcon icon={faCamera} style={{color:"white", fontSize:"300%"}}/>
            </div>
        </div>
      </div>
      {popUpMenu && PopUpMenu()}
    </>
  )
 }

 function validateFormAccept(){
  return (bufsex === sex && bufbdate === bdate && bufphone === phone && buflogin === login && buffname === fname && buflname === lname && bufdescr === descr)
}

  return (
    <div style={{overflow:"hidden"}}>
      <LoggedHeader/>
      <SideBar/>
      <div style={{width:"100%", 
                  height:"auto",
                  backgroundColor:"white",
                  display:"flex",
                  alignItems:"center",
                  minHeight:"70vh",
                  paddingTop:"40px",
                  paddingBottom:"40px"}}>
         <Paper elevation="15" style={{marginLeft:"auto", 
                                      marginRight:"auto",
                                      width:"70%", 
                                      height:"auto", 
                                      borderRadius:"30px", 
                                      padding:"3%"}}>
            <div style={{marginLeft:"auto", 
                        marginRight:"auto",
                        display:"grid", 
                        alignItems:"center", 
                        height:"100%"}}>
               <div style={{display:"flex", alignItems:"center", width:"80%", marginLeft:"auto", marginRight:"auto"}}>
                  <ProfilePhotoControl/>
                  <div style={{display:"grid", width:"40%", alignItems:"center", marginLeft:"3%"}}>
                    <div style={{marginRight:"auto", display:"flex", width:"100%"}}>
                      <div style={{fontSize:"160%",width:"auto",height:"auto", marginRight:"5px"}}>{fname}</div>
                      <div style={{fontSize:"160%",width:"auto",height:"auto"}}>{lname}</div>
                    </div>
                    <div style={{marginRight:"auto", display:"flex", width:"100%"}}>
                      <div style={{fontSize:"130%",width:"auto",height:"auto", marginRight:"5px"}}>
                        <FontAwesomeIcon icon={faStar}
                          style={{fontSize:"120%", color:"#4bde85"}}
                        />
                      </div>
                      <div style={{marginLeft:"3px ",fontSize:"130%",width:"auto",height:"auto"}}>{data.userData.rating}</div>
                    </div>
                    <div style={{fontSize:"120%",marginRight:"auto", width:"100%"}}>{data.userData.email}</div>
                  </div>
               </div>
               <div style={{display:"flex", alignItems:"center", width:"80%", marginLeft:"auto", marginRight:"auto", marginTop:"3%"}}>
                  <ThemeProvider theme={theme}>
                    <TextField 
                      autoFocus
                      type="fname" 
                      value={buffname} 
                      id="fname" 
                      label="Имя*" 
                      variant="outlined"
                      style={{width:"48.7%", marginRight:"auto"}}
                      color = "primary"
                      onChange={(e) => setBufFname(e.target.value)}
                    />
                    <TextField 
                      type="lname" 
                      value={buflname} 
                      id="lname" 
                      label="Фамилия*" 
                      variant="outlined"
                      style={{width:"48.7%", marginLeft:"auto"}}
                      color = "primary"
                      onChange={(e) => setBufLname(e.target.value)}
                    />
                  </ThemeProvider>
               </div>
               <div style={{display:"flex", alignItems:"center", width:"80%", marginLeft:"auto", marginRight:"auto", marginTop:"2%"}}>
                  <ThemeProvider theme={theme}>
                    <TextField
                      type="login" 
                      value={buflogin} 
                      id="login" 
                      label="Логин*" 
                      variant="outlined"
                      style={{width:"48.7%", marginRight:"auto"}}
                      color = "primary"
                      onChange={(e) => setBufLogin(e.target.value)}
                    />
                    <TextField 
                      type="phone" 
                      value={bufphone} 
                      id="phone" 
                      label="Телефон" 
                      variant="outlined"
                      style={{width:"48.7%", marginLeft:"auto"}}
                      color = "primary"
                      onChange={(e) => setBufPhone(e.target.value)}
                    />
                  </ThemeProvider>
               </div>
               <div style={{display:"flex", alignItems:"center", width:"80%", marginLeft:"auto", marginRight:"auto", marginTop:"2%"}}>
                  <ThemeProvider theme={theme}>
                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"ru"}>
                      <DatePicker
                        label="Дата рождения*"
                        value={ebufbdate}
                        inputFormat="DD.MM.YYYY"
                        onChange={(newBufBDate) => {
                          BufDateFormatter({newBufBDate});
                        }}
                        renderInput={(params) => <TextField  style={{width:"48.7%", marginRight:"auto"}} {...params}/>}
                      />
                    </LocalizationProvider>
                    <FormControl variant="outlined" style={{width:"48.7%", marginLeft:"auto"}}>
                      <InputLabel id="sex">Пол*</InputLabel>
                      <Select
                        labelId="sex"
                        id="sex"
                        value={bufsex}
                        label="Пол*"
                        onChange={(e) => setBufSex(e.target.value)}
                      >
                        <MenuItem value={"m"}>Мужской</MenuItem>
                        <MenuItem value={"f"}>Женский</MenuItem>
                      </Select>
                    </FormControl>
                  </ThemeProvider>
               </div>
               <div style={{display:"flex", alignItems:"center", width:"80%", marginLeft:"auto", marginRight:"auto", marginTop:"2%"}}>
                  <ThemeProvider theme={theme}>
                    <TextField
                      type="descr" 
                      value={bufdescr} 
                      id="descr" 
                      multiline
                      maxRows={10}
                      label="Описание" 
                      variant="outlined"
                      style={{width:"100%", marginRight:"auto"}}
                      color = "primary"
                      onChange={(e) => setBufDescr(e.target.value)}
                    />
                  </ThemeProvider>
               </div>
               <div style={{marginLeft:"auto", marginRight:"auto",display:"flex", alignItems:"center", width:"80%", marginTop:"2%"}}>
                <ThemeProvider theme={theme}>
                    <Form style={{display:"grid", width:"18%"}}>
                      <Button sx={{textTransform: "none"}} disabled={validateFormAccept()} size="medium" variant="contained" type="submit" color="primary" onClick={() => {SaveChanges()}} style={{width:"100%", marginRight:"auto", marginTop:"15px", color:"white", fontSize:"16px",fontWeight:"bold"}}>
                          Сохранить
                      </Button>
                    </Form>
                </ThemeProvider>
                <ThemeProvider theme={theme}>
                    <Form style={{display:"grid", width:"18%", marginLeft:"2%"}}>
                      <Button sx={{textTransform: "none"}} size="medium" disabled={validateFormAccept()} variant="contained" type="submit" color="primary" onClick={() => {DiscardChanges()}} style={{width:"100%", backgroundColor:"white", marginRight:"auto", marginTop:"15px", fontSize:"16px",fontWeight:"bold"}}>
                          Отменить
                      </Button>
                    </Form>
                </ThemeProvider>
               </div>
            </div>
         </Paper>
         </div>
         <Footer/>
      </div>
  );
};