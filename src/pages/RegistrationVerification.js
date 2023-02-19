import React, { useState } from "react";
import { Form} from "react-bootstrap";
import Button from "@mui/material/Button";
import NotLoggedHeader from "../components/NotLoggedHeader"
import { Paper } from "@mui/material";
import "../components/index.css";
import Footer from "../components/Footer";
import { createTheme, ThemeProvider  } from '@mui/material/styles';
import { MuiOtpInput } from 'mui-one-time-password-input';

export default function RegistrationVerification() {
  const [code, setCode] = useState("");
  function validateForm() {
    return code.length === 4;
  }
  const codeHandleChange = (newValue) => {
    setCode(newValue)
  }
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

  return (
    <div style={{display:"grid", alignItems:"stretch"}}>
         <NotLoggedHeader/>
         <div style={{
                     width:"100%", 
                     height:"70vh",
                     backgroundColor:"white",
                     display:"flex",
                     alignItems:"center"
                     }}>
         <Paper elevation="15" style={{marginLeft:"auto", marginRight:"auto",width:"auto", height:"auto", borderRadius:"30px", padding:"3%"}}>
            <div style={{display:"grid", alignItems:"center", height:"100%"}}>
               <div style={{marginLeft:"auto", marginRight:"auto", fontSize:"160%", marginBottom:"14%"}}>
               Введите полученный код
               </div>
               <ThemeProvider theme={theme}>
               <MuiOtpInput value={code} type="number" onChange={codeHandleChange} sx={{width: { sm: 200, md: 375 },"& .MuiInputBase-root": {height: 100, fontSize:"70px"}}} color="primary" style={{textTransform: "none", fontSize:"45px", marginLeft:"auto",marginRight:"auto", marginTop:"2%"}}/>
                  <Form onSubmit={handleSubmit} style={{marginLeft:"auto", marginRight:"auto", display:"grid", width:"100%", marginTop:"0%"}}>
                     <Button sx={{textTransform: "none"}} disabled={!validateForm()} variant="contained" type="submit" color="primary" onClick={() => {window.location.href = "/regform"}} style={{width:"45%",marginLeft:"auto", marginRight:"auto", marginTop:"14%", fontSize:"17px",fontWeight:"bold"}}>
                        Подтвердить
                     </Button>
                  </Form>
               </ThemeProvider>
            </div>
            <ThemeProvider theme={theme}> 
              <div style={{marginLeft:"auto", marginRight:"auto", display:"flex", alignItems:"center", marginTop:"7%"}}>
                <div style={{marginLeft:"auto", marginRight:"auto"}}>
                  <tm style={{width:"auto", fontSize:"18px"}}>Я не получил код!</tm>
                  <Button href="/login" sx={{textTransform: "none", width:"auto", fontSize:"18px"}}>Отправить снова</Button>
                </div>
              </div>
            </ThemeProvider>
         </Paper>
         </div>
         <Footer/>
      </div>
  );
}