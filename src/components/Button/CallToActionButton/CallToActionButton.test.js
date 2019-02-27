import React from 'react'
import { shallow } from 'enzyme'

import CallToActionButton from './CallToActionButton'

const wrapper = shallow(
  <CallToActionButton />
)

describe('Button', () => {
  test('Button component must have type "button"', () => {
    expect(wrapper.find('button').type()).toBe('button')
  })

  test('Button component must create only one button', () => {
    expect(wrapper.find('button')).toHaveLength(1)
  })
})
