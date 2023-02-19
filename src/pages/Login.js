import React, { useState } from "react";
import { Form} from "react-bootstrap";
import Button from "@mui/material/Button";
import NotLoggedHeader from "../components/NotLoggedHeader"
import { Paper } from "@mui/material";
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { createTheme, ThemeProvider  } from '@mui/material/styles';
import "../components/index.css";
import Telegram from "../icons/telegram.png"
import Whatsapp from "../icons/whatsapp.png"
import Phone from "../icons/phone.png"
import Info from "../icons/info.png"
import Footer from "../components/Footer";

export default function Login() {
  function PushLogin(){
    return window.location.href = "/main"
  }

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
  const itheme = createTheme({
    palette: {
      primary: {
        main: '#343434',
      },
      secondary: {
        main: '#343434',
      },
    },
  });
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  function validateForm() {
    return login.length > 0 && password.length > 0;
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
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
        <Paper elevation="15" style={{marginLeft:"auto", marginRight:"auto",width:"35%", height:"85%", borderRadius:"30px"}}>
          <div style={{display:"grid", alignItems:"center", height:"100%"}}>
            <div style={{marginLeft:"auto", marginRight:"auto", fontSize:"250%"}}>
              Добро пожаловать!
            </div>
            <div style={{marginLeft:"auto", marginRight:"auto", marginTop:"-5%", marginBottom:"-3%", fontSize:"300%", fontWeight:"bold", color:"#4bde85"}}>
              Work In Touch
            </div>
            <Form onSubmit={handleSubmit} style={{marginLeft:"auto", marginRight:"auto", display:"grid", width:"100%", marginTop:"3%"}}>
            <ThemeProvider theme={theme}>
                <TextField 
                  autoFocus 
                  type="login" 
                  value={login} 
                  id="outlined-basic" 
                  label="Логин, телефон или e-mail" 
                  variant="outlined"
                  style={{width:"60%", marginLeft:"auto", marginRight:"auto"}}
                  color = "primary"
                  onChange={(e) => setLogin(e.target.value)}/>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" style={{width:"60%", marginLeft:"auto", marginRight:"auto", marginTop:"3%"}}>
                  <InputLabel htmlFor="outlined-adornment-password" color="primary">Пароль</InputLabel>
                  <OutlinedInput
                    color="primary"
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Пароль"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormControl>
                <Button sx={{textTransform: "none"}} size="medium" variant="contained" type="submit" disabled={!validateForm()} color="primary" onClick={() => {PushLogin()}} style={{width:"20%",marginLeft:"auto", marginRight:"auto", marginTop:"15px", fontSize:"17px",fontWeight:"bold"}}>
                  Войти!
                </Button>
              </ThemeProvider>
            </Form>
            <ThemeProvider theme={theme} style={{width:"70%"}}>
              <Button href="/forgotpwd" sx={{marginLeft:"auto", marginRight:"auto",textTransform: "none", fontSize:"18px", width:"33%", marginTop:"-4%"}}>Забыли пароль?</Button>
            </ThemeProvider>
            <ThemeProvider theme={theme} style={{width:"100%"}}> 
              <div style={{marginLeft:"auto", marginRight:"auto", display:"flex", alignItems:"center", marginTop:"-8%"}}>
                <tm style={{width:"auto", fontSize:"18px"}}>Нет аккаунта - не проблема!</tm>
                <Button href="/registration" sx={{textTransform: "none", width:"auto", marginTop:"1.5%", fontSize:"18px"}}>Зарегистрируйтесь!</Button>
              </div>
            </ThemeProvider>
          </div>
        </Paper>
        <ThemeProvider theme={itheme} style={{width:"100%"}}> 
          <div className="container">
            <div className="box">
              <div className="first-icon-box">
                <IconButton aria-label="Telegram" color="primary">
                  <img src={Telegram} height="70px" width="70px"/>
                </IconButton>
              </div>
              <div className="third-icon-box">
                <IconButton aria-label="Whatsapp" color="primary">
                  <img src={Whatsapp} height="70px" width="70px"/>
                </IconButton>
              </div>
              <div className="fourth-icon-box">
                <IconButton aria-label="Телефон" color="primary">
                  <img src={Phone} height="70px" width="70px"/>
                </IconButton>
              </div>
              <div className="second-icon-box">
                <IconButton aria-label="Инфо" color="primary">
                  <img src={Info} height="70px" width="70px"/>
                </IconButton>
              </div>
            </div>
          </div>
        </ThemeProvider>
      </div>
      <Footer/>
    </div>
  );
}