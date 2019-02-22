import React from 'react'
import { storiesOf } from '@storybook/react'
import CallToActionButton from '../src/components/Button/CallToActionButton'
import Input from '../src/components/Input'
import RoundedButton from '../src/components/Button/RoundedButton'

storiesOf('CallToActionButton', module)
  .add('with text', () => (
    <CallToActionButton>Hello Button</CallToActionButton>
  ))
  .add('with some emoji', () => (
    <CallToActionButton><span role='img' aria-label='so cool'>😀 😎 👍 💯</span></CallToActionButton>
  ))

storiesOf('RoundedButton', module)
  .add('with text', () => (
    <RoundedButton>Post an ad</RoundedButton>
  ))

storiesOf('Input', module)
  .add('input', () => (
    <Input />
  ))
