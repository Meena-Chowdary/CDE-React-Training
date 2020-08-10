import React from 'react';
import { Card, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
class ProductDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    deleteCurrentProduct = () => {
        this.props.deleteId(this.props.id)
    }

    editProductWithId = () => {
        this.props.editId(this.props.id)
    }

    render() {
        const butStyle = {
            float:'right'
        }
        return (
            <div className="p-2">
                <Card>
                    <Card.Img src={"images/" + this.props.image} alt="Card image cap" />
                    <Card.Body>
                        <Card.Title><u>{this.props.name}</u></Card.Title>
                        <Card.Subtitle>Description : {this.props.description}</Card.Subtitle>
                        <Card.Text>
                            Price : {this.props.price}<br></br>
                            Category : {this.props.category}<br></br>
                            Stock : {this.props.stock}<br/>
                        </Card.Text>
                        <Button variant="primary" onClick={this.editProductWithId}>Edit</Button> &nbsp;
                           <Button style ={butStyle} variant="danger" onClick={this.deleteCurrentProduct}>Delete</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default ProductDetails;
