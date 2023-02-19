import React from "react";

const ForgotPWD = () => {
return (
	<div>
	  <h1>Forgot password page</h1>
      <form method="LINK" action="/">
         <input type="submit" value="Home"/>
      </form>
      <div>
        <tm>Введите Ваш email. Если он есть в нашей базе данных, на него будет отправлена ссылка для восстановления пароля.</tm>
        <form>
            <input type="text" name="email"/>
            <div>
              <input type="submit" value="Отправить"/>
            </div>
        </form>
      </div>
      <form method="LINK" action="/contactus">
         <input type="submit" value="Contact Us"/>
      </form>
	</div>
);
};

export default ForgotPWD;
