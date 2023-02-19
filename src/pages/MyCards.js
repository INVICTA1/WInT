import React from "react";
import Card from "../components/Card"
import Paper from "@mui/material/Paper"
import data from "../components/data.json"
import AddCardIcon from '@mui/icons-material/AddCard';
import LoggedHeader from "../components/LoggedHeader"
import SideBar from "../components/SideBar";

export default function MyCards() {
  return (
    <div>
      <LoggedHeader/>
      <SideBar/>
      <div style={{display:"flex", width:"100%"}}>
        <div style={{display:"flex", alignItems:"center",height:"auto", width:"auto", marginLeft:"auto", marginRight:"auto"}}>
          <Paper style={{marginLeft:"30px",marginRight:"8px", alignItems:"center", display:"flex",width:"300px", height:"180px", borderRadius:"8px", backgroundColor:"#f7f7f7"}}>
            <div style={{width:"100%"}}>
              <AddCardIcon style={{width:"100%",fontSize:"60px"}}/>
              <div style = {{display:"flex"}}>
                <tm style={{width:"auto",fontSize:"25px", marginLeft:"auto", marginRight:"auto"}}>Добавить карту</tm>
              </div>
            </div>
          </Paper>
          {data.userData.cards.map((item) => 
            <tm style={{padding:"8px", width:"300px"}}> 
              <Card item={item}/>
            </tm>
          )}
        </div>
      </div>
      <form method="LINK" action="/contactus">
        <input type="submit" value="Contact Us"/>
      </form>
    </div>
  );
};