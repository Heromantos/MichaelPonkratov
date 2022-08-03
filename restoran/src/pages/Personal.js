import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Personal() {
  const navigate = useNavigate();
  const [order, setOrder] = useState([]);
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    address: "",
    phone : null,
  });
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/orders/`)
      .then((reso) => reso.json())
      .then((data2) => setOrder(data2));
  }, []);

  const customerPersonality = (dishes,first_name,last_name,address,phone) => {
    console.log(dishes)
    let updatedBook = {
      dishes : dishes,
      first_name: first_name,
      last_name:last_name,
      address:address,
      phone:phone
    };
    fetch(`http://127.0.0.1:8000/api/orders/40/`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedBook),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }; 

  const handleForm = (e) => {
    setForm((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };
 
  return (
    <div className="container">
      <h1>Enter your contact to finish</h1>
      <div>
        <input
          type="text"
          class="form-control"
          name="first_name"
          placeholder= "First name"
          onChange={handleForm}
          value={form.first_name}
        />
      </div>
      <div>
        <input
          type="text"
          class="form-control"
          name="last_name"
          placeholder="Last name"
          onChange={handleForm}
          value={form.last_name}
        />
      </div>
      <div>
        <textarea
          class="form-control"
          name="address"
          placeholder="address"
          onChange={handleForm}
          value={form.address_name}
        />
      </div>
      <div>
        <textarea
          class="form-control"
          name="phone"
          placeholder="phone"
          onChange={handleForm}
          value={form.phone}
        />
      </div>
     
      <div> {order.map((order)=>( <button
          className="btn btn-primary"
          onClick={() => {customerPersonality([1],form.first_name,form.last_name,form.address,form.phone)
            ;navigate("/endorder")
          }}
        >
          End your order
        </button> ))}
        
       
      </div>
    </div>
  )
}

export default Personal