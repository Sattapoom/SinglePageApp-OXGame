import React from "react";
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
      if ((this.state.value) && (this.state.value)>=3) {
        this.setState({summitted: true});
      } else {
        alert("Please enter size of board N*N\n(minimum size of the board is 3)")
      }
      event.preventDefault();
    }
  
    render() {
      return (
        <div>
            {this.state.summitted ? (
                <Game boardsize={this.state.value} />
            ):(
            <div>
                <h1>Enter board size (N*N)</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type="number" min={3} pattern="[0-9]*" value={this.state.value} onChange={this.handleChange} />
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