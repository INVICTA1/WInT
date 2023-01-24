import React, { useState } from "react";
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import data from "./data.json"
import Header from "./LoggedHeader"

export default function EditProfile() {
  const [lname, setLname] = useState(data.userData.lname);
  const [fname, setFname] = useState(data.userData.fname);
  const [mname, setMname] = useState(data.userData.mname);
  const [login, setLogin] = useState(data.userData.login);
  const [email, setEmail] = useState(data.userData.email);
  const [phone, setPhone] = useState(data.userData.phone);
  const [sex, setSex] = useState("");

  function validateForm() {
    return lname.length > 0 && fname.length > 0 && email.length > 0  && login.length > 0;
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div>
      <Header/>
      <div style={{ width:"40%", height:"auto", marginLeft:"30%", marginTop:"5%", marginBottom:"10%"}}>
        <Form onSubmit={handleSubmit} style={{"margin-left":"auto","margin-right":"auto"}}>
          <Form.Group size="lg" controlId="lname" style={{display:"flex", marginTop:"10px"}}>
            <label>
              Фамилия*
            </label>
            <Form.Control
              type="lname"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              style={{"margin-left":"auto"}}
            />
            
          </Form.Group>
          <Form.Group size="lg" controlId="fname" style={{display:"flex", marginTop:"10px"}}>
            <label>
              Имя*
            </label>
            <Form.Control
              type="fname"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              style={{"margin-left":"auto"}}
            />
            
          </Form.Group>
          <Form.Group size="lg" controlId="mname" style={{display:"flex", marginTop:"10px"}}>
            <label>
              Отчество
            </label>
            <Form.Control
              type="mname"
              value={mname}
              onChange={(e) => setMname(e.target.value)}
              style={{"margin-left":"auto"}}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="login" style={{display:"flex", marginTop:"10px"}}>
            <label>
              Логин*
            </label>
            <Form.Control
              type="login"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              style={{"margin-left":"auto"}}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="email" style={{display:"flex", marginTop:"10px"}}>
            <label>
              E-mail*
            </label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{"margin-left":"auto"}}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="phone" style={{display:"flex", marginTop:"10px"}}>
            <label>
              Телефон
            </label>
            <Form.Control
              type="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={{"margin-left":"auto"}}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="sex"  style={{display:"flex", marginTop:"10px"}}>
              <label>Пол*</label>
              <lable style={{"margin-left":"auto"}}>
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
          <div style={{display:"flex", marginTop:"40px"}}>
            <Button block size="lg" type="submit" disabled={!validateForm()} style={{marginLeft:"auto", marginRight:"auto"}}>
              Сохранить
            </Button>
          </div>
        </Form>
      </div>
      <form method="LINK" action="/contactus">
        <input type="submit" value="Contact Us"/>
      </form>
    </div>
  );
}