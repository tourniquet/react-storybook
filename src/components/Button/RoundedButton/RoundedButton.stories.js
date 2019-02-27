import { State, Store } from '@sambego/storybook-state'
import { storiesOf } from '@storybook/react'
import React from 'react'

import RoundedButton from './RoundedButton'

const store = new Store({
  theme: 'internal'
})

storiesOf('RoundedButton', module)
  .add('with text', () =>
    <div>
      <State store={store}>
        {state =>
          <div className={`theme-${state.theme}`}>
            <RoundedButton
              onClick={() => store.set({ theme: 'internal' })}
            >
              Internal
            </RoundedButton>
            <RoundedButton
              onClick={() => store.set({ theme: 'external' })}
            >
              External
            </RoundedButton>
            <RoundedButton
              onClick={() => store.set({ theme: 'offline' })}
            >
              Offline
            </RoundedButton>
          </div>
        }
      </State>
    </div>
  )
