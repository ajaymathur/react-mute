![Preview](github/banner.png)

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

  // in render
  <Mute
    safeText="❤️"
    addWords=["bad"]
  >{"Actual text there bad words are to be muted"}
  </Mute>

  // => Actual text there ❤️❤️❤️ words are to be muted
```

## API

### **`children`**

**type: string**

Text that needs to be muted

### **`addWords`**

Array of words to mute. These will append to the list of existing list of bad words. 

List of words &rarr; https://github.com/web-mech/badwords/blob/master/lib/lang.json

### **`removeWords`**

Array of words to unmute. This will remove words from existing list of bad words.

### **`safeText`** 

**default: '*'**

Replace these character in muted words.

*** This package is dependent on https://github.com/web-mech/badwords for badwords implementation ***
