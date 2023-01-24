import React, { useState } from "react";
import { Form} from "react-bootstrap";
import Button from "@mui/material/Button";
import Header from "./NotLoggedHeader"
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

export default function Login() {
  function PushLogin(){
    return window.location.href = "/main"
  }

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const theme = createTheme({
    palette: {
      primary: {
        main: '#4bde85',
      },
      secondary: {
        main: '#bbbdbb',
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
      <Header/>
      <div style={{width:"100%", height:"60vh", backgroundColor:"#4bde85"}}></div>
      <div style={{
                    width:"100%", 
                    height:"70vh",
                    backgroundColor:"white",
                    position:"absolute",
                    top: "15%",
                    borderRadius:"50px",
                    display:"flex",
                    alignItems:"center"
                  }}>
        <Paper elevation="15" style={{marginLeft:"auto", marginRight:"auto",width:"40%", height:"80%", borderRadius:"30px"}}>
          <div style={{display:"grid", alignItems:"center", height:"100%"}}>
            <div style={{marginLeft:"auto", marginRight:"auto", fontSize:"250%"}}>
              Добро пожаловать!
            </div>
            <div style={{marginLeft:"auto", marginRight:"auto", marginTop:"-5%", marginBottom:"-3%", fontSize:"300%", fontWeight:"bold", color:"#4bde85"}}>
              Work In Touch
            </div>
            <Form onSubmit={handleSubmit} style={{marginLeft:"auto", marginRight:"auto", display:"grid", width:"100%"}}>
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
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" style={{width:"60%", marginLeft:"auto", marginRight:"auto"}}>
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
            <ThemeProvider theme={theme} style={{marginLeft:"auto", marginRight:"auto",width:"100%"}}>
              <Button href="/forgotpwd" sx={{textTransform: "none", fontSize:"18px", width:"auto"}}>Забыли пароль?</Button>
            </ThemeProvider>
            <ThemeProvider theme={theme} style={{width:"100%"}}> 
              <div style={{marginLeft:"auto", marginRight:"auto", display:"flex", alignItems:"center", marginTop:"-10%"}}>
                <tm style={{width:"auto", fontSize:"18px"}}>Нет аккаунта - не проблема!</tm>
                <Button href="/registration" sx={{textTransform: "none", width:"auto", marginTop:"1.5%", fontSize:"18px"}}>Зарегистрируйтесь!</Button>
              </div>
            </ThemeProvider>
          </div>
        </Paper>
      </div>
    </div>
  );
}