![Preview](https://raw.githubusercontent.com/ajaymathur/react-mute/blob/master/.github/banner.png)

> Mute the bad words in react component

## Introduction

Stop people from polluting your react application with bad words. Mute the bad words.

## Installing

```sh
  $ yarn add react-mute
```

## Usage

```js
  import Mute from 'react-mute';

  <Mute
    text="Actual text there bad words are to be muted"
    safeText="❤️"
    addWords=["bad"]
  >{(mutedText) => (
      <div>{mutedText}</div>
    )}
  </Mute>

  // => <div>Actual text there ❤️❤️❤️ words are to be muted</div>
```


