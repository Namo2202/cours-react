import React, { Component } from "react";

export default class OldReactComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      age: 23,
      name: "Denis",
    };

    this.hendleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // algo à faire quand le composant se monte
  }

  hendleClick() {
    // algo
  }
  render() {
    return <div>OldReactComponent</div>;
  }
}
