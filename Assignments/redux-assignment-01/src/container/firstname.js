import React from 'react';
import {connect}from 'react-redux'
import {bindActionCreators} from 'redux'
import Addfirstname from '../action/addfirstname';

class FirstName extends React.Component {
    constructor(props){
        super(props)
        this.state={
            firstname:''
        }
    }
    getfirstname=(event)=>{
        this.setState({firstname:event.target.value})
    }
    render() { 
        return ( 
            <div>
                <label>First Name:</label>
                <input type='text' onChange={this.getfirstname}></input>
                <button onClick={()=>{this.props.firstnameAdd(this.state.firstname)}}>Add</button>
            </div>
         );
    }
}
 
function eventDispatch(dispatch){
    return bindActionCreators({firstnameAdd:Addfirstname},dispatch)
}

export default connect(null,eventDispatch)(FirstName);