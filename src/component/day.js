import React, { useState , useEffect} from "react";
import { useLocation } from "react-router-dom";
import Calendar from 'react-calendar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function InsertEvent(props) {
  //const [date, setDate] = useState(new Date());
  const location = useLocation();
  const data = location;
  console.log("bbbbss",data);
  
  // const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  // let monthIndex = (data.state.month);
  // let monthName = monthNames[monthIndex];

 
 return (
 <div>
  {/* InsertEvent
  <span>Default selected date:</span> {data.state.id.toString()}
  <div>
  {data.state.id.getFullYear()}
  </div>
  <div>
  {data.state.id.getMonth()}
  </div>
  <div>
  {data.state.id.getDate()}
  </div>
  <div>
       {monthName}
  </div> */}























      <Container fluid >
        <Row>
          {/* <Col xs={12} xl={6} style={{ backgroundColor: 'blue' }}> */}
          <Col xs={12} xl={12} >
              edit
          </Col>
          {/* <Col xs={12} xl={6} style={{ backgroundColor: 'red' }}> */}
          <Col xs={12} xl={12}    >
            <div className={'flex-detail'}>
            <p >
              {/* <span>Default selected date:</span>{data.state.id.toDateString()} */}
              {/* <span>Default selected date:</span>{data.state()} */}
              </p>
              <div >
                {data.state.month}
              </div>
              <div >
                {data.state.day}
              </div>
              <div >
                {data.state.fulldate}
              </div>
            </div>
          </Col>
        </Row>
      </Container>







 </div>

  )
}

export default InsertEvent;