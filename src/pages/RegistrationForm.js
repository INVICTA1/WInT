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
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { createTheme, ThemeProvider  } from '@mui/material/styles';
import "../components/index.css";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import 'dayjs/locale/ru';
import Footer from "../components/Footer";

export default function RegistrationForm() {
    const [lname, setLname] = useState("");
    const [fname, setFname] = useState("");
    const [mname, setMname] = useState("");
    const [bdateValue, setBDateValue] = React.useState(null);
    const [sex, setSex] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [login, setLogin] = useState("");
    const [pwd, setPwd] = useState("");
    const [rpwd, setRpwd] = useState("");
    
    const [showPassword, setShowPassword] = React.useState(false);
    const [showRPassword, setShowRPassword] = React.useState(false);
    function pwdCheck({pwd,rpwd}){
        if(pwd === rpwd && pwd.length > 0 && rpwd.length > 0 ){
            window.location.href = "/regverification"
        }
        else{
            return (
                alert("Пароли не совпадают")
            )
        };
    };
    
    function validateForm() {
      return lname.length > 0 && fname.length > 0 && email.length > 0  && login.length > 0  && pwd.length > 0  && rpwd.length > 0;
    };
    
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
    
    const handleClickShowRPassword = () => setShowRPassword((show) => !show);
    const handleMouseDownRPassword = (event) => {
      event.preventDefault();
    };

    const handleSexChange = (event) => {
      setSex(event.target.value);
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
    function handleSubmit(event) {
      event.preventDefault();
    }
return (
	<div style={{display:"grid", alignItems:"stretch", overflow:"hidden"}}>
      <NotLoggedHeader/>
      <div style={{
                    width:"100%", 
                    height:"auto",
                    backgroundColor:"white",
                    display:"flex",
                    alignItems:"center",
                    paddingTop: "3%",
                    paddingBottom: "3%",
                  }}>
        <Paper elevation="15" style={{marginLeft:"auto", marginRight:"auto",width:"50%", height:"auto", borderRadius:"30px",paddingTop: "3%",paddingBottom: "3%"}}>
          <div style={{display:"grid", alignItems:"center", height:"100%"}}>
            <div style={{marginLeft:"auto", marginRight:"auto", fontSize:"250%"}}>
              Регистрация
            </div>
            <div style={{marginLeft:"auto", marginRight:"auto", marginTop:"-0%", marginBottom:"-3%", fontSize:"300%", fontWeight:"bold", color:"#4bde85"}}>
              Work In Touch
            </div>
            <Form onSubmit={handleSubmit} style={{marginLeft:"auto", marginRight:"auto", display:"grid", width:"100%"}}>
            <ThemeProvider theme={theme}>
                <TextField 
                  autoFocus 
                  type="lname" 
                  value={lname} 
                  id="lname" 
                  label="Фамилия*" 
                  variant="outlined"
                  style={{width:"60%", marginLeft:"auto", marginRight:"auto", marginTop:"5%"}}
                  color = "primary"
                  onChange={(e) => setLname(e.target.value)}
                />
                <TextField
                  type="fname" 
                  value={fname} 
                  id="fname" 
                  label="Имя*" 
                  variant="outlined"
                  style={{width:"60%", marginLeft:"auto", marginRight:"auto", marginTop:"1.5%"}}
                  color = "primary"
                  onChange={(e) => setFname(e.target.value)}
                />
                <TextField
                  type="mname" 
                  value={mname} 
                  id="mname" 
                  label="Отчество" 
                  variant="outlined"
                  style={{width:"60%", marginLeft:"auto", marginRight:"auto", marginTop:"1.5%"}}
                  color = "primary"
                  onChange={(e) => setMname(e.target.value)}
                />
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"ru"}>
                  <DatePicker
                    label="Дата рождения*"
                    value={bdateValue}
                    inputFormat="DD.MM.YYYY"
                    onChange={(newBDateValue) => {
                      setBDateValue(newBDateValue);
                    }}
                    renderInput={(params) => <TextField  style={{width:"60%", marginLeft:"auto", marginRight:"auto", marginTop:"1.5%"}} {...params}/>}
                  />
                </LocalizationProvider>
                <FormControl variant="outlined" style={{width:"60%", marginLeft:"auto", marginRight:"auto", marginTop:"1.5%"}}>
                  <InputLabel id="sex">Пол*</InputLabel>
                  <Select
                    labelId="sex"
                    id="sex"
                    value={sex}
                    label="Пол*"
                    onChange={handleSexChange}
                  >
                    <MenuItem value={"m"}>Мужской</MenuItem>
                    <MenuItem value={"f"}>Женский</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  type="email" 
                  value={email} 
                  id="email" 
                  label="E-mail*" 
                  variant="outlined"
                  style={{width:"60%", marginLeft:"auto", marginRight:"auto", marginTop:"1.5%"}}
                  color = "primary"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  type="phone" 
                  value={phone} 
                  id="phone" 
                  label="Телефон" 
                  variant="outlined"
                  style={{width:"60%", marginLeft:"auto", marginRight:"auto", marginTop:"1.5%"}}
                  color = "primary"
                  onChange={(e) => setPhone(e.target.value)}
                />
                <TextField
                  type="login" 
                  value={login} 
                  id="login" 
                  label="Логин*" 
                  variant="outlined"
                  style={{width:"60%", marginLeft:"auto", marginRight:"auto", marginTop:"1.5%"}}
                  color = "primary"
                  onChange={(e) => setLogin(e.target.value)}
                />
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" style={{width:"60%", marginLeft:"auto", marginRight:"auto", marginTop:"1.5%"}}>
                  <InputLabel htmlFor="outlined-adornment-password" color="primary">Пароль*</InputLabel>
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
                    label="Пароль*"
                    onChange={(e) => setPwd(e.target.value)}
                  />
                </FormControl>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" style={{width:"60%", marginLeft:"auto", marginRight:"auto", marginTop:"1.5%"}}>
                  <InputLabel htmlFor="outlined-adornment-password" color="primary">Повторите пароль*</InputLabel>
                  <OutlinedInput
                    color="primary"
                    id="outlined-adornment-password"
                    type={showRPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowRPassword}
                          onMouseDown={handleMouseDownRPassword}
                          edge="end"
                        >
                          {showRPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Повторите пароль*"
                    onChange={(e) => setRpwd(e.target.value)}
                  />
                </FormControl>
                <div style={{width:"100%", marginLeft:"auto", marginRight:"auto", marginTop:"4%", display:"flex"}}>
                  <div style={{width:"auto", marginLeft:"auto", marginRight:"auto", fontSize:"16px"}}>
                    После нажатия Готово на ваш E-mail будет отправлен код для его подтверждения
                  </div>
                </div>
                <Button sx={{textTransform: "none"}} 
                  size="medium" 
                  variant="contained" 
                  type="submit" 
                  disabled={bdateValue !== null? !validateForm(): true} 
                  color="primary" 
                  onClick={() => {pwdCheck({pwd,rpwd})}} 
                  style={{width:"20%",marginLeft:"auto", marginRight:"auto", marginTop:"2%", fontSize:"17px",fontWeight:"bold"}}>
                  Готово!
                </Button>
              </ThemeProvider>
            </Form>
            <ThemeProvider theme={theme} style={{width:"100%"}}> 
              <div style={{marginLeft:"auto", marginRight:"auto", display:"flex", alignItems:"center", marginTop:"3%"}}>
                <tm style={{width:"auto", fontSize:"18px"}}>Уже есть аккаунт?</tm>
                <Button href="/login" sx={{textTransform: "none", width:"auto", marginTop:"2%", fontSize:"18px"}}>Войдите!</Button>
              </div>
            </ThemeProvider>
          </div>
        </Paper> 
      </div>
      <Footer/>
    </div>
  );
}