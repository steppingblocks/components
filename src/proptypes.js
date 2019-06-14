import PT from 'prop-types'

const AlignPT = PT.oneOf(['top', 'middle', 'bottom'])
const SizePT = PT.oneOf(['default', 'large', 'small'])
export const StringOrNodePT = PT.oneOfType([PT.string, PT.node])
export const StringOrNumberPT = PT.oneOfType([PT.number, PT.string])

export const ButtonProps = {
  disabled: PT.bool,
  ghost: PT.bool,
  href: PT.string,
  /** Button type via HTML */
  htmlType: PT.string,
  icon: PT.string,
  loading: PT.bool,
  shape: PT.oneOf(['circle', 'round']),
  size: SizePT,
  target: PT.string,
  type: PT.oneOf(['primary', 'ghost', 'dashed', 'danger', 'link']),
  onClick: PT.func,
  block: PT.bool
}

export const ButtonPropsPT = PT.shape(ButtonProps)

export const InputProps = {
  addonAfter: StringOrNodePT,
  addonBefore: StringOrNodePT,
  defaultValue: PT.string,
  disabled: PT.bool,
  id: PT.string,
  prefix: StringOrNodePT,
  size: SizePT,
  suffix: StringOrNodePT,
  type: PT.string,
  value: PT.string,
  onChange: PT.func,
  onPressEnter: PT.func,
  allowClear: PT.bool
}

export const InputPT = PT.shape({
  ...InputProps
})

const JustifyPT = PT.oneOf([
  'start',
  'end',
  'center',
  'space-around',
  'space-between'
])

export const SpacingPT = PT.shape({
  xs: PT.number,
  sm: PT.number,
  md: PT.number,
  lg: PT.number
})

export const RowPT = PT.shape({
  align: AlignPT,
  gutter: SpacingPT,
  justify: JustifyPT,
  type: PT.string
})
