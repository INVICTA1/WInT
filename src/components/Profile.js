import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from "@mui/material/IconButton";
import data from "./data.json";
import Header from "./LoggedHeader"

export default function Profile() {

  return (
    <div>
      <Header/>
        <div style={{width:"100%",height:"auto",paddingLeft:"4px","margin-top":"0.4em"}}>
          <div style={{display:"flex",width:"60%"}}>
          <h style={{width:"100%", display: "flex"}}>
            <AccountCircleIcon
              style={{width:"20%",height:"auto","padding-left":"15%"}}
            />
            <tm style={{width:"60%","padding-top":"22px",padding:"10px",height:"40%"}}>
              <div style={{display:"flex"}}>
                <div>    
                    <div style={{height:"auto"}}>{data.userData.lname}</div>
                    <div style={{height:"auto"}}>{data.userData.fname}</div>
                    <div style={{height:"auto"}}>{data.userData.mname}</div>
                </div>
                <IconButton onClick={() => {window.location.href = "/editprofile"}} style={{marginLeft: "auto"}}>
                  Редактировать
                  <EditIcon/>
                </IconButton>
              </div> 
              <h style={{width:"30%", display: "flex"}}>
                <StarBorderIcon
                  style={{width:"20%",height:"auto"}}
                />
                <div style={{width:"100%",height:"auto",paddingLeft:"4px","margin-top":"0.4em"}}>{data.userData.rating}</div>
              </h>
            </tm>
            </h>
          </div>
          <div style={{width:"100%",height:"auto",paddingLeft:"30%","margin-top":"0.4em"}}>
            <div style={{width:"100%",height:"auto","margin-top":"10px"}}>
              <div><ht> Логин </ht></div>
              <tm> {data.userData.login} </tm>
            </div>
            <div style={{width:"100%",height:"auto","margin-top":"10px"}}>
              <div><ht> E-mail </ht></div>
              <tm> {data.userData.email} </tm>
            </div>
            <div style={{width:"100%",height:"auto","margin-top":"10px"}}>
              <div><ht> Телефон </ht></div>
              <tm> {data.userData.phone} </tm>
            </div>
            <div style={{width:"100%",height:"auto","margin-top":"10px"}}>
              <div><ht> Дата рождения </ht></div>
              <tm> {data.userData.bdate} </tm>
            </div>
            <div style={{width:"100%",height:"auto","margin-top":"10px"}}>
              <div><ht> Пол </ht></div>
              <tm> {data.userData.sex} </tm>
            </div>
          </div>
        </div>
      <form method="LINK" action="/contactus">
        <input type="submit" value="Contact Us"/>
      </form>
    </div>
  );
};