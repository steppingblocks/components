import React from 'react'
import get from 'lodash/get'
import omit from 'lodash/omit'
import { Icon, Input } from 'antd'
import withTheme from '../withTheme'

const SIcon = withTheme(Icon)
const SInput = withTheme(Input)

const SingleLineTextInput = React.forwardRef((props, ref) => {
  const extraProps = {}

  if (get(props, 'icon')) {
    extraProps.prefix = <SIcon type={get(props, 'icon')} color="disabled" />
  }

  return <SInput ref={ref} {...omit(props, 'icon')} {...extraProps} />
})

export default SingleLineTextInput
