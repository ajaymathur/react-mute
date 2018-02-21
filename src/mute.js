// @flow
import React, { type Node } from "react";
import Filter from 'bad-words';

type MuteProps = {
  addWords?: Array<string>,
  children: string,
  removeWords?: Array<string>,
  safeText?: string,
};

export default class Mute extends React.Component<MuteProps> {
  filter: {clean: Function, addWords: Function, removeWords: Function};

  static defaultProps = {
    removeWords: [],
    safeText: '*',
  }

  constructor(props: MuteProps) {
    super(props);

    this.filter = new Filter({
      placeHolder: props.safeText,
      list: props.addWords
    });

    if ( props.removeWords && props.removeWords.length > 0 ) {
      props.removeWords.forEach(removeWord => {
        this.filter.removeWords(removeWord);  
      });
    }
  }

  render() {
    const { children } = this.props;
    
    return (
      // $FlowFixMe
      <React.Fragment>
        {this.filter.clean(children)}
      </React.Fragment>
    );
  }
}
