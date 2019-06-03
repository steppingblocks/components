---
to: src/hocs/<%=name%>/index.js
---
import React from 'react'
import Box from 'ui-box'

const <%=name%> = BaseComponent => ({ wrapperProps, ...props }) => {
  // @TODO Your logic goes here...
  
  return (
    <Box {...wrapperProps}>
      <BaseComponent {...props} />
    </Box>
  )
}

export default <%=name%>

