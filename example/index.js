// @flow
import React from "react";
import ReactDOM from "react-dom";
import Blur from "../src/blur";

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <Blur
          text="This is Ajay some fuck sentece"
          dangerWords={["fuck"]}
          safeText="❤️"
        >
          {textWithBlur => (
            <div>
              <div>{textWithBlur}</div>
            </div>
          )}
        </Blur>
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
