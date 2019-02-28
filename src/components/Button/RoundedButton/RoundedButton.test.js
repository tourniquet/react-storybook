import React from 'react'
import { mount } from 'enzyme'

import RoundedButton from './RoundedButton'

const wrapper = mount(
  <RoundedButton />
)

describe('RoundedButton', () => {
  test('RoundedButton component must have type "button"', () => {
    expect(wrapper.find('button').type()).toBe('button')
  })

  test('RoundedButton component must create only one button', () => {
    expect(wrapper.find('button')).toHaveLength(1)
  })
})
