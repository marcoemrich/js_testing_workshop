import React from "react";
import ReactDOM from "react-dom";

export const Foo = props => <div>
    <h1 className="foo">Hello {props.name}</h1>
    <Klicker />
  </div>

export class Klicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {numberOfTimesClicked: 0};
    this.incNumberOfClicks = this.incNumberOfClicks.bind(this);
  }

  incNumberOfClicks() {
    this.setState({numberOfTimesClicked: this.state.numberOfTimesClicked + 1})
  }

  render() {
    return <button onClick={this.incNumberOfClicks}>{this.state.numberOfTimesClicked}</button>;
  }

}