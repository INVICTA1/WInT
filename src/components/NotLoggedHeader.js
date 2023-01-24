import React from "react";
import HeaderPic from "./headerPic.png"
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#ffffff',
      },
      secondary: {
        main: '#bbbdbb',
      },
    },
  });

export default function Header(){
    return(
        <div className="nlheader">
            <div style={{position:"absolute", top:"3%", left:"5%", display:"flex", width:"95%", alignItems:"center"}}>
                <Button href="/home" sx={{textTransform: "none", fontSize:"300%", fontWeight:"bold", color:"white"}}>WORK IN TOUCH</Button>
                <ThemeProvider theme={theme}>
                    <Button sx={{textTransform: "none"}} size="medium" color="primary" variant="contained" onClick={() => {window.location.href = "/login"}} style={{width:"8.2%", height:"10%",marginLeft:"auto", marginRight:"5%", fontSize:"120%",fontWeight:"bold", color:"black"}}>
                        Войти!
                    </Button>
                </ThemeProvider>
            </div>
            <div><img src={HeaderPic}/></div>
        </div>
    )
}