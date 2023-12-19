import React, { useEffect } from 'react'
import '../css/Viewticket.css'
import axios from 'axios'
import { useState } from 'react'

export default function Viewticket() {
  const [start,setStart] = useState("");
  const [end,setEnd] = useState("");

  useEffect(()=> {
    axios.put("http://localhost:3001/auth/getdata",{name: localStorage.getItem("name")}).then((response)=> {
      console.log(response.data);
    setStart(response.data.ticket.startroute);
    setEnd(response.data.ticket.destination)
  })
  },[])
  
  return (
    <div className="body">
    <div className="content-container">
      <div className="header">
        <b>TICKET</b>
      </div>
      <div className="user-input-container">
      </div>
    </div>

    <div className="content-container">
      <div className="header">
        <b style={{ marginLeft: '-20px' }}>METRO TICKET</b>
      </div>

      <div className="user-input-container">
      </div>

      <div className="square-container metro-ticket-container">
        <a href="afterview.html">
          <img src="/images/qr.png" alt="QR Code" />
        </a>
        <p style={{ margin: '5px 0' }}>Start Route: {start}</p>
        <p style={{ margin: 0 }}>End Route: {end}</p>
      </div>
    </div>
  </div>
  );
}
