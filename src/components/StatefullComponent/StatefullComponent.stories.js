import React from 'react'
import { storiesOf } from '@storybook/react'

import StatefullComponent from './StatefullComponent'

storiesOf('StatefullComponent', module)
  .addParameters({ jest: ['StatefullComponent.test.js'] })
  .add('with text', () => (<StatefullComponent />))
