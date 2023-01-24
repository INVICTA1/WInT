import React,{useState} from "react";
import WorkRequest from "./WorkRequest"
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import data from "./data.json"
import Header from "./LoggedHeader"


export default function MyRequests() {
  const [statusActive, setStatusActive] = useState(false);
  const [statusFinished, setStatusFinished] = useState(false);
  const [statusCancelled, setStatusCancelled] = useState(false);
  const [statusModeration, setStatusModeration] = useState(false);
  const [firstPayment, setFirstPayment] = useState("");
  const [secondPayment, setSecondPayment] = useState("");
  const [firstPeopNeed, setFirstPeopNeed] = useState("");
  const [secondPeopNeed, setSecondPeopNeed] = useState("");
  const [firstPeopAgreed, setFirstPeopAgreed] = useState("");
  const [secondPeopAgreed, setSecondPeopAgreed] = useState("");
  const [firstCreateDate, setFirstCreateDate] = useState("");
  const [secondCreateDate, setSecondCreateDate] = useState("");
  const [firstStopDate, setFirstStopDate] = useState("");
  const [secondStopDate, setSecondStopDate] = useState("");
  const [firstWStartDate, setFirstWStartDate] = useState("");
  const [secondWStartDate, setSecondWStartDate] = useState("");
  const [firstWStartTime, setFirstWStartTime] = useState("");
  const [secondWStartTime, setSecondWStartTime] = useState("");
  return (
    <div>
      <Header/>
      <div style = {{display:"flex"}}>
        <div  style={{border:"1px solid gray"}}>
          <Form.Group size="lg" controlId="wstatus" style={{ display:"grid"}}>
            <div style={{fontWeight:"bolder"}}>Статус заявки</div>
            <lable style={{width:"120px"}}>
              <Form.Control
                type="checkbox"
                name="wstatus"
                onChange={(e) => setStatusActive(!statusActive)}
              />
              Активна
            </lable>
            <lable style={{ width:"120px"}}>
              <Form.Control
                type="checkbox"
                name="wstatus"
                onChange={(e) => setStatusFinished(!statusFinished)}
              />
              Завершена
            </lable>
            <lable style={{ width:"120px"}}>
              <Form.Control
                type="checkbox"
                name="wstatus"
                onChange={(e) => setStatusCancelled(!statusCancelled)}
              />
              Отклонена
            </lable>
            <lable style={{ width:"auto"}}>
              <Form.Control
                type="checkbox"
                name="wstatus"
                onChange={(e) => setStatusModeration(!statusModeration)}
              />
              На модерации
            </lable>
          </Form.Group>
          <br/>
          <div style={{fontWeight:"bolder"}}>Оплата</div>
          <Form.Group size="lg" controlId="payment" style={{display:"flex"}}>
            <lable style={{ width:"10%"}}>
              <Form.Control
                type="text"
                name="payment"
                value={firstPayment}
                onChange={(e) => setFirstPayment(e.target.value)}
                style={{ width:"50%"}}
              />
               -
            </lable>
            <lable style={{ width:"20%"}}>
              <Form.Control
                type="text"
                name="payment"
                value={secondPayment}
                onChange={(e) => setSecondPayment(e.target.value)}
                style={{ width:"28%"}}
              />
              BYN
            </lable>
          </Form.Group>
          <br/>
          <div style={{fontWeight:"bolder"}}>Количество работников</div>
          <Form.Group size="lg" controlId="peopneed" style={{display:"flex"}}>
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
          <div style={{fontWeight:"bolder"}}>Количество откликнувшихся</div>
          <Form.Group size="lg" controlId="peopagreed" style={{display:"flex"}}>
            <lable style={{ width:"10%"}}>
              <Form.Control
                type="text"
                name="peopagreed"
                value={firstPeopAgreed}
                onChange={(e) => setFirstPeopAgreed(e.target.value)}
                style={{ width:"50%"}}
              />
               -
            </lable>
            <lable style={{ width:"20%"}}>
              <Form.Control
                type="text"
                name="peopagreed"
                value={secondPeopAgreed}
                onChange={(e) => setSecondPeopAgreed(e.target.value)}
                style={{ width:"28%"}}
              />
              чел.
            </lable>
          </Form.Group>
          <br/>
          <div style={{fontWeight:"bolder"}}>Дата создания</div>
          <Form.Group size="lg" controlId="createdate" style={{display:"flex"}}>
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
          <div style={{fontWeight:"bolder"}}>Дата завершения</div>
          <Form.Group size="lg" controlId="stopdate" style={{display:"flex"}}>
            <lable style={{ width:"auto"}}>
              <Form.Control
                type="date"
                name="stopdate"
                value={firstStopDate}
                onChange={(e) => setFirstStopDate(e.target.value)}
              />
               -
            </lable>
            <lable style={{ width:"auto"}}>
              <Form.Control
                type="date"
                name="stopdate"
                value={secondStopDate}
                onChange={(e) => setSecondStopDate(e.target.value)}
              />
            </lable>
          </Form.Group>
          <br/>
          <div style={{fontWeight:"bolder"}}>Дата начала</div>
          <Form.Group size="lg" controlId="wstartdate" style={{display:"flex"}}>
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
          <div style={{fontWeight:"bolder"}}>Время начала</div>
          <Form.Group size="lg" controlId="wstarttime" style={{display:"flex"}}>
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
          <br/>
          <div style={{display:"flex"}}>
            <Button block size="lg" type="submit" style={{marginLeft:"auto", marginRight:"auto"}}>
                Показать
            </Button>
          </div>
        </div>
        <div>
          {data.reqData.map((item) =>  
            <WorkRequest item={item} />)}
        </div>
      </div>
      <form method="LINK" action="/contactus">
        <input type="submit" value="Contact Us"/>
      </form>
    </div>
  );
};