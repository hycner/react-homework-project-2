# react-test

## instructions
Use this template:
```
import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { connect } from 'react-redux'

import { getCarrierIcon, getCarrierName } from './utils'

// getCarrierIcon('AA') => 'something/AA.png'
// getCarrierName('AA') => 'American Airlines'

const link = 'https://gist.githubusercontent.com/bgdavidx/132a9e3b9c70897bc07cfa5ca25747be/raw/8dbbe1db38087fad4a8c8ade48e741d6fad8c872/gistfile1.txt';

class Page extends Component {
  ...
}
```

## suggested future instructions
````
import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { connect } from 'react-redux'

import { getCarrierIcon, getCarrierName } from './utils'
// getCarrierIcon('AA') => 'something/AA.png'
// getCarrierName('AA') => 'American Airlines'
// both the utility functions above grab their data from a local version of 'https://gist.githubusercontent.com/bgdavidx/132a9e3b9c70897bc07cfa5ca25747be/raw/8dbbe1db38087fad4a8c8ade48e741d6fad8c872/gistfile1.txt'

class Page extends Component {
  ...
}
```
