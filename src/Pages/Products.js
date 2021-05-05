import React from "react";
import { Table, ShoppingCartIcon, Button } from 'evergreen-ui';

class  Products extends React.Component {


  render() {

    const addToCart=(item)=> {
      this.props.data.setlist(item);
    }



    return (
      <div>
        <Table width={1000}>
          <Table.Head>
            <Table.TextHeaderCell>ProductName</Table.TextHeaderCell>
            <Table.TextHeaderCell>Price</Table.TextHeaderCell>
            <Table.TextHeaderCell></Table.TextHeaderCell>
          </Table.Head>
          <Table.Body >
            {
              this.props.list.map((item) => (
                <Table.Row id={item.id}>
                  <Table.Cell>{item.product}</Table.Cell>
                  <Table.Cell>$ {item.price}</Table.Cell>
                  <Table.Cell><Button onClick={()=>addToCart(item)}><ShoppingCartIcon size={20} color={'info'} /></Button></Table.Cell>
                </Table.Row>
              ))

            }
          </Table.Body>
        </Table>


      </div >
    )
  }
}
export default Products;