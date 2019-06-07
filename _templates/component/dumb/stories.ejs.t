---
to: src/<%=name%>/index.stories.js
---
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import <%=name%> from './index'

const stories = storiesOf('<%=name%>', module)

stories.add('default', () => {
  const props = {

  }

  return <<%=name%> {...props} />
})

stories.addDecorator(withKnobs)


