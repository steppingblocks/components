---
to: src/hocs/<%=name%>/index.js
---
import React from 'react'

const <%=name%> = BaseComponent => (props) => {
  // @TODO Your logic goes here...
  
  return <BaseComponent {...props} />
}

export default <%=name%>

