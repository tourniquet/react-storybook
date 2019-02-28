import React from 'react'
import { storiesOf } from '@storybook/react'

import Button from './Button'

storiesOf('Button', module)
  .addParameters({ jest: ['Button.test.js'] })
  .add(
    'with text', () => (
      <div>
        <Button><span role='img' aria-label='so cool'>Click me!</span></Button>
      </div>
    )
  )
  .add(
    'with some emoji',
    () => (<Button><span role='img' aria-label='so cool'>👍</span></Button>)
  )
