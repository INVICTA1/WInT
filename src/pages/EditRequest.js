import React, { useState } from "react";
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import LoggedHeader from "../components/LoggedHeader"

export default function EditRequest() {
  const [theme, setTheme] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [wstartdate, setWStartDate] = useState("");
  const [wstarttime, setWStartTime] = useState("");
  const [peopneed, setPeopNeed] = useState("");
  const [minrating, setMinRating] = useState("");
  const [maxrating, setMaxRating] = useState("");

  function validateForm() {
    return theme.length > 0 && location.length > 0 && wstartdate.length > 0  && wstarttime.length > 0  && peopneed.length > 0;
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div>
      <LoggedHeader/>
      <div style={{ width:"40%", height:"auto", marginLeft:"30%", marginTop:"5%", marginBottom:"10%"}}>
        <Form onSubmit={handleSubmit} style={{"margin-left":"auto","margin-right":"auto"}}>
          <Form.Group size="lg" controlId="theme" style={{display:"flex", marginTop:"10px"}}>
            <label>
              Тема*
            </label>
            <Form.Control
              type="text"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              style={{"margin-left":"auto"}}
            />
            
          </Form.Group>
          <Form.Group size="lg" controlId="description" style={{display:"flex", marginTop:"10px"}}>
            <label>
              Описание
            </label>
            <Form.Control
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={{"margin-left":"auto"}}
            />
            
          </Form.Group>
          <Form.Group size="lg" controlId="location" style={{display:"flex", marginTop:"10px"}}>
            <label>
              Адрес*
            </label>
            <Form.Control
              type="adress"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              style={{"margin-left":"auto"}}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="wstartdate" style={{display:"flex", marginTop:"10px"}}>
            <label>
              Дата начала работы*
            </label>
            <Form.Control
              type="date"
              value={wstartdate}
              onChange={(e) => setWStartDate(e.target.value)}
              style={{"margin-left":"auto"}}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="wstarttime" style={{display:"flex", marginTop:"10px"}}>
            <label>
              Время начала работы*
            </label>
            <Form.Control
              type="time"
              value={wstarttime}
              onChange={(e) => setWStartTime(e.target.value)}
              style={{"margin-left":"auto"}}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="peopneed" style={{display:"flex", marginTop:"10px"}}>
            <Form.Control
              type="text"
              value={peopneed}
              onChange={(e) => setPeopNeed(e.target.value)}
              style={{"margin-left":"auto"}}
            />
            <label>чел.</label>
          </Form.Group>
          <Form.Group size="lg" controlId="minrating" style={{display:"flex", marginTop:"10px"}}>
            
            <Form.Control
              type="text"
              value={minrating}
              onChange={(e) => setMinRating(e.target.value)}
              style={{"margin-left":"auto"}}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="maxrating" style={{display:"flex", marginTop:"10px"}}>
            
            <Form.Control
              type="text"
              value={maxrating}
              onChange={(e) => setMaxRating(e.target.value)}
              style={{"margin-left":"auto"}}
            />
          </Form.Group>
            <Button block size="lg" type="submit" disabled={!validateForm()} style={{marginLeft:"auto", marginRight:"auto"}}>
              Сохранить
            </Button>
        </Form>
      </div>
      <form method="LINK" action="/contactus">
        <input type="submit" value="Contact Us"/>
      </form>
    </div>
  );
}