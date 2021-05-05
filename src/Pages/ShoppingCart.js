import React from "react";
import useEffect from "react";
import { Table, TrashIcon, Button,PlusIcon,MinusIcon } from 'evergreen-ui';

import {  Label } from "semantic-ui-react";
let total=0;
class ShoppingCart extends React.Component {
 
  render() {

    const removeFromCart = (item) => {
      this.props.data.removeItem(item);
    }
    const decrease = (item) => {
      this.props.data3.DecreaseQuntity(item);
    }
    const increase = (item) => {
      this.props.data2.IncreaseQuntity(item);
    }
    
    return (
      <div>
        <Table width={1000}>
          <Table.Head>
            <Table.TextHeaderCell>ProductName</Table.TextHeaderCell>
            <Table.TextHeaderCell>Price</Table.TextHeaderCell>
            <Table.TextHeaderCell>Quantity</Table.TextHeaderCell>
            <Table.TextHeaderCell>Total</Table.TextHeaderCell>
            <Table.TextHeaderCell></Table.TextHeaderCell>
          </Table.Head>
          <Table.Body>
            {
              this.props.list.map((item) => (
                <Table.Row id={item.id}>
                  <Table.Cell>{item.product}</Table.Cell>
                  <Table.Cell>$ {item.price}</Table.Cell>
                  <Table.Cell><Button onClick={()=>decrease(item)}><MinusIcon color={'danger'} /></Button><Label>{item.quantity}</Label><Button onClick={()=>increase(item)}><PlusIcon color={'info'} /></Button></Table.Cell>
                  <Table.Cell>$ {item.price*item.quantity}</Table.Cell>
                  <Table.Cell><Button  onClick={()=>removeFromCart(item)}><TrashIcon size={20} color={'danger'} /></Button></Table.Cell>
                </Table.Row>
              ))

            }
            <Table.Row id="empty">
            </Table.Row>
            <Table.Row id="total">
              <Table.Cell>Total Cost:</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell> $ {this.props.total}</Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>


      </div>
    )
  }
}
export default ShoppingCart;