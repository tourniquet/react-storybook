import React from 'react'
import { storiesOf } from '@storybook/react'

import CallToActionButton from './'

storiesOf('CallToActionButton', module)
  .add('with text', () => (
    <div>
      <CallToActionButton><span role='img' aria-label='so cool'>😀 😎 👍 💯</span></CallToActionButton>
    </div>
  ))
  .add('with some emoji', () => (
    <CallToActionButton><span role='img' aria-label='so cool'>😀 😎 👍 💯</span></CallToActionButton>
  ))
