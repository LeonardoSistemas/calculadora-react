import React, {Component} from 'react'
import './Calculadora.css'

import Button from '../components/Button'
import Display from '../components/Display'


const initialState = {
    displayValue : '0',
    clearDisplay : false,
    operation : null,
    values : [0,0],
    current : 0
}

export default class Calculadora extends Component{

    state = {...initialState}

    constructor(props){
        super(props)

        this.clearMenory = this.clearMenory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    clearMenory(){
        this.setState({...initialState})
    }

    setOperation(){}

    addDigit(){}

    render(){
        return (
            <div className="calculadora">
            <Display value="100"/>
            <Button label="AC" triple />
            <Button label="/" operation></Button>
            <Button label="7"></Button>
            <Button label="8"></Button>
            <Button label="9"></Button>
            <Button label="*" operation></Button>
            <Button label="4"></Button>
            <Button label="5"></Button>
            <Button label="6"></Button>
            <Button label="-" operation></Button>
            <Button label="1"></Button>
            <Button label="2"></Button>
            <Button label="3"></Button>
            <Button label="+" operation></Button>
            <Button label="0" double></Button>
            <Button label="."></Button>
            <Button label="=" operation></Button>
            </div>
        )
    }
}