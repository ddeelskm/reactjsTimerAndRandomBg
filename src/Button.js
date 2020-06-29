import React from 'react';
import logo from './logo.svg';
import './App.css';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.myClick = this.myClick.bind(this)
    }

    bgRandom() {
        return (
            Math.floor(Math.random() * (999 - 100) + 100)
        )
    }

    myClick() {
        document.getElementsByClassName('wrapper')[0].style.backgroundColor = `#${this.bgRandom()}`
    }

    render() {
        return (
            <button onClick={this.myClick} className='clicker'>Изменить дизайн</button>
        )
    }
}

export default Button