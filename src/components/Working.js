import React, { Component } from 'react';
import './Working.css';

class Working extends Component {
    constructor(props) {
        super(props);
        this.state = {
            on: props.on
          };
    }


    handleClick = () => {
        this.setState({ on: !this.state.on });
    };


    render() {
        const isWorking = this.state.on ? 'on' : 'off';

        return (

            <div>
                <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="logo react" className={isWorking} />

                <button onClick={this.handleClick} >Is Homer Working ?</button>

                





            </div>
        )
    }

}

export default Working;