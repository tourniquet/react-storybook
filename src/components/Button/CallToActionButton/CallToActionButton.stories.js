import React from 'react'
import { storiesOf } from '@storybook/react'

import CallToActionButton from './CallToActionButton'

storiesOf('CallToActionButton', module)
  .addParameters({ jest: ['CallToActionButton.test.js'] })
  .add('with text', () => (
    <div>
      <CallToActionButton><span role='img' aria-label='so cool'>Click me!</span></CallToActionButton>
    </div>
  )
  )
  .add(
    'with some emoji',
    () => (<CallToActionButton><span role='img' aria-label='so cool'>😀 😎 👍 💯</span></CallToActionButton>)
  )
