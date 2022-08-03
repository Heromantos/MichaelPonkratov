import React, { useState,useEffect } from "react";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
function Endorder() {
  const navigate = useNavigate();
  const [order, setOrder] = useState([]);
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/orders/`)
      .then((reso) => reso.json())
      .then((data2) => setOrder(data2));
  }, []);

  return (
    <div> {order.map((order)=>( <h1 style={{ textAlign: 'center'}}>Thank You {order.first_name +" "+ order.last_name} to ordered</h1>))}
      
          <h1 style={{ textAlign: 'center'}}>You number is {Math.floor(Math.random() * (500 - 1 + 1)) + 1}</h1>
    <div >
      
   
      <div className='main ' >
        <Button variant="contained" className='butt' onClick={()=>navigate("/")} >
          
         Go to first page
        </Button>   
      </div>
    </div>
  </div>
  )
}

export default Endorder