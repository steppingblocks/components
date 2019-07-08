---
to: src/<%=name%>/index.js
---
import React from 'react'
import PT from 'prop-types'
import withTheme from '../withTheme'

const <%=name%> = withTheme(props => (
  <h1><%=name%></h1>
))

<%=name%>.propTypes = {}

<%=name%>.defaultProps = {}

<%=name%>.displayName = <%=name%>

export default <%=name%>

