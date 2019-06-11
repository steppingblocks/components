---
to: src/hocs/<%=name%>/index.js
---
import React from 'react'
import { Box } from '@xstyled/styled-components'

const <%=name%> = BaseComponent => (props) => {
  // @TODO Your logic goes here...
  
  return <BaseComponent as={BaseComponent} {...props} />
}

export default <%=name%>

