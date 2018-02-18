// @flow
import React, { type Node } from "react";

type BlurProps = {
  text: string,
  safeText: string,
  dangerWords: Array<string>,
  children: Function
};

type BlurredProps = {
  safeText: string,
  textToMute: string
};

class Blured extends React.Component<BlurredProps> {
  getMuteString(text: string, safeText) {
    return safeText+new Array(text.length).join(safeText) + " ";
  }

  render() {
    const { safeText, textToMute } = this.props;
    // $FlowFixMe
    return (<React.Fragment> {this.getMuteString(textToMute, safeText)} </React.Fragment>);
  }
}

export default class Blur extends React.Component<BlurProps> {
  static defaultProps = {
    safeText: "█"
  };

  render() {
    const { text, dangerWords, children, safeText } = this.props;
    const test = text.split(" ").map((txt, index) => {
      if (dangerWords.indexOf(txt) === -1) {
        return txt + " ";
      }

      return <Blured key={index} textToMute={txt} safeText={safeText} />;
    });

    return this.props.children(test);
  }
}
