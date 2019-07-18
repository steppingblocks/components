/**
 * ==================================================
 * Common getters/utils
 * ==================================================
 */
export const getRandomNumberInRange = (min = 0, max = 10) =>
  Math.floor(Math.random() * max) + min

/**
 * ==================================================
 * Utility functions for getting random color
 * ==================================================
 */
export const colors = [
  '#30BC9D',
  '#FF9552',
  '#5099DE',
  '#EE6352',
  '#68CEB7',
  '#FFA871',
  '#7FB4E7',
  '#F28D81',
  '#338472',
  '#D17A44',
  '#33628E',
  '#A04438',
  '#30BC9D',
  '#FF9552',
  '#5099DE',
  '#EE6352',
  '#68CEB7',
  '#FFA871',
  '#7FB4E7',
  '#F28D81',
  '#338472',
  '#D17A44',
  '#33628E',
  '#A04438'
]
export const popRandomColor = () =>
  colors[Math.floor(Math.random() * colors.length)]
let colorIndex = 0

export const modifyDataForChart = (data, addColor) => {
  if (data && !!data.length) {
    const modifiedData = data.map(obj => {
      if (addColor) {
        obj.itemStyle = { color: colors[colorIndex++] }
        if (colorIndex >= colors.length) colorIndex = 0
      }
      if (obj.title) {
        obj.name = obj.title
        delete obj.title
      }
      if (obj.children && !!obj.children.length) {
        obj.children = modifyDataForChart(obj.children, addColor)
      }
      return obj
    })

    return modifiedData
  } else {
    return data
  }
}
