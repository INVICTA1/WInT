import React, { useState } from "react";
import { Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";


export default function RegistrationVerification() {
  const [code, setCode] = useState("");
  function validateForm() {
    return code.length > 0;
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div>
      <h1>Registration Verification</h1>
      <form method="LINK" action="/">
         <input type="submit" value="Home"/>
      </form>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="code">
          <Form.Control
            autoFocus
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Подтвердить
        </Button>
      </Form>
      <div>
        <form method="LINK" action="/regverification"> 
            <tm>Не получил код!</tm>
          <input type="submit" value="Отправить еще раз"/>
        </form>
      </div>
      <form method="LINK" action="/contactus">
         <input type="submit" value="Contact Us"/>
      </form>
    </div>
  );
}