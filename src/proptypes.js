import PT from 'prop-types'

const AlignPT = PT.oneOf(['top', 'middle', 'bottom'])

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
