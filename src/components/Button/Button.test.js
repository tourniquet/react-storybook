import React from 'react'
import { mount } from 'enzyme'

import Button from './Button'

const wrapper = mount(
  <Button />
)

describe('Button', () => {
  test('Button component must have type "button"', () => {
    expect(wrapper.find('button').type()).toBe('button')
  })

  test('Button component must create only one button', () => {
    expect(wrapper.find('button')).toHaveLength(1)
  })
})
