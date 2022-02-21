import React from "react";
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Game from './Game'

class Sizeform extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '',summitted: false};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      this.setState({summitted: true});
      event.preventDefault();
    }
  
    render() {
      return (
        <div>
            {this.state.summitted ? (
                <Game />
            ):(
            <div>
                <h1>Enter board size</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Play" />
                </form>
            </div>
            )}
        </div>
      );
    }
  }

  export default Sizeform;