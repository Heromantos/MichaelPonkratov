import React,{useState,useEffect } from 'react'
import Button from '@mui/material/Button';
import "./Home.css";
import { useNavigate,Link } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const [order, setOrder] = useState([]); 
  const [newOrder, setNewOrder] = useState({    
    first_name: null   
  });
  const makeOrder = () => {
    fetch("http://127.0.0.1:8000/api/orders/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newOrder),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };  
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/orders/`)
      .then((reso) => reso.json())
      .then((data2) => setOrder(data2));
  }, []);

  const startproj = (bot) => {    
    let updatedBook = {
      dishes : [2],
      first_name: bot,
      last_name:null,
      address:null,
      phone:null
    };
    fetch(`http://127.0.0.1:8000/api/orders/40/`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedBook),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }; 
  return (
<div><h1 style={{ textAlign: 'center',color:'white'}}>Hello to my Restorant</h1>
  <div className='imgf'>
 
    <div className='main ' >
    <button key={order.id} className= "btn btn-primary" style={{
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 100,
            position: "fixed",
            bottom: 100,
            right: 1000,
            backgroundColor: "#26653A",
            paddingHorizontal: 100,
            paddingVertical: 100,
        }}
          onClick={()=>{startproj(null);navigate("/menu") } }>
          Start order
      </button>   
    </div>
  </div>
</div>
  )
}

export default Home