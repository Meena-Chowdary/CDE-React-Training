import React from 'react';

import { Chart } from "react-google-charts";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            priceData: [],
            stockData: [],
            mobiles: 0,
            laptops: 0,
            cameras: 0
        }
    }
    componentWillMount() {
        this.getAllProducts()

    }
    getAllProducts() {
        axios.get(' http://localhost:3000/products')
            .then(response => {
                this.setState({
                    products: response.data,
                })
                this.data()
                this.dataPrice(this.state.products)
            }, error => {
                console.error(error)
            })
    }

    data = () => {
        this.state.products.map(product => {
            if (product.category === 'Mobiles') {
                this.setState({
                    mobiles: this.state.mobiles + parseInt(product.quantity)
                })
            }
            if (product.category === 'Laptops') {
                this.setState({ laptops: this.state.laptops + parseInt(product.quantity) })
            }
            if (product.category === 'Cameras') {
                this.setState({ cameras: this.state.cameras + parseInt(product.quantity) })
            }
        })
    }
    dataPrice = (products) => {
        let price = [["Product", "Price"]]
        for (const data of products) {
            price.push([data.name, parseInt(data.price)])
        }
        this.setState({ priceData: price })
    }
    render() {
        return (
            <div>
                <div style={{ float: 'left', margin: '80px', backgroundColor: '#A9A9A9' }}>
                    <Chart
                        width='500px'
                        height='270px'
                        chartType="PieChart"
                        loader={<span>Loading Chart...</span>}
                        data={[
                            ['Category', 'stock'],
                            ['mobiles', this.state.mobiles],
                            ['laptops', this.state.laptops],
                            ['cameras', this.state.cameras]
                        ]}
                        options={{
                            title: 'Quantity Based on Category',
                            pieHole: 0.6,
                            backgroundColor: '#F1F1F1',
                        }}
                    />
                </div>
                <div style={{ float: 'right', marginRight: '120px', marginTop: '80px' }}>
                    <Chart
                        width='500px'
                        height='270px'
                        chartType="Bar"
                        loader={<span>Loading Chart...</span>}
                        data={this.state.priceData}
                        options={{
                            title: 'Price Based on Product',
                            colors: ['#e6693e'],
                            backgroundColor: '#F1F1F1'

                        }}
                    />
                </div>
            </div>
        );
    }
}

export default Dashboard;