import React ,{ useState, useEffect } from 'react'
import { useNavigate, Link  } from 'react-router-dom';
import { useParams } from "react-router-dom";

function Cart() {
  const [deleteDish ,setDeleteDish] = useState([]);
  const [order, setOrder] = useState([]); 
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/orders/`)
      .then((reso) => reso.json())
      .then((data2) => setOrder(data2));
  }, []);
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/orders/17/`)
      .then((reso) => reso.json())
      .then((data2) => setDeleteDish(data2));
  }, []);
  return (    
   <div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand">My Restorant</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href='/menu' >Menu</a>          
          </li>
          <li class="nav-item">          
            <a class="nav-link active" aria-current="page" href="/cart">my Cart 🛒</a>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  
  <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name of dish</th>
          <th scope="col">price</th>
          <th scope="col">remove</th>
        </tr>
      </thead>
      <tbody>
        {order.map((order, index) =>(
        <>{order.first_name === null ? (
          <>{order.dishes.map((dish) =>(
            
            <tr>
              <th scope="row">{index + 1}</th>          
              <td>{dish.name}</td>
              <td>{dish.price}</td>              
              <td> <button >🗑️ </button></td>
              </tr>
              
              ))}
          </>): null  }</> )
        )} 
      </tbody>     
    </table>
    {order.map((order, index) =>(
        <>{order.first_name === null ? ( <td>total price :{order.dishes.reduce((total, item)=>total+item.price,0)}</td>
          ): null  }</> )
        )} 
 
    <button key={order.id} className= "btn btn-primary" style={{
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            position: "fixed",
            bottom: 70,
            right: 40,
            backgroundColor: "#26653A",
            paddingHorizontal: 20,
            paddingVertical: 10,
        }}
          onClick={()=>{navigate("/personal") } }>
          GO to order
      </button> 
    </div>
  )
}

export default Cart