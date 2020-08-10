import React from 'react';
import { Chart } from "react-google-charts";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
class Home extends React.Component {
    constructor(props){
        super(props)
        this.state={
            products:[],
            mobiles:0,
            laptops:0,
            cameras:0
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
            }, error => {
                console.error(error)
            })
    }

    data = () =>{
        this.state.products.map(product =>{
            if(product.categoryName === 'Mobiles'){
                this.setState({mobiles : this.state.mobiles + parseInt(product.stock)
            })
            }
            if(product.categoryName === 'Laptops'){
                this.setState({laptops: this.state.laptops + parseInt(product.stock) })
            }
            if(product.categoryName === 'Cameras'){
                this.setState({cameras: this.state.cameras + parseInt(product.stock)})
            }
    })
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
                        title: 'Sales Based on Category',
                        pieHole: 0.6,
                        backgroundColor: '#F1F1F1',
                    }}
                />
            </div>
                <div style={{ float: 'right', marginRight: '80px', marginTop: '80px' }}>
                <Chart
                    width='500px'
                    height='270px'
                    chartType="Bar"
                    loader={<span>Loading Chart...</span>}
                    data={[
                        ['Category', 'stock'],
                        ['mobiles', this.state.mobiles],
                        ['laptops', this.state.laptops],
                        ['cameras', this.state.cameras]
                    ]}
                    options={{
                        chart: {
                            title: 'Stock Based on Category'
                        },
                    }}
                />
            </div>
            </div>
        );
    }
}

export default Home;