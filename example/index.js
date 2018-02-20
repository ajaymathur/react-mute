// @flow
import React from "react";
import ReactDOM from "react-dom";
import Mute from "../src/mute";

type State = {
  value: string,
}

class App extends React.Component<{}, State> {

  constructor() {
    super();
    this.state = { value: 'This is ahole sentence' };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <Mute
          text={this.state.value}
        >
          {textWithMute => (
            <div>
              <div>{textWithMute}</div>
            </div>
          )}
        </Mute>
      </div>
    );
  }
}

// $FlowFixMe
ReactDOM.render(<App />, document.getElementById("root"));

// Hot Module Replacement
if (module.hot) {
  // $FlowFixMe
  module.hot.accept();
}
