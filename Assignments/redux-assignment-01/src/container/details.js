import React from 'react';
import { connect } from 'react-redux'
class Details extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.fname} {this.props.lname} - {this.props.score}</h2>
            </div>
        );
    }
}
function storeToProps(store) {
    return {
        fname: store.addfirstname,
        lname: store.addlastname,
        score: store.addscore
    }
}
export default connect(storeToProps)(Details);