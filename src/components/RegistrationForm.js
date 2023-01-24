import React, { useState } from "react";
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default function RegistrationForm() {
    const [lname, setLname] = useState("");
    const [fname, setFname] = useState("");
    const [mname, setMname] = useState("");
    const [bdate, setBdate] = useState("");
    const [sex, setSex] = useState("m");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [login, setLogin] = useState("");
    const [pwd, setPwd] = useState("");
    const [rpwd, setRpwd] = useState("");

    function pwdCheck({pwd,rpwd}){
        if(pwd === rpwd && pwd.length > 0 && rpwd.length >0 ){
            window.location.href = "/regverification"
        }
        else{
            return (
                alert("Пароли не совпадают")
            )
        };
    };

    function validateForm() {
      return lname.length > 0 && fname.length > 0 && bdate.length > 0  && email.length > 0  && login.length > 0  && pwd.length > 0  && rpwd.length > 0;
    };
    function handleSubmit(event) {
      event.preventDefault();
    };
return (
	<div>
      <h1>Registration Page 2</h1>
      <form method="LINK" action="/">
         <input type="submit" value="Home"/>
      </form>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="lname">
          <Form.Control
            autoFocus
            type="text"
            value={lname}
            placeholder="Фамилия*"
            onChange={(e) => setLname(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="fname">
          <Form.Control
            type="text"
            value={fname}
            placeholder="Имя*"
            onChange={(e) => setFname(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="mname">
          <Form.Control
            type="text"
            value={mname}
            placeholder="Отчество"
            onChange={(e) => setMname(e.target.value)}
          />
        </Form.Group>
        <div><tm>Дата рождения*</tm></div>
        <Form.Group size="lg" controlId="bdate">
          <Form.Control
            type="date"
            value={bdate}
            onChange={(e) => setBdate(e.target.value)}
          />
        </Form.Group>
        <div>
          <tm>Пол*</tm>
          <Form.Group size="lg" controlId="sex">
            <lable>
              <Form.Control
                  type="radio"
                  value="m"
                  name="sex"
                  onChange={(e) => setSex(e.target.value)}
                  checked={true}
              />
              Мужской
            </lable>
            <lable>
              <Form.Control
                  type="radio"
                    value="f"
                    name="sex"
                    onChange={(e) => setSex(e.target.value)}
                />
                    Женский
                </lable>
            </Form.Group>
        </div>
        <Form.Group size="lg" controlId="email">
          <Form.Control
            type="text"
            value={email}
            placeholder="E-mail*"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="phone">
          <Form.Control
            type="text"
            value={phone}
            placeholder="Телефон"
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="login">
          <Form.Control
            type="login"
            value={login}
            placeholder="Логин*"
            onChange={(e) => setLogin(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="pwd">
          <Form.Control
            type="password"
            value={pwd}
            placeholder="Пароль*"
            onChange={(e) => setPwd(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="rpwd">
          <Form.Control
            type="password"
            value={rpwd}
            placeholder="Подтвердите пароль*"
            onChange={(e) => setRpwd(e.target.value)}
          />
        </Form.Group>
            <div><tm>После нажатия кнопки Готово на ваш e-mail будет отправлен код для его подтверждения</tm></div>
            <Button block size="lg" type="submit" disabled={!validateForm()} onClick={() => {pwdCheck({pwd,rpwd})}}>
                Готово!
            </Button>
        </Form>
        <form method="LINK" action="/contactus">
         <input type="submit" value="Contact Us"/>
      </form>
	</div>
);
};