import React, { Component } from 'react';
import { connect } from 'react-redux'
import {add, subtract, getCounter} from '../ducks/actions/counterActions'

class Counter extends Component {
    
    componentDidMount(){
        this.props.getCounter()
    }
    add(num){
        return  (e) => {
        this.props.add(num)
        }
    }   

    subtract(num){

        return () => {
            this.props.subtract(num)
        }
    }

    render() {
        const {counter, add, subtract} = this.props;
        
        return (
            <div className="Counter-container">
                <h1>Counter</h1>
                <div className="flex-center">
                    <button onClick={this.add(1)}>+</button>
                    <h4>{counter}</h4>
                    <button onClick={this.subtract(1)}>-</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter
    }
};

const mapDispatchToProps = {
    add, subtract, getCounter
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);