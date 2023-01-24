import React from "react";

const Registration = () => {
return (
	<div>
	  <h1>Registration Page 1</h1>
      <form method="LINK" action="/">
         <input type="submit" value="Home"/>
      </form>
      <div>
        <tm>Нажимая Начать, Вы подтверждаете, что Вы старше 14 лет!</tm>
      </div>
      <form method="LINK" action="/regform">
         <input type="submit" value="Начать"/>
      </form>
      <form method="LINK" action="/contactus">
         <input type="submit" value="Contact Us"/>
      </form>
	</div>
);
};

export default Registration;
