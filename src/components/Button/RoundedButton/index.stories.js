import React from 'react'
import { storiesOf } from '@storybook/react'

import RoundedButton from './'

storiesOf('RoundedButton', module)
  .add('with text', () => (
    <div>
      <RoundedButton>Post an ad</RoundedButton>
      <RoundedButton>Don't post an ad</RoundedButton>
      <RoundedButton>Hi there</RoundedButton>
    </div>
  ))
