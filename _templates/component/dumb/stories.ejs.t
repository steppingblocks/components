---
to: src/ui/<%=path%>/<%=name%>/index.stories.js
---
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import <%=name%> from './index'

const stories = storiesOf('<%= `${h.capitalize(path)}.${name}` %>', module)

stories.add('default', () => {
  const props = {

  }

  return <<%=name%> {...props} />
})

stories.addDecorator(withKnobs)


