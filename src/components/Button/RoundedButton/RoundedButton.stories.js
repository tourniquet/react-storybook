import { storiesOf } from '@storybook/react'
import React from 'react'

import RoundedButton from './RoundedButton'

storiesOf('RoundedButton', module)
  .addParameters({ jest: ['RoundedButton.test.js'] })
  .add('with text', () =>
    <div>
      <RoundedButton
      >
        Internal
      </RoundedButton>
      <RoundedButton
      >
        External
      </RoundedButton>
      <RoundedButton
      >
        Offline
      </RoundedButton>
    </div>
  )
