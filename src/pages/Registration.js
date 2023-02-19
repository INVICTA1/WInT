import React from "react";
import { Form} from "react-bootstrap";
import Button from "@mui/material/Button";
import NotLoggedHeader from "../components/NotLoggedHeader"
import { Paper } from "@mui/material";
import "../components/index.css";
import Footer from "../components/Footer";
import { createTheme, ThemeProvider  } from '@mui/material/styles';


export default function Registration(){

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
               <div style={{marginLeft:"auto", marginRight:"auto", fontSize:"250%", marginTop:"-1%"}}>
               Регистрация
               </div>
               <div style={{marginLeft:"auto", marginRight:"auto", marginTop:"0%", marginBottom:"0%", fontSize:"300%", fontWeight:"bold", color:"#4bde85"}}>
               Work In Touch
               </div>
               <div style={{marginLeft:"auto", marginRight:"auto", fontSize:"180%", marginTop:"4%"}}>
               Нажимая Начать, Вы подтверждаете, что Вам есть 18 лет!
               </div>
               <ThemeProvider theme={theme}>
                  <Form onSubmit={handleSubmit} style={{marginLeft:"auto", marginRight:"auto", display:"grid", width:"100%", marginTop:"4%"}}>
                     <Button sx={{textTransform: "none"}} size="medium" variant="contained" type="submit" color="primary" onClick={() => {window.location.href = "/regform"}} style={{width:"20%",marginLeft:"auto", marginRight:"auto", marginTop:"15px", fontSize:"17px",fontWeight:"bold"}}>
                        Начать
                     </Button>
                  </Form>
               </ThemeProvider>
            </div>
         </Paper>
         </div>
         <Footer/>
      </div>
   );
};
