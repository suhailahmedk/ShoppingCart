import React,{useState} from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import { Container, Icon, Label, Menu } from "semantic-ui-react";
import Products from "./Products";
import product from './MOCK_DATA.json';
import ShoppingCart from "./ShoppingCart";


function Homepage() {
  const [X,setX]=useState(0);
  const [leb,setleb]=useState(0);
  const [cart,setCart]=useState([]);
  const [total,setTotal]=useState(0);
  const calculateTotal=()=>{
    let temp=0;
    cart.map((item)=>{
      temp=temp+(item.price*item.quantity);
    })
    setTotal(temp);
  }
  function setlist(item) {
    if(cart.includes(item)){
      alert("this item is already in cart");
    }
    else{
      let temp=cart;
      temp.push(item);
      setCart(temp)
      setleb(leb+1);
    }
    calculateTotal();
  }
  function removeItem(item) {
    if(cart.includes(item)){
      
      let temp=cart;
      let index= temp.indexOf(item);
      temp.splice(index,1);
      setCart(temp)
      setleb(leb-1);
    }
    calculateTotal();
  }
 
  function IncreaseQuntity(item) {
    
    let temp3=item;
    temp3.quantity+=1;
    if(cart.includes(item)){
      
      let temp=cart;
      let index= temp.indexOf(item);
      temp.splice(index,1);
      temp.splice(index,0,temp3);
      setCart(temp);
      setX(X+1);
    }
    calculateTotal();
  }
  
  function DecreaseQuntity(item) {
    let temp3=item;
    temp3.quantity-=1;
    if(cart.includes(item)){
      
      let temp=cart;
      let index= temp.indexOf(item);
      temp.splice(index,1);
      temp.splice(index,0,temp3);
      setCart(temp);
      setX(X+1);
    }
    if(temp3.quantity==0){
      removeItem(item);
    }
    calculateTotal();
  }
    
  return (
    <div>
      <BrowserRouter>
        <Container fluid>
          <Menu>
            <Container fluid>
              <Menu.Item header>
                <Link to="/products">Products</Link>
              </Menu.Item>
              <Menu.Item header>
                <Link to="/cart">Shopping Cart</Link>
              </Menu.Item>
            </Container>
            <Menu.Item>
              <Link to="/cart"><Icon name="cart" /></Link>
              <Label>{leb}</Label>
            </Menu.Item>
          </Menu>
          <Container text>
            <Switch>
              <Route exact path="/">
                <Products />
              </Route>
              <Route path="/products">
                <Products list={product} data={{setlist:setlist.bind(this)}} />
              </Route>
              <Route path="/cart">
                <ShoppingCart list={cart} total={total} data={{removeItem:removeItem.bind(this)}} data2={{IncreaseQuntity:IncreaseQuntity.bind(this)}} data3={{DecreaseQuntity:DecreaseQuntity.bind(this)}} />
              </Route>
            </Switch>
          </Container>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default Homepage;