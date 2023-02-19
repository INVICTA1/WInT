import React from "react";
import NotLoggedHeader from "../components/NotLoggedHeader";

const Home = () => {
  return (
    <div>
      <NotLoggedHeader/>
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