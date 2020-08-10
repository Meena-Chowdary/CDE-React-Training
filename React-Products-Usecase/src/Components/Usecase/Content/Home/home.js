import React from 'react';
import { Chart } from "react-google-charts";
class Home extends React.Component {
    state = {}
    render() {
        return (
            <div>
                <div style={{ float: 'left', margin: '80px', backgroundColor: '#A9A9A9' }}>
                    <Chart
                        width={'600px'}
                        height={'300px'}
                        chartType="PieChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                            ['Task', 'Sales per Category'],
                            ['Mobiles', 11],
                            ['Laptops', 7],
                            ['Cameras', 6],
                        ]}
                        options={{
                            title: 'Sales Based on Category',
                            pieHole: 0.6,
                            backgroundColor: '#F1F1F1',
                        }}
                    />
                </div>
                <div style={{ float: 'right', marginRight: '80px', marginTop: '80px' }} >
                    <Chart
                        width={'600px'}
                        height={'300px'}
                        chartType="LineChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                            ['x', 'mobiles', 'laptops', 'cameras'],
                            [0, 0, 0, 0],
                            [1, 10, 5, 2],
                            [2, 23, 15, 8],
                            [3, 17, 9, 5],
                            [4, 18, 10, 4],
                            [5, 9, 7, 2],
                            [6, 11, 5, 1],
                            [7, 27, 19, 15],
                        ]}
                        options={{
                            hAxis: {
                                title: 'Time',
                            },
                            vAxis: {
                                title: 'Popularity',
                            },
                            series: {
                                1: { curveType: 'function' },
                            },
                            backgroundColor: '#F1F1F1',
                        }}
                        rootProps={{ 'data-testid': '3' }}
                    />
                </div>
            </div>
        );
    }
}

export default Home;