import React from "react";
import Header from "./LoggedHeader";
import { MapContainer, TileLayer } from 'react-leaflet'

const Home = () => {
  return (
    <div>
      <Header/>
      <form method="LINK" action="/login">
        <input type="submit" value="Log in"/>
      </form>
      <form method="LINK" action="/contactus">
        <input type="submit" value="Contact Us"/>
      </form>
    </div>
  );
};
  
export default Home;