import React from 'react'
import { storiesOf } from '@storybook/react'

import StatelessComponent from './StatelessComponent'

storiesOf('StatelessComponent', module)
  .addParameters({ jest: ['StatelessComponent.test.js'] })
  .add('with text', () => (<StatelessComponent />))
