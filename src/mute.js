// @flow
import React, { type Node } from "react";
import Filter from 'bad-words';

type MuteProps = {
  addWords?: Array<string>,
  children: Function,
  removeWords?: Array<string>,
  safeText?: string,
  text: string,
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
    const { text, children } = this.props;
    
    return this.props.children(this.filter.clean(text));
  }
}
