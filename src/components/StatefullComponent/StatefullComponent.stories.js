import React from 'react'
import { createStore } from 'redux'
import { storiesOf } from '@storybook/react'

import ConnectedApp from './StatefullComponent'

import reducer from '../../reducers/reducer'
const store = createStore(reducer)

storiesOf('StatefullComponent', module)
  .addParameters({ jest: ['StatefullComponent.test.js'] })
  .add('with text', () => (<ConnectedApp store={store} />))
