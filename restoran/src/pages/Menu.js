import React ,{ useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';



interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}
function Menu() {
  const [newOrder, setNewOrder] = useState({
    dishes: [],    
  });

  const selectDish = (id) => {
    setNewOrder((prevState) => {
      return {
        ...prevState,
        dishes: [...prevState.dishes, id],
      };
    });   
  };
  const makeOrder = (orderId) => {
    fetch("http://127.0.0.1:8000/api/orders/" + orderId + "/", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newOrder),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };  
 

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}    

    const [categories, setCategory] = useState([]); 
    const [dish, setDish] = useState([]); 
    const [order, setOrder] = useState([]); 
    const [value, setValue] = useState(0);
    useEffect(() => {
      fetch(`http://127.0.0.1:8000/api/category/`)
        .then((res) => res.json())
        .then((data) => setCategory(data));
    }, []);
    useEffect(() => {
      fetch(`http://127.0.0.1:8000/api/dish/`)
        .then((reso) => reso.json())
        .then((data2) => setDish(data2));
    }, []);
    useEffect(() => {
      fetch(`http://127.0.0.1:8000/api/orders/`)
        .then((reso) => reso.json())
        .then((data2) => setOrder(data2));
    }, []);
    const navigate = useNavigate();
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
  
    const handleChangeIndex = (index: number) => {
      setValue(index);
    };
  
  return (<div>
    {order.map((order)=>( <>{order.first_name === null ? (
  
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
                <a class="nav-link active" aria-current="page" href='/menu' >Menu </a>          
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
      <Box sx={{ bgcolor: 'background.paper', width: 1000 }}>
          <AppBar position="static">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              textColor="inherit"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              {categories.map((cat)=>(<Tab label={ <>
               <img src={cat.imageUrl} key={cat.id} className="profile-img" width="200px" height="200px" style={{ marginRight: "10px" }} />          
                {cat.name}
                 </>} {...a11yProps(cat.id)} />))}
              
            </Tabs>
    
          </AppBar>
          {categories.map((category)=> ( 
          <TabPanel value={value} index={category.id-1} key={category.id}  >      
            {dish.map((dish,i)=> ( 
              <div>{dish.category === category.id ? (
                <div class="card" >
                    <img src={dish.imageUrl} class="profile-img" width="300px" height="300px"/>
                    <div class="card-body">
                      <h5 class="card-title">{dish.name}</h5>
                      <p class="card-text">{dish.description}</p>
                      <p class="card-text">{dish.price} ₪</p>
                      <div>
                        <button className={
                  newOrder.dishes.indexOf(dish.id) !== -1 ? "btn btn-primary" : "btn-alert"
                }   onClick={() => selectDish(dish.id)}>
                           put to my cart
                         </button>
          </div>
                    </div>
                </div> ) : null}
              </div>  ))}      
          </TabPanel>))}
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
          onClick={()=>{makeOrder(40);navigate("/cart") } }>
          Go to cart
      </button> 
         
        </Box>
     </div>) : null} </>
     
     ))} </div>



  )
}

export default Menu