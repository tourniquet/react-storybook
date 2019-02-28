import React from 'react'
import { mount } from 'enzyme'

import CallToActionButton from './CallToActionButton'

const wrapper = mount(
  <CallToActionButton />
)

describe('CallToActionButton', () => {
  test('CallToActionButton component must have type "button"', () => {
    expect(wrapper.find('button').type()).toBe('button')
  })

  test('CallToActionButton component must create only one button', () => {
    expect(wrapper.find('button')).toHaveLength(1)
  })
})
