import React,{useState} from "react";
import MainPageRequest from "./MainPageRequest"
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import data from "./data.json"
import Header from "./LoggedHeader"
import Drawer from "@mui/material/Drawer";
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import Divider from "@material-ui/core/Divider";
import { MapContainer, TileLayer, ZoomControl, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';
import marker from '../icons/marker.png';
import markerShadow from '../icons/markershadow.png';

const myIcon = new L.Icon({
  iconUrl: marker,
  shadowUrl: markerShadow,

  iconSize:     [38, 57], // size of the icon
  shadowSize:   [42, 50], // size of the shadow
  iconAnchor:   [22, 55], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 50],  // the same for the shadow
  popupAnchor:  [-3, -56]     
});

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

  return (
    <div style={{display:"grid", alignItems:"stretch"}}>
      <Header/>
      <div style = {{width:"100%", display:"flex", position:"relative"}}>
          <div style={{height: "90vh", width: "100%", position:"absolute",zIndex:"300"}}>
            <MapContainer 
              center={[53.904397, 27.555946]} 
              zoom={11} 
              zoomControl={false} 
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                attribution='&amp;copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {data.workData.map((item) =>
                <Marker position={item.position} icon={myIcon}>
                  <Popup>
                    <MainPageRequest item={item}/>
                  </Popup>
                </Marker>
              )}
              <ZoomControl position='bottomleft'/>
            </MapContainer>
          </div>
          <FilterAltRoundedIcon style={{height:"10vh", width:"auto", right:"0", top:"190", padding:"1.5%", position:"absolute",zIndex:"500"}} onClick={handleFilterOpen}/>
          <RefreshRoundedIcon style={{height:"10vh", width:"auto", right:"0", top:"280", padding:"1.5%", position:"absolute",zIndex:"500"}} onClick={() => {window.location.href = "/main"}}/>
      </div>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box"
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