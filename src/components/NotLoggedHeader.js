import React from "react";
import HeaderPic from "../icons/headerPic.png"
import headerName from "../icons/headerName.png"
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./index.css";

const theme = createTheme({
    palette: {
      primary: {
        main: '#141414',
      },
      secondary: {
        main: '#bbbdbb',
      },
    },
  });

export default function NotLoggedHeader(){
    return(
        <div className="nlheader">
            <div style={{position:"absolute", top:"3%", display:"flex", width:"100%", alignItems:"center"}}>
                <div>
                  <img src={headerName} style={{height:"auto", width:"30%", marginLeft:"5%"}} onClick={() => {window.location.href = "/home"}}/>
                </div>
                <ThemeProvider theme={theme}>
                    <Button sx={{textTransform: "none", border:"1px solid white"}} size="medium" color="primary" variant="contained" onClick={() => {window.location.href = "/login"}} style={{width:"50%", height:"70%",marginLeft:"auto", marginRight:"5%", fontSize:"110%",fontWeight:"bold", color:"white"}}>
                        Войти!
                    </Button>
                </ThemeProvider>
            </div>
            <div><img src={HeaderPic}/></div>
        </div>
    )
}