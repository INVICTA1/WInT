import React,{useState} from "react";
import MainPageRequest from "../components/MainPageRequest"
import {Form} from "react-bootstrap";
import Button from "@mui/material/Button";
import data from "../components/data.json";
import LoggedHeader from "../components/LoggedHeader"
import Drawer from "@mui/material/Drawer";
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import Divider from "@material-ui/core/Divider";
import Map from "../components/Map";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { createTheme, ThemeProvider  } from '@mui/material/styles';
import { Paper } from "@mui/material";
import { faFilter, faListUl, faMapLocationDot, faRotateRight } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import SideBar from "../components/SideBar";

const drawerWidth = Math.floor(document.documentElement.clientWidth / 4.5);

export default function MainPage() {
  const [firstPeopNeed, setFirstPeopNeed] = useState("");
  const [secondPeopNeed, setSecondPeopNeed] = useState("");
  const [firstCreateDate, setFirstCreateDate] = useState("");
  const [secondCreateDate, setSecondCreateDate] = useState("");
  const [firstWStartDate, setFirstWStartDate] = useState("");
  const [secondWStartDate, setSecondWStartDate] = useState("");
  const [firstWStartTime, setFirstWStartTime] = useState("");
  const [secondWStartTime, setSecondWStartTime] = useState("");
  const [openFilter, setOpenFilter] = React.useState(false);
  const handleFilterOpen = () => {
    setOpenFilter(true);
  };

  const handleFilterClose = () => {
    setOpenFilter(false);
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

  const [alignment, setAlignment] = React.useState('map');

  const handleViewChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  return (
    <div style={{display:"grid"}}>
      <LoggedHeader/>
      <SideBar/>
      <div style = {{width:"100%", position:"relative"}}>
        <div style={{position:"absolute",height: "85vh", width:"100%"}}>
          <div style={{height: "100%", width:"100%"}}>
            {alignment === "map"? <Map itemData = {data}/>:<div style={{width:"50%", position:"absolute", top:90, left:"23.7%"}}>
          {data.workData.map((item) =>  
          <Paper elevation="15" style={{width:"100%", height:"10vh", marginBottom:"2.5%", padding:"2.5%"}}>
            <MainPageRequest item={item}/>
          </Paper>)}
        </div>}
          </div>
        </div>
        <ThemeProvider theme={theme}>
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            orientation="vertical"
            onChange={handleViewChange}
            aria-label="Platform"
            style={{width:"4%", position:"absolute", top:"35vh", zIndex:"500"}}
            size = "large"
            sx={{ boxShadow: 3 }}
          >
            <ToggleButton style={{fontWeight:"bolder", backgroundColor:"white", width:"100%"}} value="map"><FontAwesomeIcon icon={faMapLocationDot} style={{fontSize:"140%"}}/></ToggleButton>
            <ToggleButton style={{fontWeight:"bolder", backgroundColor:"white", width:"100%"}} value="list"><FontAwesomeIcon icon={faListUl} style={{fontSize:"140%"}}/></ToggleButton>
          </ToggleButtonGroup>
          <ToggleButtonGroup
            color="primary"
            variant="contained"
            orientation="vertical"
            aria-label="outlined button group"
            style={{width:"4%",position:"absolute", right:"0%", top:"35vh", zIndex:"500"}}
            size = "large"
            sx={{ boxShadow: 3, border:"none"}}
          >
            <ToggleButton className="filpane" style={{fontWeight:"bolder", backgroundColor:"white", width:"100%"}} onClick={handleFilterOpen}><FontAwesomeIcon icon={faFilter} style={{fontSize:"140%"}}/></ToggleButton>
            <ToggleButton className="filpane" style={{fontWeight:"bolder", backgroundColor:"white", width:"100%"}} onClick={() => {window.location.href = "/main"}}><FontAwesomeIcon icon={faRotateRight} style={{fontSize:"140%"}}/></ToggleButton>
          </ToggleButtonGroup>
        </ThemeProvider>
      </div>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
                border:"1px solid black"
              }
            }}
            variant="temporary"
            anchor="right"
            open={openFilter}
          >
            <div style={{width:"100%", display: "grid"}}>
              <div style={{display:"flex", width:"100%", alignItems:"center"}}>
                <ChevronRightRoundedIcon onClick={handleFilterClose} style={{height:"50px", width:"auto", padding:"10px"}}/>
                <div style={{fontWeight:"bolder", fontSize:"30px",marginLeft:"auto", marginRight:"auto"}}>Фильтры</div> 
              </div>
              <Divider/>
              <div style={{marginTop:"15px", marginBottom:"15px"}}>
              <div style={{fontWeight:"bolder",marginLeft:"5%"}}>Количество работников</div>
              <Form.Group size="lg" controlId="peopneed" style={{display:"flex",marginLeft:"5%"}}>
                <lable style={{ width:"10%"}}>
                  <Form.Control
                    type="text"
                    name="peopneed"
                    value={firstPeopNeed}
                    onChange={(e) => setFirstPeopNeed(e.target.value)}
                    style={{ width:"50%"}}
                  />
                  -
                </lable>
                <lable style={{ width:"20%"}}>
                  <Form.Control
                    type="text"
                    name="peopneed"
                    value={secondPeopNeed}
                    onChange={(e) => setSecondPeopNeed(e.target.value)}
                    style={{ width:"28%"}}
                  />
                  чел.
                </lable>
              </Form.Group>
              <br/>
              <div style={{fontWeight:"bolder",marginLeft:"5%"}}>Дата создания</div>
              <Form.Group size="lg" controlId="createdate" style={{display:"flex",marginLeft:"5%"}}>
                <lable style={{ width:"auto"}}>
                  <Form.Control
                    type="date"
                    name="createdate"
                    value={firstCreateDate}
                    onChange={(e) => setFirstCreateDate(e.target.value)}
                  />
                  -
                </lable>
                <lable style={{ width:"auto"}}>
                  <Form.Control
                    type="date"
                    name="createdate"
                    value={secondCreateDate}
                    onChange={(e) => setSecondCreateDate(e.target.value)}
                  />
                </lable>
              </Form.Group>
              <br/>
              <div style={{fontWeight:"bolder",marginLeft:"5%"}}>Дата начала</div>
              <Form.Group size="lg" controlId="wstartdate" style={{display:"flex",marginLeft:"5%"}}>
                <lable style={{ width:"auto"}}>
                  <Form.Control
                    type="date"
                    name="wstartdate"
                    value={firstWStartDate}
                    onChange={(e) => setFirstWStartDate(e.target.value)}
                  />
                  -
                </lable>
                <lable style={{ width:"auto"}}>
                  <Form.Control
                    type="date"
                    name="wstartdate"
                    value={secondWStartDate}
                    onChange={(e) => setSecondWStartDate(e.target.value)}
                  />
                </lable>
              </Form.Group>
              <br/>
              <div style={{fontWeight:"bolder",marginLeft:"5%"}}>Время начала</div>
              <Form.Group size="lg" controlId="wstarttime" style={{display:"flex",marginLeft:"5%"}}>
                <lable style={{ width:"auto"}}>
                  <Form.Control
                    type="time"
                    name="wstarttime"
                    value={firstWStartTime}
                    onChange={(e) => setFirstWStartTime(e.target.value)}
                  />
                  -
                </lable>
                <lable style={{ width:"auto"}}>
                  <Form.Control
                    type="time"
                    name="wstarttime"
                    value={secondWStartTime}
                    onChange={(e) => setSecondWStartTime(e.target.value)}
                  />
                </lable>
              </Form.Group>
              </div>
              <Divider/>
              <div style={{display:"flex", marginTop:"15px"}}>
                <Button block size="lg" type="submit" style={{marginLeft:"auto", marginRight:"auto"}}>
                    Показать
                </Button>
              </div>
            </div>        
          </Drawer>
    </div>
  );
};