import { addDecorator, configure } from '@storybook/react'

import results from '../jest-test-results.json'
import { withTests } from '@storybook/addon-jest'

addDecorator(
  withTests({ results })
)

const req = require.context('../src/components', true, /\.stories\.js$/)

const loadStories = () => req.keys().forEach(filename => req(filename))

configure(loadStories, module)
